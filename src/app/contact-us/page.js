"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// const contactFormSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters."),
//   email: z.string().email("Please enter a valid email address."),
//   subject: z.string().min(5, "Subject must be at least 5 characters."),
//   message: z.string().min(10, "Message must be at least 10 characters."),
// });

// export default function ContactUs() {
//   const form = useForm({
//     resolver: zodResolver(contactFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });

//   function onSubmit(data) {
//     console.log("Form Submitted Data:", data);
//     alert("Thank you! Your message has been sent successfully.");
//     form.reset();
//   }
//   return (
//     <section className="w-full">
//       <div className="container pt-12 md:pt-15 lg:pt-30">
//         <div className="space-y-4 md:space-y-6 xl:space-y-8">
//           <h2 className="text-text-primary text-center">Contact Us</h2>
//           <p className="text-body text-center mt-3 lg:mt-5">
//             We Provide Best Customer Support
//           </p>
//         </div>
//         <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
//           {/* LEFT COLUMN: CONTACT INFORMATION */}
//           <div className="flex flex-col justify-between bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold tracking-tight">
//                 Get in touch
//               </h2>
//               <p className="text-slate-400 text-lg leading-relaxed">
//                 Have questions or want to collaborate? Fill out the form, and
//                 our team will get back to you within 24 hours.
//               </p>

//               <div className="space-y-6 pt-6">
//                 {/* Phone Row */}
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.926.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
//                       Call us
//                     </p>
//                     <p className="text-slate-200 font-medium">
//                       +1 (555) 000-0000
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email Row */}
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
//                       Email support
//                     </p>
//                     <p className="text-slate-200 font-medium">
//                       support@yourdomain.com
//                     </p>
//                   </div>
//                 </div>

//                 {/* Location Row */}
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
//                       Main office
//                     </p>
//                     <p className="text-slate-200 font-medium">
//                       123 Tech Square, San Francisco, CA
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Optional Footer Signature */}
//             <div className="text-xs text-slate-500 pt-8 border-t border-slate-800 mt-8 md:mt-0">
//               © 2026 Your Company Inc. All rights reserved.
//             </div>
//           </div>

//           {/* RIGHT COLUMN: SHADCN CONTACT FORM */}
//           <Card className="rounded-2xl shadow-xl border-none flex flex-col justify-center">
//             <CardContent className="p-8 md:p-12">
//               <Form {...form}>
//                 <form
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className="space-y-5"
//                 >
//                   {/* Name Field */}
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Full Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="John Doe" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Email Field */}
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email Address</FormLabel>
//                         <FormControl>
//                           <Input
//                             type="email"
//                             placeholder="john@example.com"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Subject Field */}
//                   <FormField
//                     control={form.control}
//                     name="subject"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Subject</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="How can we help you?"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Message Field */}
//                   <FormField
//                     control={form.control}
//                     name="message"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             placeholder="Tell us more about your project or inquiry..."
//                             className="min-h-[120px] resize-none"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-6 rounded-lg transition-colors"
//                   >
//                     Send Message
//                   </Button>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

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
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <div className="flex flex-col justify-between bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Get in touch
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Have questions or want to collaborate? Fill out the form, and
                our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 pt-6">
                {/* Phone Row */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
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
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Call us
                    </p>
                    <p className="text-slate-200 font-medium">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
                {/* Email Row */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
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
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Email support
                    </p>
                    <p className="text-slate-200 font-medium">
                      support@yourdomain.com
                    </p>
                  </div>
                </div>
                {/* Location Row */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Main office
                    </p>
                    <p className="text-slate-200 font-medium">
                      123 Tech Square, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Optional Footer Signature */}
            <div className="text-xs text-slate-500 pt-8 border-t border-slate-800 mt-8 md:mt-0">
              © 2026 Your Company Inc. All rights reserved.
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
                placeholder="John Doe"
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
                placeholder="john@example.com"
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
              className="w-full rounded-lg bg-black px-5 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
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
    </section>
  );
}
