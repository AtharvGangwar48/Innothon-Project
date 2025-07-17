import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CoinData } from '../services/coinGeckoApi';

interface CoinCardProps {
  coin: CoinData;
  onBuyClick: (coin: CoinData) => void;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin, onBuyClick }) => {
  const isPositive = coin.price_change_percentage_24h > 0;
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(coin.current_price);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-white font-semibold">{coin.name}</h3>
            <p className="text-gray-400 text-sm uppercase">{coin.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-bold text-lg">{formattedPrice}</p>
          <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="text-sm font-medium">
              {isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      {/* Mini Sparkline */}
      <div className="mb-4">
        <svg width="100%" height="60" className="overflow-visible">
          {coin.sparkline_in_7d?.price && (
            <polyline
              fill="none"
              stroke={isPositive ? "#22c55e" : "#ef4444"}
              strokeWidth="2"
              points={coin.sparkline_in_7d.price
                .map((price, index) => `${(index / (coin.sparkline_in_7d.price.length - 1)) * 100},${60 - ((price - Math.min(...coin.sparkline_in_7d.price)) / (Math.max(...coin.sparkline_in_7d.price) - Math.min(...coin.sparkline_in_7d.price))) * 60}`)
                .join(' ')
              }
            />
          )}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
        <div>
          <p>Market Cap</p>
          <p className="text-white font-medium">
            ₹{(coin.market_cap / 10000000).toFixed(0)}Cr
          </p>
        </div>
        <div>
          <p>Volume 24h</p>
          <p className="text-white font-medium">
            ₹{(coin.total_volume / 10000000).toFixed(0)}Cr
          </p>
        </div>
      </div>

      <button
        onClick={() => onBuyClick(coin)}
        className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
      >
        Buy {coin.symbol.toUpperCase()}
      </button>
    </div>
  );
};

export default CoinCard;