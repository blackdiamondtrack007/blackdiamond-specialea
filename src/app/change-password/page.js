"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import LogoIcon from "../../../public/logo.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendResetPassword } from "@/lib/firebase";

export default function ChangePassword() {
  const navigate = useRouter();
  const [email, setEmail] = useState("");

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      sendResetPassword(email);
      if (user) {
        navigate.push("/");
      }
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
                Change Password
              </h1>
            </div>

            <hr className="my-4 border-dashed" />

            <div className="space-y-6">
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

              <Button className="w-full" onClick={handleChangePassword}>
                Reset Password
              </Button>
            </div>
          </div>

          <div className="pb-5">
            <p className="text-accent-foreground text-center text-sm">
              {"Don't"} have an account ?
              <Button asChild variant="link" className="px-2">
                <Link href="/register">Create account</Link>
              </Button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
