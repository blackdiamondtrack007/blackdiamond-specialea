// src/components/ResellerAuthModal.jsx
"use client";

import React, { useState } from 'react';
import { attachAffiliateToUserData } from '@/utils/affiliateSignupHelper';

export default function ResellerAuthModal({ isOpen }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isForgotPass, setIsForgotPass] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড দৃশ্যমান করার স্টেট
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const API_BASE_URL = "https://blackdiamondea.info/backend";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      if (isForgotPass) {
        const res = await fetch(`${API_BASE_URL}/forgot-password.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        setMessage(data.message);
      } 
      else if (isLogin) {
        const res = await fetch(`${API_BASE_URL}/login.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        
        if (data.status === 'success') {
          setMessage("Login successful! Redirecting to dashboard...");
          localStorage.setItem('reseller_user', JSON.stringify(data.data));
          setTimeout(() => {
            window.location.href = '/reseller/dashboard';
          }, 1500);
        } else {
          setMessage(data.message);
        }
      } 
      else {
        const rawUserData = { name, email, password };
        const finalUserData = attachAffiliateToUserData(rawUserData);

        const res = await fetch(`${API_BASE_URL}/register.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: finalUserData.name,
            email: finalUserData.email,
            password: finalUserData.password,
            referred_by: finalUserData.referredBy || null
          }),
        });
        const data = await res.json();

        if (data.status === 'success') {
          setMessage("Registration successful! You can now sign in.");
          setIsLogin(true);
        } else {
          setMessage(data.message);
        }
      }
    } catch (error) {
      setMessage("Something went wrong. Please check your network!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <style>{keyframes}</style>
      <div style={styles.card}>
        <div style={styles.mediaContainer}>
          <div style={styles.diamondIcon} className="diamond-pulse">💎</div>
          <div style={styles.mediaCaption}>
            <span style={styles.captionTop}>BLACK DIAMOND PARTNER</span>
            <span style={styles.captionBottom}>RESELLER PORTAL</span>
          </div>
        </div>

        <div style={styles.contentArea}>
          <span style={styles.badge}>
            {isForgotPass ? 'Password Recovery' : (isLogin ? 'Reseller Access' : 'Exclusive Partner Program')}
          </span>
          <h2 style={styles.title}>
            <span style={styles.titleTop}>
              {isForgotPass ? 'Reset Password' : (isLogin ? 'Welcome Back' : 'Join As Reseller')}
            </span>
            <span style={styles.titleBottom}>
              {isForgotPass ? 'Recover Your Account' : (isLogin ? 'Sign In To Dashboard' : 'Start Earning Today')}
            </span>
          </h2>

          {message && <p style={message.includes('success') ? styles.successMessage : styles.errorMessage}>{message}</p>}

          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && !isForgotPass && (
              <input
                type="text" placeholder="Your Name" value={name}
                onChange={(e) => setName(e.target.value)} required style={styles.input}
              />
            )}
            
            <input
              type="email" placeholder="Your Email" value={email}
              onChange={(e) => setEmail(e.target.value)} required style={styles.input}
            />

            {/* পাসওয়ার্ড ফিল্ড এবং শো/হাইডের টগল বাটন */}
            {!isForgotPass && (
              <div style={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  style={styles.passwordInput}
                />
                <span 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  style={styles.eyeBtn}
                >
                  {showPassword ? '👁️ Hide' : '👁️ Show'}
                </span>
              </div>
            )}

            {isLogin && !isForgotPass && (
              <div style={{ textAlign: 'right', marginTop: '-4px' }}>
                <span 
                  onClick={() => { setIsForgotPass(true); setMessage(''); }} 
                  style={styles.forgotLink}
                >
                  Forgot Password?
                </span>
              </div>
            )}

            <button type="submit" disabled={loading} style={styles.btnAction}>
              <span>
                {loading ? 'Processing...' : (isForgotPass ? 'Send Reset Link' : (isLogin ? 'Sign Sign In' : 'Create Reseller Account'))}
              </span> &rarr;
            </button>
          </form>

          <div style={styles.footerNote}>
            {isForgotPass ? (
              <span>Remembered password? <span onClick={() => { setIsForgotPass(false); setIsLogin(true); setMessage(''); }} style={styles.toggleLink}>Sign In</span></span>
            ) : (
              isLogin ? "Don't have an account? " : "Already registered? "
            )}
            {!isForgotPass && (
              <span onClick={() => { setIsLogin(!isLogin); setMessage(''); }} style={styles.toggleLink}>
                {isLogin ? 'Sign Up Now' : 'Sign In to Dashboard'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const keyframes = `
  @keyframes floatPulse {
    0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 25px rgba(0, 208, 255, 0.85)); }
    50% { transform: translateY(-8px) scale(1.05); filter: drop-shadow(0 0 35px rgba(0, 208, 255, 1)); }
  }
  .diamond-pulse {
    animation: floatPulse 3s infinite ease-in-out;
  }
`;

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    background: 'radial-gradient(circle at center, rgba(5, 9, 18, 0.75) 0%, rgba(2, 4, 8, 0.92) 100%)',
    backdropFilter: 'blur(16px) saturate(180%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 9999, padding: '20px',
  },
  card: {
    width: '100%', maxWidth: '540px',
    background: 'linear-gradient(145deg, rgba(22, 28, 40, 0.88) 0%, rgba(8, 10, 15, 0.95) 100%)',
    border: '1.5px solid rgba(212, 175, 55, 0.5)',
    borderRadius: '24px',
    boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 50px rgba(212, 175, 55, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    overflow: 'hidden', position: 'relative', fontFamily: "'Montserrat', sans-serif",
  },
  mediaContainer: {
    width: '100%', minHeight: '200px', padding: '20px',
    background: 'radial-gradient(circle at center, rgba(27, 35, 54, 0.9) 0%, rgba(10, 14, 23, 0.95) 100%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
  },
  diamondIcon: { fontSize: '65px' },
  mediaCaption: { marginTop: '8px', textAlign: 'center' },
  captionTop: { display: 'block', fontSize: '12px', fontWeight: '700', color: '#f7d070', letterSpacing: '2px' },
  captionBottom: { display: 'block', fontSize: '11px', fontWeight: '800', color: '#ffd700', letterSpacing: '3px', marginTop: '3px' },
  contentArea: { padding: '24px 32px 30px 32px', textAlign: 'center' },
  badge: {
    display: 'inline-block', background: 'linear-gradient(135deg, #d4af37, #85581a)',
    color: '#000', fontSize: '10px', fontWeight: '800', padding: '5px 16px',
    borderRadius: '50px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px',
    boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
  },
  title: { fontWeight: '800', color: '#fff', lineHeight: '1.3', marginBottom: '16px' },
  titleTop: { display: 'block', fontSize: '20px', background: 'linear-gradient(90deg, #ffe28a, #d4af37, #ff9900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
  titleBottom: { display: 'block', fontSize: '16px', color: '#f1f5f9', marginTop: '4px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { 
    width: '100%', padding: '13px 15px', 
    background: 'rgba(255, 255, 255, 0.04)', 
    border: '1px solid rgba(255, 255, 255, 0.12)', 
    borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)'
  },
  passwordWrapper: {
    position: 'relative',
    display: 'flex',
    alignItem: 'center',
    width: '100%',
  },
  passwordInput: { 
    width: '100%', padding: '13px 45px 13px 15px', 
    background: 'rgba(255, 255, 255, 0.04)', 
    border: '1px solid rgba(255, 255, 255, 0.12)', 
    borderRadius: '10px', color: '#fff', fontSize: '14px', outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)'
  },
  eyeBtn: {
    position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)',
    background: 'transparent', border: 'none', color: '#f7d070', fontSize: '12px',
    cursor: 'pointer', fontWeight: '600', userSelect: 'none',
  },
  btnAction: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '14px',
    borderRadius: '10px', border: '1px solid rgba(255, 215, 0, 0.4)', background: 'linear-gradient(90deg, #d4af37 0%, #aa7c11 100%)',
    color: '#0b0e14', fontSize: '14px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '4px', boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
  },
  forgotLink: { color: '#f7d070', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' },
  successMessage: { color: '#4ade80', fontSize: '13px', marginBottom: '12px', fontWeight: '600' },
  errorMessage: { color: '#f87171', fontSize: '13px', marginBottom: '12px', fontWeight: '600' },
  footerNote: { marginTop: '16px', fontSize: '13px', color: '#718096' },
  toggleLink: { color: '#f7d070', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' },
};