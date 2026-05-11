"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import LogoIcon from "../../../public/logo.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  auth,
  registerInWithGoogle,
  registerWithEmailAndPassword,
} from "@/lib/firebase";

import { toast } from "react-toastify";
import { showVerificationToast } from "@/components/popup/CustomToast";

// --- Password strength helper ---
function getPasswordStrength(password) {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;

  if (score <= 1) return { score, label: "Weak", color: "#ef4444" };
  if (score === 2) return { score, label: "Fair", color: "#f97316" };
  if (score === 3) return { score, label: "Good", color: "#eab308" };
  return { score, label: "Strong", color: "#22c55e" };
}

export default function Register() {
  const navigate = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fullName = firstName + " " + lastName;
  const passwordStrength = getPasswordStrength(password);

  const formReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setErrors({});
    setSubmitted(false);
  };

  // Validate all fields, return error object
  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (passwordStrength.score < 3) {
      newErrors.password = "Please use a stronger password.";
    }
    if (!phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required.";
    return newErrors;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const savedName = fullName;
    const savedEmail = email;
    const savedPassword = password;
    const savedPhone = phoneNumber;
    formReset();
    try {
      await registerWithEmailAndPassword(
        savedName,
        savedEmail,
        savedPassword,
        savedPhone,
      );
      showVerificationToast();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Please log in.");
      } else {
        toast.error("Something happening wrong. Try Again!");
      }
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      const user = await registerInWithGoogle();
      if (user) {
        navigate.push("/");
      }
      return user;
    } catch (err) {
      throw err;
    }
  };

  // Re-validate on change if form was submitted once
  useEffect(() => {
    if (submitted) {
      setErrors(validate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, email, password, phoneNumber, submitted]);

  return (
    <div className="w-full mt-18 lg:mt-36.75">
      <div className="container pt-10 lg:pt-15">
        <form
          action=""
          className="bg-card m-auto h-fit w-full max-w-xl rounded-md border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
        >
          <div className="p-8 pb-6">
            <div>
              <Link href="/" aria-label="go home">
                <Image
                  src={LogoIcon}
                  alt="BlackDiamondEA Logo"
                  className="rounded-md w-48"
                />
              </Link>
              <h1 className="mb-1 mt-4 text-xl font-semibold">
                Create a BlackDiamondEA Account
              </h1>
              <p className="text-sm">
                Welcome! Create an account to get started
              </p>
            </div>

            <div className="mt-6 w-full">
              <Button
                type="button"
                variant="outline"
                className={"w-full"}
                onClick={handleRegisterWithGoogle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285f4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34a853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#fbbc05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                  ></path>
                  <path
                    fill="#eb4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                <span>Google</span>
              </Button>
            </div>

            <hr className="my-4 border-dashed" />

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="block text-sm">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className={
                      errors.firstName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="block text-sm">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    required
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className={
                      errors.lastName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm">
                  Email
                </Label>
                <Input
                  type="email"
                  required
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="pwd" className="text-sm">
                    Password
                  </Label>
                  <Button asChild variant="link" size="sm">
                    <Link
                      href="#"
                      className="link intent-info variant-ghost text-sm"
                    >
                      Forgot your Password ?
                    </Link>
                  </Button>
                </div>
                <Input
                  type="password"
                  required
                  name="pwd"
                  id="pwd"
                  className={`input sz-md variant-mixed ${errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />

                {/* Password strength meter */}
                {password.length > 0 && (
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor:
                              i <= passwordStrength.score
                                ? passwordStrength.color
                                : "#e5e7eb",
                          }}
                        />
                      ))}
                    </div>
                    <p
                      className="text-xs font-medium"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.label}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 mt-1">
                      <li
                        className={password.length >= 8 ? "text-green-500" : ""}
                      >
                        {password.length >= 8 ? "✓" : "·"} At least 8 characters
                      </li>
                      <li
                        className={
                          /[A-Z]/.test(password) ? "text-green-500" : ""
                        }
                      >
                        {/[A-Z]/.test(password) ? "✓" : "·"} One uppercase
                        letter
                      </li>
                      <li
                        className={
                          /[0-9]/.test(password) ? "text-green-500" : ""
                        }
                      >
                        {/[0-9]/.test(password) ? "✓" : "·"} One number
                      </li>
                    </ul>
                  </div>
                )}

                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="block text-sm">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  required
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className={
                    errors.phoneNumber
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <Button className="w-full" type="submit" onClick={handleRegister}>
                Sign Up
              </Button>
            </div>
          </div>

          <div className="pb-5">
            <p className="text-accent-foreground text-center text-sm">
              Have an account ?
              <Button asChild variant="link" className="px-2">
                <Link href="/login">Sign In</Link>
              </Button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
