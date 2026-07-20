"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import SocialMedia from "@/components/shared/social-media";
import _24x7 from "../../../public/assets/footer/24x7.webp";
import OurPartners from "@/components/home/OurPartners";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">Contact Us</h2>
          <p className="text-body text-center mt-3 lg:mt-5">
            We Provide Best Customer Support
          </p>
        </div>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 md:mt-10 lg:mt-15">
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <div className="flex flex-col justify-between">
            <div className="space-y-10">
              <p className="text-body-large">
                We are committed to processing the information in order to
                contact you and talk about your support.
              </p>
              <div className="space-y-6">
                {/* Phone Row */}
                {/* <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-lg text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.926.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider">
                      Call us
                    </p>
                    <p className="font-medium"></p>
                  </div>
                </div> */}
                {/* Email Row */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-lg text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider">
                      Email support
                    </p>
                    <a
                      className="font-medium"
                      href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=support@blackdiamondea.info"
                      target="_blank"
                    >
                      {" "}
                      support@blackdiamondea.info
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-body-large font-semibold">Chat with us</h5>
                <div className="mt-3">
                  <SocialMedia />
                  <Image className="w-60 mt-6" src={_24x7} alt="24x7" />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: SHADCN CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="user_name" className="mb-2 block font-medium">
                Name
              </label>

              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your fullname"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="mb-2 block font-medium">
                Email
              </label>

              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block font-medium">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-medium">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary px-5 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600">Message sent successfully!</p>
            )}

            {status === "error" && (
              <p className="text-red-600">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
      <OurPartners />
    </section>
  );
}
