// import { getOrders, addOrder } from "@/lib/googleSheet";

// export async function GET() {
//   try {
//     const data = await getOrders();
//     return Response.json({ success: true, data });
//   } catch (error) {
//     return Response.json(
//       { success: false, message: error.message },
//       { status: 500 },
//     );
//   }
// }

// export async function POST(req) {
//   try {
//     const { uid, name, email, phone, product, price, paymentMethod } =
//       await req.json();

//     if (!name || !email || !phone || !product || !price || !paymentMethod) {
//       return Response.json(
//         { success: false, message: "Missing required fields." },
//         { status: 400 },
//       );
//     }

//     const orderId = await addOrder({
//       uid,
//       name,
//       email,
//       phone,
//       product,
//       price,
//       paymentMethod,
//     });
//     return Response.json({ success: true, orderId });
//   } catch (error) {
//     return Response.json(
//       { success: false, message: error.message },
//       { status: 500 },
//     );
//   }
// }

import { getOrders, addOrder } from "@/lib/googleSheet";

export async function GET() {
  try {
    const data = await getOrders();

    // Ensure data is structured and valid
    if (Array.isArray(data)) {
      // Sort orders dynamically by "Created At" timestamp (Newest orders first)
      data.sort((a, b) => {
        const dateA = new Date(a["Created At"] || a.createdAt || 0);
        const dateB = new Date(b["Created At"] || b.createdAt || 0);
        return dateB - dateA;
      });
    }

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
    const { uid, name, email, phone, product, price, paymentMethod } =
      await req.json();

    if (!name || !email || !phone || !product || !price || !paymentMethod) {
      return Response.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    // Capture the current timestamp when appending a new row
    const createdAt = new Date().toISOString();

    const orderId = await addOrder({
      uid,
      name,
      email,
      phone,
      product,
      price,
      paymentMethod,
      createdAt, // Make sure your googleSheet helper appends this column!
    });

    return Response.json({ success: true, orderId });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
