"use client";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2, Download } from "lucide-react";
import { X } from "lucide-react";

export default function FreeOfferPopup() {
  const [user, loadingAuth] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const pathname = usePathname();

  // 'Buy Free' order state
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  // 1. Check if logged-in user already downloaded the free version via API route
  useEffect(() => {
    async function checkDownloadStatus() {
      if (user?.email) {
        try {
          setCheckingStatus(true);
          const res = await fetch(
            `/api/orders?email=${encodeURIComponent(user.email)}`,
          );
          const data = await res.json();
          console.log("Download: ", data);

          if (data.success && data.hasDownloaded) {
            setHasDownloaded(true);
            setIsOpen(false);
            return;
          }
        } catch (err) {
          console.error("Failed to check download status", err);
        } finally {
          setCheckingStatus(false);
        }
      } else {
        setCheckingStatus(false);
      }
    }

    if (!loadingAuth) {
      checkDownloadStatus();
    }
  }, [user, loadingAuth]);

  // 2. Control popup behavior based on current path, auth flags, and download status
  useEffect(() => {
    // Never show if already downloaded, checking status, or on login/register pages
    if (
      hasDownloaded ||
      checkingStatus ||
      pathname === "/login" ||
      pathname === "/register"
    ) {
      setIsOpen(false);
      return;
    }

    const dismissed = sessionStorage.getItem("free_popup_dismissed");
    const cameFromAuth = sessionStorage.getItem("came_from_auth");

    // Clear the auth flag once read so it only triggers once per login/register flow
    if (cameFromAuth) {
      sessionStorage.removeItem("came_from_auth");
    }

    if (!dismissed) {
      if (cameFromAuth) {
        // Open instantly if they just came from login or register
        setIsOpen(true);
      } else {
        // Otherwise, wait for the 7-second timer
        const timer = setTimeout(() => {
          if (
            !hasDownloaded &&
            window.location.pathname !== "/login" &&
            window.location.pathname !== "/register"
          ) {
            setIsOpen(true);
          }
        }, 7000);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hasDownloaded, checkingStatus]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("free_popup_dismissed", "true");
  };

  const handleAuthNavigation = () => {
    sessionStorage.setItem("came_from_auth", "true");
    setIsOpen(false);
  };

  // Handle 'Buy Free' action: saves order to database, marks as downloaded, and opens Google Drive
  const handleBuyFree = async () => {
    setProcessing(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user?.uid,
          name:
            user?.displayName || user?.email?.split("@")[0] || "Valued User",
          email: user?.email,
          phone: user?.phoneNumber || "N/A",
          product: "BlackDiamond_Free",
          price: 0,
          paymentMethod: "free",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setDownloadUrl(data.downloadLink);
      setSuccess(true);
      setHasDownloaded(true); // Instantly flag as downloaded so it won't show again

      // Automatically open the Google Drive download link in a new tab
      window.open(data.downloadLink, "_blank", "noopener,noreferrer");
    } catch (err) {
      alert(err.message || "Something went wrong.");
    } finally {
      setProcessing(false);
    }
  };

  // Do not render anything if closed, already downloaded, or still verifying database state
  if (!isOpen || hasDownloaded || checkingStatus) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5 bg-[#020408]/[0.88] backdrop-blur-[12px] animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-[540px] bg-[radial-gradient(circle_at_50%_0%,#161c28_0%,#080a0f_100%)] border-[1.5px] border-[#d4af37]/45 rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.2)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-[18px] right-[20px] bg-white/[0.08] border border-white/15 text-[#bbb] w-[38px] h-[38px] rounded-full text-[20px] cursor-pointer flex items-center justify-center z-10 transition-all duration-250 hover:bg-[#ff416c] hover:text-white hover:border-[#ff416c]"
        >
          <X size={18} />
        </button>

        {/* Media & Diamond Section */}
        <div className="w-full min-h-[250px] px-5 pt-[26px] pb-5 bg-[radial-gradient(circle_at_center,#1b2336_0%,#0a0e17_100%)] flex flex-col items-center justify-center relative border-b border-[#d4af37]/20">
          <div className="text-[80px] drop-shadow-[0_0_25px_rgba(0,208,255,0.85)] animate-[floatPulse_3s_infinite_ease-in-out]">
            💎
          </div>
          <div className="mt-3 font-serif text-center leading-[1.4]">
            <span className="block text-[14px] font-bold text-[#f7d070] tracking-[2px] drop-shadow-[0_0_10px_rgba(247,208,112,0.5)]">
              BLACK DIAMOND SPECIAL AI
            </span>
            <span className="block text-[13px] font-extrabold text-[#ffd700] tracking-[3px] mt-1">
              VERSION 9.5
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-[36px] pt-[28px] pb-[34px] text-center">
          {!user ? (
            /* ================= LOGGED OUT DESIGN ================= */
            <>
              <span className="inline-block bg-[linear-gradient(135deg,#d4af37,#85581a)] text-[#000] text-[11px] font-extrabold px-[18px] py-[6px] rounded-full tracking-[1.5px] uppercase shadow-[0_0_15px_rgba(212,175,55,0.4)] mb-4">
                Exclusive VIP Invitation
              </span>

              <h2 className="font-serif font-extrabold text-white leading-[1.3] mb-[14px]">
                <span className="block text-[24px] bg-[linear-gradient(90deg,#ffe28a,#d4af37,#ff9900)] bg-clip-text text-transparent tracking-[1px]">
                  Unlock VIP Access
                </span>
                <span className="block text-[20px] text-[#f1f5f9] tracking-[1.5px] mt-1.5">
                  To Precision Signals
                </span>
              </h2>

              <p className="text-[14px] text-[#a0aec0] leading-[1.6] mb-[26px]">
                Elevate your market execution with our institutional-grade AI
                engine. Get lifetime access to automated precision indicators at
                zero subscription fee.
              </p>

              <Link
                href="/login"
                onClick={handleAuthNavigation}
                className="flex items-center justify-center gap-3 w-full p-4 rounded-[12px] border border-[#ffd700]/40 bg-[linear-gradient(90deg,#d4af37_0%,#aa7c11_100%)] text-[#0b0e14] text-[16px] font-extrabold tracking-[1px] uppercase cursor-pointer no-underline shadow-[0_8px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#ffe28a_0%,#c49219_100%)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,175,55,0.5)]"
              >
                <span>Get VIP Free Access Now</span> &rarr;
              </Link>

              <div className="mt-[18px] text-[13px] text-[#718096]">
                Already registered?{" "}
                <Link
                  href="/login"
                  onClick={handleAuthNavigation}
                  className="text-[#f7d070] no-underline font-semibold hover:underline"
                >
                  Sign In to Dashboard
                </Link>
              </div>
            </>
          ) : success ? (
            /* ================= SUCCESS STATE DESIGN ================= */
            <>
              <span className="inline-block bg-[linear-gradient(135deg,#10b981,#047857)] text-white text-[11px] font-extrabold px-[18px] py-[6px] rounded-full tracking-[1.5px] uppercase shadow-[0_0_15px_rgba(16,185,129,0.35)] mb-4">
                Order Confirmed
              </span>

              <h2 className="font-serif font-extrabold text-white leading-[1.3] mb-4">
                <span className="block text-[24px] bg-[linear-gradient(90deg,#ffe28a,#d4af37,#ff9900)] bg-clip-text text-transparent tracking-[1px]">
                  Your Order Is Confirmed!
                </span>
                <span className="block text-[18px] text-[#f1f5f9] tracking-[1.5px] mt-1.5">
                  Download Opened in New Tab
                </span>
              </h2>

              <div className="bg-white/[0.03] border border-[#d4af37]/20 rounded-[12px] p-[14px_18px] mb-[22px] text-left">
                <p className="text-[12px] text-[#94a3b8] leading-[1.5]">
                  Your download link has been successfully launched. Since you
                  have claimed your free version, this popup will no longer
                  appear.
                </p>
              </div>

              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 rounded-[12px] border border-[#ffd700]/40 bg-[linear-gradient(90deg,#d4af37_0%,#aa7c11_100%)] text-[#0b0e14] text-[16px] font-extrabold tracking-[0.5px] uppercase cursor-pointer no-underline shadow-[0_8px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#ffe28a_0%,#c49219_100%)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,175,55,0.5)]"
              >
                <Download className="w-5 h-5" />
                <span>Open Download Link Again</span>
              </a>

              <div className="mt-4 text-[12px] text-[#64748b]">
                Instant Secure Access &bull; Installation Guide Included
              </div>
            </>
          ) : (
            /* ================= LOGGED IN READY DESIGN ================= */
            <>
              <span className="inline-block bg-[linear-gradient(135deg,#10b981,#047857)] text-white text-[11px] font-extrabold px-[18px] py-[6px] rounded-full tracking-[1.5px] uppercase shadow-[0_0_15px_rgba(16,185,129,0.35)] mb-4">
                Verification Completed
              </span>

              <h2 className="font-serif font-extrabold text-white leading-[1.3] mb-[18px]">
                <span className="block text-[24px] bg-[linear-gradient(90deg,#ffe28a,#d4af37,#ff9900)] bg-clip-text text-transparent tracking-[1px]">
                  Your Free License Is Ready
                </span>
                <span className="block text-[20px] text-[#f1f5f9] tracking-[1.5px] mt-1.5">
                  Download Software Package
                </span>
              </h2>

              {/* User Info Card */}
              <div className="bg-white/[0.03] border border-[#d4af37]/20 rounded-[12px] p-[14px_18px] mb-[22px] text-left">
                <div className="flex items-center gap-2 text-[13px] text-[#cbd5e1] mb-1.5">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_8px_#10b981]" />
                  <span>Verified Account:</span>
                  <span className="text-[#f7d070] font-semibold truncate max-w-[200px]">
                    {user.email}
                  </span>
                </div>
                <p className="text-[12px] text-[#94a3b8] leading-[1.5]">
                  Your license key has been bound to this account. Click below
                  to access your secure Google Drive repository.
                </p>
              </div>

              {/* Drive Download Action Button */}
              <button
                onClick={handleBuyFree}
                disabled={processing}
                className="flex items-center justify-center gap-3 w-full p-4 rounded-[12px] border border-[#ffd700]/40 bg-[linear-gradient(90deg,#d4af37_0%,#aa7c11_100%)] text-[#0b0e14] text-[16px] font-extrabold tracking-[0.5px] uppercase cursor-pointer no-underline shadow-[0_8px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-[linear-gradient(90deg,#ffe28a_0%,#c49219_100%)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,175,55,0.5)] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Download From Google Drive</span>
                  </>
                )}
              </button>

              <div className="mt-4 text-[12px] text-[#64748b]">
                Instant Secure Access &bull; Installation Guide Included
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
