import { checkUserExists, addUser } from "@/lib/googleSheet";

export async function POST(req) {
  try {
    const body = await req.json();

    const { uid, name, email, phone } = body;

    const exists = await checkUserExists(email);

    if (!exists) {
      await addUser(uid, name, email, phone);
    }

    return Response.json({
      success: true,
      exists,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
