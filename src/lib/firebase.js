// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   GoogleAuthProvider,
//   signInWithPopup,
//   sendEmailVerification,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleAuthProvider = new GoogleAuthProvider();

// const registerWithEmailAndPassword = async (email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     sendEmailVerification(user).then(() =>
//       alert("Please Activate your account"),
//     );
//     console.log(user);

//     return user;
//   } catch (err) {
//     throw err;
//   }
// };

// const loginWithEmailAndPassword = async (email, password) => {
//   try {
//     const res = await signInWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     if (user.emailVerified === false) {
//       alert("Please verify the email");
//     } else {
//       alert("Login successful");
//     }
//     return user;
//   } catch (err) {
//     throw err;
//   }
// };

// const sendResetPassword = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//   } catch (err) {
//     throw err;
//   }
// };

// const registerInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleAuthProvider);
//     const user = res.user;
//     return user;
//   } catch (err) {
//     throw err;
//   }
// };

// export {
//   auth,
//   registerWithEmailAndPassword,
//   loginWithEmailAndPassword,
//   sendResetPassword,
//   registerInWithGoogle,
// };

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
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // ✅ was process.NEXT_PUBLIC_...
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

/**
 * Creates the Firebase Auth user and sends verification email.
 * Does NOT save anything to your DB yet.
 * After calling this, sign the user out so they can't access the app unverified.
 */
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Send verification email
    await sendEmailVerification(user);

    // Sign out immediately — they must verify before they can log in
    await signOut(auth);

    return { success: true };
  } catch (err) {
    throw err;
  }
};

/**
 * Signs in the user, reloads to get latest emailVerified status.
 * If not verified: signs out and throws an error.
 * If verified: THIS is where you save the user to your DB for the first time.
 */
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Reload to get fresh emailVerified flag from Firebase servers
    await reload(user);

    if (!auth.currentUser.emailVerified) {
      await signOut(auth);
      throw new Error("email-not-verified");
    }

    // ✅ Email is verified — save user to your DB here if first login
    // e.g. await saveUserToFirestore(auth.currentUser);

    return auth.currentUser;
  } catch (err) {
    throw err;
  }
};

/**
 * Resend verification email — user must provide credentials again
 * since we sign them out after registration.
 */
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
    await signOut(auth); // Sign out again after sending
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
    // Google users are pre-verified, save to DB here
    // e.g. await saveUserToFirestore(res.user);
    return res.user;
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
