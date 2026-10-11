// src/utils/affiliate.js

// ১. কুকি সেট করার ফাংশন
export const setAffiliateCookie = (refCode) => {
  if (!refCode) return;
  const days = 30;
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `affiliateRef=${refCode};${expires};path=/;SameSite=Lax`;
};

// ২. কুকি থেকে রেফারেল কোড রিড করার ফাংশন
export const getAffiliateCookie = () => {
  if (typeof window === "undefined") return null;
  const name = "affiliateRef=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

// ৩. অটোমেটিক URL থেকে ref চেক করে কুকি সেট করার ফাংশন
export const initAffiliateTracking = () => {
  if (typeof window === "undefined") return;
  const queryParams = new URLSearchParams(window.location.search);
  const refCode = queryParams.get("ref");
  if (refCode) {
    setAffiliateCookie(refCode);
  }
};

// ফাইল লোড হওয়ার সাথে সাথে এটি অটো রান করবে
initAffiliateTracking();