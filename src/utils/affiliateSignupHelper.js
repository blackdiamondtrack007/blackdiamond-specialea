// src/utils/affiliateSignupHelper.js
import { getAffiliateCookie } from "./affiliate";

// নতুন ইউজারের ডাটার সাথে অ্যাফিলিয়েট কোড যুক্ত করার ফাংশন
export const attachAffiliateToUserData = (userData) => {
  const refCode = getAffiliateCookie();
  
  return {
    ...userData,
    referredBy: refCode || null, // যদি কুকি থাকে তবে রেফারেন্স যোগ হবে, না থাকলে null
  };
};