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
import { useAuthState } from "react-firebase-hooks/auth";

export default function Register() {
  const navigate = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [user, loading] = useAuthState(auth);

  // useEffect(() => {
  //   if (!loading && user) {
  //     navigate.back();
  //   }
  // }, [user, loading, navigate]);

  // const handleRegister = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const user = await registerWithEmailAndPassword(email, password);
  //     if (user) {
  //       navigate.push("/login");
  //     }
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  const [message, setMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await registerWithEmailAndPassword(email, password);
      // Don't navigate — show a message to check their email
      setMessage(
        "A verification email has been sent. Please verify your email before logging in.",
      );
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setMessage("This email is already registered. Please log in.");
      } else {
        setMessage(err.message);
      }
    }
  };

  // In your JSX, show the message below the button:
  // {message && <p className="text-sm text-center text-red-500 mt-2">{message}</p>}

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
                  <Label htmlFor="firstname" className="block text-sm">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    required
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="block text-sm">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    required
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter your last name"
                  />
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
                />
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
                  className="input sz-md variant-mixed"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="block text-sm">
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
                />
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

        {message && (
          <p className="text-sm text-center text-red-500 mt-2">{message}</p>
        )}
      </div>
    </div>
  );
}
