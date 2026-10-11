// src/app/reseller/page.jsx
"use client";

import ResellerAuthModal from '@/components/ResellerAuthModal';

export default function ResellerPage() {
  return (
    <main style={{ width: '100vw', height: '100vh', backgroundColor: '#05070b' }}>
      <ResellerAuthModal isOpen={true} onClose={() => {}} />
    </main>
  );
}