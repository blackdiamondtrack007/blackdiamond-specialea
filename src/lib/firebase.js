import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  reload,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (name, email, password, phone) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await updateProfile(user, {
      displayName: name,
    });

    localStorage.setItem("phoneNumber", phone);

    await sendEmailVerification(user);

    await signOut(auth);

    return { success: true };
  } catch (err) {
    throw err;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const user = res.user;

    await reload(user);

    if (!auth.currentUser.emailVerified) {
      await signOut(auth);

      throw new Error("email-not-verified");
    }

    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName || "No Name",
        email: auth.currentUser.email,
        phone: localStorage.getItem("phoneNumber") || "No Phone",
      }),
    });

    return auth.currentUser;
  } catch (err) {
    throw err;
  }
};

const resendVerificationEmail = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await reload(user);

    if (auth.currentUser.emailVerified) {
      await signOut(auth);
      throw new Error("already-verified");
    }

    await sendEmailVerification(auth.currentUser);
    await signOut(auth);
    return { success: true };
  } catch (err) {
    throw err;
  }
};

const sendResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw err;
  }
};

const registerInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);

    const user = res.user;

    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName || "No Name",
        email: auth.currentUser.email,
        phone: "No Phone",
      }),
    });

    return user;
  } catch (err) {
    throw err;
  }
};

export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resendVerificationEmail,
  sendResetPassword,
  registerInWithGoogle,
};
