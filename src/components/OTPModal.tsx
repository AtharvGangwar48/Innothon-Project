import React, { useState, useEffect } from 'react';
import { X, Mail, Clock, RefreshCw } from 'lucide-react';
import { emailOTPService } from '../services/emailService';

interface OTPModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  onVerified: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ isOpen, email, onClose, onVerified }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = emailOTPService.verifyOTP(email, otp);
      
      if (result.success) {
        onVerified();
        onClose();
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendLoading(true);
    setError('');

    try {
      const result = await emailOTPService.sendOTP(email);
      if (result.success) {
        setTimeLeft(600); // Reset timer
        setOtp(''); // Clear current OTP
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Verify Your Email</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <Mail className="h-8 w-8 text-blue-400 mx-auto" />
          </div>
          <p className="text-gray-300 mb-2">
            We've sent a 6-digit verification code to:
          </p>
          <p className="text-white font-medium">{email}</p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setOtp(value);
                setError('');
              }}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white text-center text-2xl font-mono tracking-widest placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="000000"
              maxLength={6}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span>Time remaining: {formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={handleResendOTP}
              disabled={resendLoading || timeLeft > 0}
              className="text-blue-400 hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
            >
              <RefreshCw className={`h-4 w-4 ${resendLoading ? 'animate-spin' : ''}`} />
              <span>Resend OTP</span>
            </button>
          </div>

          <button
            onClick={handleVerifyOTP}
            disabled={loading || !otp || otp.length !== 6}
            className="w-full bg-blue-400 text-black py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            <strong>Demo Mode:</strong> Check the browser console for the OTP code, or use <code className="bg-black/20 px-1 rounded">123456</code> as a test code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;