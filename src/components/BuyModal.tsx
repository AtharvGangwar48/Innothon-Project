import React, { useState } from 'react';
import { X, CreditCard } from 'lucide-react';
import { CoinData } from '../services/coinGeckoApi';
import { usePortfolio } from '../contexts/PortfolioContext';

interface BuyModalProps {
  coin: CoinData;
  isOpen: boolean;
  onClose: () => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ coin, isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [showUpiFlow, setShowUpiFlow] = useState(false);
  const { balance, buyAsset } = usePortfolio();

  const investmentAmount = parseFloat(amount) || 0;
  const coinAmount = investmentAmount / coin.current_price;

  const handleBuy = async () => {
    if (!amount || investmentAmount <= 0) return;

    setLoading(true);
    try {
      await buyAsset(coin.symbol, coin.name, coinAmount, coin.current_price);
      setShowUpiFlow(true);
      setTimeout(() => {
        onClose();
        setShowUpiFlow(false);
        setAmount('');
      }, 3000);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  if (showUpiFlow) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/20">
          <div className="text-center">
            <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-green-400 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
            <p className="text-gray-300 mb-4">
              You've successfully purchased {coinAmount.toFixed(6)} {coin.symbol.toUpperCase()}
            </p>
            <div className="bg-white/5 rounded-lg p-4 border border-white/20">
              <p className="text-sm text-gray-300">Transaction Details</p>
              <p className="text-white font-medium">Amount: ₹{investmentAmount.toFixed(2)}</p>
              <p className="text-white font-medium">UPI ID: user@paytm</p>
              <p className="text-white font-medium">Status: Completed</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Buy {coin.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/20">
            <img src={coin.image} alt={coin.name} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-white font-semibold">{coin.name}</h4>
              <p className="text-gray-400">₹{coin.current_price.toFixed(2)}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Investment Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="Enter amount in ₹"
              max={balance}
              min="1"
            />
            <p className="text-sm text-gray-400 mt-1">
              Available Balance: ₹{balance.toFixed(2)}
            </p>
          </div>

          {investmentAmount > 0 && (
            <div className="bg-white/5 rounded-lg p-4 border border-white/20">
              <h4 className="text-white font-semibold mb-2">Transaction Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">You'll receive:</span>
                  <span className="text-white">{coinAmount.toFixed(6)} {coin.symbol.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Price per coin:</span>
                  <span className="text-white">₹{coin.current_price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total cost:</span>
                  <span className="text-white">₹{investmentAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleBuy}
            disabled={loading || !amount || investmentAmount <= 0 || investmentAmount > balance}
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : `Buy with UPI`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;