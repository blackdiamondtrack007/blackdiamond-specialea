// src/app/reseller/dashboard/page.jsx
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResellerDashboard() {
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const savedUser = localStorage.getItem('reseller_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        parsedUser.balance = parsedUser.balance ? Number(parsedUser.balance) : 0.00;
        parsedUser.totalSales = parsedUser.totalSales ? Number(parsedUser.totalSales) : 0;
        setUser(parsedUser);
      } catch (e) {
        localStorage.removeItem('reseller_user');
        router.push('/reseller');
      }
    } else {
      router.push('/reseller');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('reseller_user');
    router.push('/reseller');
  };

  const affiliateLink = user && user.email ? `https://blackdiamondea.info/?ref=${user.email.split('@')[0]}` : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isClient || !user) {
    return (
      <div style={styles.loadingContainer}>
        <div className="diamond-pulse" style={{ fontSize: '50px' }}>💎</div>
        <p style={{ color: '#f7d070', marginTop: '15px', fontSize: '16px', letterSpacing: '1px' }}>Loading Portal...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      {/* এক্সক্লুসিভ টপ নেভবার (শুধু লোগো ও ব্র্যান্ড নেম) */}
      <header style={styles.navbar}>
        <div style={styles.navBrand}>
          <span className="diamond-pulse" style={{ fontSize: '28px' }}>💎</span>
          <span style={styles.brandText}>BLACK DIAMOND PARTNER</span>
        </div>
      </header>

      {/* মেইন ড্যাশবোর্ড কন্টেন্ট */}
      <main style={styles.mainContent}>
        
        {/* ওয়েলকাম কার্ড */}
        <div style={styles.welcomeCard}>
          <span style={styles.badge}>Reseller Control Center</span>
          <h1 style={styles.welcomeTitle}>
            Welcome Back, <span style={styles.highlightName}>{user.name || 'Partner'}</span>!
          </h1>
          <p style={styles.welcomeSubtitle}>
            Monitor your software sales, track your available balance, and share your exclusive referral link.
          </p>
        </div>

        {/* স্ট্যাটিস্টিকস গ্রিড (ব্যালেন্স এবং টোটাল সফটওয়্যার সেল) */}
        <div style={styles.gridContainer}>
          
          {/* ব্যালেন্স কার্ড */}
          <div style={styles.glassCard}>
            <div style={styles.cardHeader}>
              <span style={styles.cardIcon}>💰</span>
              <span style={styles.cardTitleText}>Available Balance</span>
            </div>
            <div style={styles.cardBody}>
              <h2 style={styles.cardValue}>${Number(user.balance).toFixed(2)}</h2>
              <p style={styles.cardDesc}>Current available commission balance</p>
            </div>
          </div>

          {/* টোটাল সফটওয়্যার সেল কার্ড */}
          <div style={styles.glassCard}>
            <div style={styles.cardHeader}>
              <span style={styles.cardIcon}>📦</span>
              <span style={styles.cardTitleText}>Total Software Sales</span>
            </div>
            <div style={styles.cardBody}>
              <h2 style={{ ...styles.cardValue, color: '#38bdf8' }}>{Number(user.totalSales || 0)} Licenses</h2>
              <p style={styles.cardDesc}>Total sales generated via your referral link</p>
            </div>
          </div>

        </div>

        {/* অ্যাফিলিয়েট লিংক সেকশন */}
        <div style={{ ...styles.glassCard, marginTop: '25px' }}>
          <div style={styles.cardHeader}>
            <span style={styles.cardIcon}>🔗</span>
            <span style={styles.cardTitleText}>Your Exclusive Affiliate Link</span>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.linkBox}>
              <input type="text" readOnly value={affiliateLink} style={styles.linkInput} />
              <button onClick={copyToClipboard} style={styles.copyBtn}>
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
            <p style={styles.cardDesc}>Share this link to earn commissions on every software license sale</p>
          </div>
        </div>

        {/* সিকিউর লগআউট কার্ড (অ্যাফিলিয়েট লিংকের নিচে ছোট বক্স আকারে) */}
        <div style={styles.logoutCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#f87171' }}>Session Management</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Click the button to securely log out from your reseller portal session.</p>
            </div>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Secure Logout &rarr;
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}

const keyframes = `
  @keyframes floatPulse {
    0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 20px rgba(0, 208, 255, 0.7)); }
    50% { transform: translateY(-6px) scale(1.04); filter: drop-shadow(0 0 30px rgba(0, 208, 255, 0.95)); }
  }
  .diamond-pulse {
    animation: floatPulse 3s infinite ease-in-out;
  }
`;

const styles = {
  loadingContainer: {
    minHeight: '100vh', background: '#020408', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif",
  },
  container: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at center, rgba(5, 9, 18, 0.9) 0%, rgba(2, 4, 8, 0.98) 100%)',
    fontFamily: "'Montserrat', sans-serif", color: '#fff', paddingBottom: '40px',
  },
  navbar: {
    display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
    padding: '20px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
    background: 'rgba(10, 14, 23, 0.95)', backdropFilter: 'blur(12px)',
  },
  navBrand: { display: 'flex', alignItems: 'center', gap: '12px' },
  brandText: { fontSize: '15px', fontWeight: '800', letterSpacing: '2px', color: '#f7d070' },
  logoutCard: {
    background: 'linear-gradient(145deg, rgba(22, 28, 40, 0.85) 0%, rgba(8, 10, 15, 0.92) 100%)',
    border: '1px solid rgba(248, 113, 113, 0.3)', borderRadius: '15px', padding: '20px 25px',
    marginTop: '25px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  },
  logoutBtn: {
    background: 'transparent', border: '1px solid rgba(248, 113, 113, 0.6)',
    color: '#f87171', padding: '10px 22px', borderRadius: '8px', cursor: 'pointer',
    fontWeight: '700', fontSize: '13px', transition: 'all 0.3s ease',
  },
  mainContent: { maxWidth: '1100px', margin: '40px auto', padding: '0 20px' },
  welcomeCard: {
    background: 'linear-gradient(145deg, rgba(22, 28, 40, 0.85) 0%, rgba(8, 10, 15, 0.92) 100%)',
    border: '1.5px solid rgba(212, 175, 55, 0.4)', borderRadius: '20px', padding: '35px 40px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15)',
    marginBottom: '25px', textAlign: 'center',
  },
  badge: {
    display: 'inline-block', background: 'linear-gradient(135deg, #d4af37, #85581a)',
    color: '#000', fontSize: '11px', fontWeight: '800', padding: '5px 18px',
    borderRadius: '50px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '15px',
    boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
  },
  welcomeTitle: { fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '10px' },
  highlightName: {
    background: 'linear-gradient(90deg, #ffe28a, #d4af37, #ff9900)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  welcomeSubtitle: { fontSize: '15px', color: '#cbd5e1', lineHeight: '1.5', maxWidth: '700px', margin: '0 auto' },
  gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' },
  glassCard: {
    background: 'linear-gradient(145deg, rgba(22, 28, 40, 0.85) 0%, rgba(8, 10, 15, 0.92) 100%)',
    border: '1.5px solid rgba(212, 175, 55, 0.3)', borderRadius: '20px', padding: '30px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' },
  cardIcon: { fontSize: '24px' },
  cardTitleText: { fontSize: '16px', fontWeight: '700', color: '#f7d070', letterSpacing: '1px' },
  cardBody: { display: 'flex', flexDirection: 'column', gap: '12px' },
  cardValue: { fontSize: '32px', fontWeight: '800', color: '#4ade80' },
  cardDesc: { fontSize: '13px', color: '#94a3b8', lineHeight: '1.4' },
  linkBox: { display: 'flex', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' },
  linkInput: {
    width: '100%', background: 'transparent', border: 'none', color: '#fff',
    padding: '8px 10px', fontSize: '13px', outline: 'none',
  },
  copyBtn: {
    background: 'linear-gradient(90deg, #d4af37 0%, #aa7c11 100%)', color: '#0b0e14',
    border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: '800',
    fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
  },
};