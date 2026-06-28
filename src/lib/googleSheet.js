import "server-only";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
      /\\\\n/g,
      "\n",
    )?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const spreadsheetId = process.env.GOOGLE_SHEET_ID;

// ── Tab names — must match exactly ──────────────────────────────────────────
const USERS_TAB = "Users"; // your Users tab
const ORDERS_TAB = "Orders"; // your Orders tab

// ── Users ────────────────────────────────────────────────────────────────────
// Columns: A=ID | B=Name | C=Email | D=Phone

export async function getSheetsData() {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${USERS_TAB}!A:D`,
  });
  return res.data.values || [];
}

export async function checkUserExists(email) {
  const rows = await getSheetsData();
  // Row 1 is header, data starts at row 2 (index 1)
  // Email is column C → index 2
  return rows.slice(1).some((row) => row[2] === email);
}

export async function addUser(uid, name, email, phone) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${USERS_TAB}!A:D`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[uid, name, email, phone]],
    },
  });
}

// ── Orders ───────────────────────────────────────────────────────────────────
// Columns: A=OrderID | B=UID | C=Name | D=Email | E=Phone
//          F=Product | G=Price | H=PaymentMethod | I=Status | J=CreatedAt

export async function getOrders() {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${ORDERS_TAB}!A:J`,
  });
  return res.data.values || [];
}

export async function addOrder({
  uid,
  name,
  email,
  phone,
  product,
  price,
  paymentMethod,
  status = "pending",
}) {
  const orderId = `ORD-${Date.now()}`;
  const createdAt = new Date().toISOString();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${ORDERS_TAB}!A:J`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          orderId,
          uid,
          name,
          email,
          phone,
          product,
          price,
          paymentMethod,
          status,
          createdAt,
        ],
      ],
    },
  });

  return orderId;
}

export async function updateOrderStatus(orderId, newStatus) {
  const rows = await getOrders();
  // Skip header (index 0), find matching OrderID in column A
  const rowIndex = rows.findIndex((row, i) => i > 0 && row[0] === orderId);
  if (rowIndex === -1) throw new Error(`Order ${orderId} not found.`);

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${ORDERS_TAB}!I${rowIndex + 1}`, // column I = Status
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[newStatus]] },
  });
}
