"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const showVerificationToast = () => {
  const VerificationContent = ({ closeToast }) => {
    const router = useRouter();

    return (
      <div className="bg-white flex flex-col items-center p-4">
        <p className="text-nav-bg mb-4 text-center text-text-body">
          A verification email has been sent your email. Please check your inbox or spam folder to verify your email before
          logging in.
        </p>
        <button
          onClick={() => {
            closeToast();
            toast.success("Your account created successfully!");
            router.push("/login");
          }}
          className="px-8 py-2 bg-primary cursor-pointer text-white font-semibold rounded-lg o transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          OK
        </button>
      </div>
    );
  };

  toast(<VerificationContent />, {
    position: "top-center",
    autoClose: false,
    closeOnClick: false,
    closeButton: false,
    draggable: false,
    className: "custom-verification-toast",
  });
};
