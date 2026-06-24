// import { getSheetsData } from "@/lib/googleSheet";
// import { checkUserExists, addUser } from "@/lib/googleSheet";

// export async function GET() {
//   const data = await getSheetsData();

//   return Response.json(data);
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const { uid, name, email, phone } = body;

//     const exists = await checkUserExists(email);

//     if (!exists) {
//       await addUser(uid, name, email, phone);
//     }

//     return Response.json({
//       success: true,
//       exists,
//     });
//   } catch (error) {
//     return Response.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

import { getSheetsData, checkUserExists, addUser } from "@/lib/googleSheet";

export async function GET() {
  try {
    const data = await getSheetsData();
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const { uid, name, email, phone } = await req.json();
    const exists = await checkUserExists(email);
    if (!exists) await addUser(uid, name, email, phone);
    return Response.json({ success: true, exists });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
