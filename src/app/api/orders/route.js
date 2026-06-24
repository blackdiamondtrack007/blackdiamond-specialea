// import { addOrder, getOrders } from "@/lib/googleSheet";

// /**
//  * GET /api/orders
//  * Returns all orders from Sheet2.
//  */
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

// /**
//  * POST /api/orders
//  * Body: { uid, name, email, phone, product, price, paymentMethod, status? }
//  * Creates a new order row in Sheet2 and returns the generated orderId.
//  */
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { uid, name, email, phone, product, price, paymentMethod, status } =
//       body;

//     // Basic validation
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
//       status: status || "pending",
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

    const orderId = await addOrder({
      uid,
      name,
      email,
      phone,
      product,
      price,
      paymentMethod,
    });
    return Response.json({ success: true, orderId });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
