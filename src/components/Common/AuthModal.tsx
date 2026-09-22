import React, { useState } from 'react';
import { Modal } from './Modal';
import { useAuth } from '../../context/AuthContext';
import { Sparkles, ArrowRight, Phone, Mail, User as UserIcon, Lock, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalMode,
    setAuthModalMode,
    requestOtp,
    verifyOtp,
    tempAuthData,
  } = useAuth();

  const [inputVal, setInputVal] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [otpVal, setOtpVal] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      requestOtp(inputVal, nameVal || 'Velora Member');
    }, 400);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpVal.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      verifyOtp(otpVal);
    }, 400);
  };

  const titles = {
    login: 'Log in to VÉLORA Club',
    signup: 'Create Your VÉLORA Account',
    otp: 'Enter 4-Digit Verification Code',
  };

  return (
    <Modal isOpen={isAuthModalOpen} onClose={closeAuthModal} title={titles[authModalMode]} maxWidth="sm">
      <div className="space-y-4">
        {/* Brand Banner */}
        <div className="text-center pb-3 border-b border-[#F0E9E6]">
          <span className="font-serif text-2xl font-bold tracking-widest text-[#9F1239]">VÉLORA</span>
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-0.5">
            LUXE BOTANICALS & FINE PARFUMS
          </p>
        </div>

        {authModalMode === 'otp' ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="text-center">
              <p className="text-xs text-slate-600">
                We sent a 4-digit code to{' '}
                <span className="font-semibold text-slate-800">{tempAuthData.phoneOrEmail}</span>
              </p>
              <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Demo OTP: <strong>1234</strong></span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Enter OTP
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  maxLength={4}
                  value={otpVal}
                  onChange={(e) => setOtpVal(e.target.value.replace(/\D/g, ''))}
                  placeholder="1234"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-center text-lg font-mono tracking-widest font-bold text-slate-800 focus:outline-none focus:border-[#E11D48] focus:bg-white"
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || otpVal.length < 4}
              className="w-full py-3 bg-[#9F1239] hover:bg-[#801836] disabled:opacity-50 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Verifying...' : 'Verify & Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
              <button
                type="button"
                onClick={() => setAuthModalMode('login')}
                className="hover:text-slate-800 underline"
              >
                Change Number/Email
              </button>
              <button
                type="button"
                onClick={() => requestOtp(tempAuthData.phoneOrEmail, tempAuthData.name)}
                className="text-[#9F1239] font-medium hover:underline"
              >
                Resend Code
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <p className="text-xs text-slate-500">
              Get access to member-only rewards, express checkout, order tracking, and birthday gifts.
            </p>

            {authModalMode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={nameVal}
                    onChange={(e) => setNameVal(e.target.value)}
                    placeholder="Ananya Deshmukh"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#E11D48] focus:bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                Mobile Number or Email
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="9876543210 or name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#E11D48] focus:bg-white"
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !inputVal.trim()}
              className="w-full py-3 bg-[#9F1239] hover:bg-[#801836] disabled:opacity-50 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Sending Code...' : 'Continue with OTP'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Switch between Login and Signup */}
            <div className="text-center pt-2">
              {authModalMode === 'login' ? (
                <p className="text-xs text-slate-500">
                  New to VÉLORA?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthModalMode('signup')}
                    className="font-semibold text-[#9F1239] hover:underline"
                  >
                    Create Account
                  </button>
                </p>
              ) : (
                <p className="text-xs text-slate-500">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthModalMode('login')}
                    className="font-semibold text-[#9F1239] hover:underline"
                  >
                    Log In
                  </button>
                </p>
              )}
            </div>

            {/* Loyalty Perks */}
            <div className="p-3 bg-[#FFF5F7] rounded-xl border border-[#FDE2E8] space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-[#9F1239]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Velora Club Perks</span>
              </div>
              <p>• 15% OFF coupon on first signup</p>
              <p>• Free luxury gift samples with every order</p>
              <p>• Early access to seasonal drops & parfums</p>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};
