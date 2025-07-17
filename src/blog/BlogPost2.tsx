import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams();
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/60 backdrop-blur-md p-8 max-w-4xl mx-auto rounded-2xl shadow-2xl space-y-10 border border-gray-200">

        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 leading-tight">
          First Crypto Trade: A Beginner's Guide to Making Your First Crypto Trade
        </h1>

        <p className="text-gray-700 text-lg">
          The world of cryptocurrency can seem daunting at first glance. With all the jargon, charts, and headlines about volatile price swings, it's easy to feel overwhelmed. But what if I told you that making your first crypto trade is more accessible than you think? This guide is designed to demystify the process and help you confidently take your first step into the exciting world of digital assets.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Why Crypto?</h2>
          <p className="text-gray-700">
            Before we dive into the "how," let's briefly touch on the "why." Cryptocurrencies like Bitcoin and Ethereum offer a decentralized alternative to traditional finance. They can provide opportunities for:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Potential Growth:</strong> While volatile, many cryptocurrencies have shown significant long-term growth.</li>
            <li><strong>Diversification:</strong> Adding crypto to your portfolio can offer diversification beyond traditional stocks and bonds.</li>
            <li><strong>Innovation:</strong> Blockchain technology, the backbone of crypto, is driving innovation across various industries.</li>
          </ul>
          <p className="text-red-600 font-semibold">However, it's crucial to remember that crypto markets are inherently risky. Only invest what you can afford to lose.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Step 1: Do Your Research (DYOR!)</h2>
          <p className="text-gray-700">
            This is arguably the most critical step. Don't jump in based on hype or a friend's recommendation.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Understand the Basics:</strong> Learn about what blockchain is, how cryptocurrencies work, and the difference between various types of coins (e.g., Bitcoin, altcoins, stablecoins).</li>
            <li><strong>Identify Your Goals:</strong> Are you looking for long-term investment, short-term trading, or just exploring? Your goals will influence which cryptocurrencies you choose.</li>
            <li><strong>Research Specific Cryptocurrencies:</strong> Once you have a basic understanding, deep-dive into specific projects. Look at their whitepaper, team, technology, use case, and community. Popular choices for beginners often include Bitcoin (BTC) and Ethereum (ETH) due to their liquidity and established history.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Step 2: Choose a Reputable Cryptocurrency Exchange</h2>
          <p className="text-gray-700">
            An exchange is where you'll buy, sell, and trade cryptocurrencies. Think of it like a stockbroker for digital assets. Look for an exchange that offers:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Security:</strong> Look for exchanges with strong security measures like two-factor authentication (2FA), cold storage, and a solid reputation.</li>
            <li><strong>Ease of Use:</strong> A user-friendly interface is essential for beginners.</li>
            <li><strong>Supported Cryptocurrencies:</strong> Make sure it supports the assets you're interested in.</li>
            <li><strong>Fees:</strong> Check trading, deposit, and withdrawal fees.</li>
            <li><strong>Customer Support:</strong> Reliable support can save you trouble down the road.</li>
            <li><strong>Regulatory Compliance:</strong> Ensure the platform follows Indian regulations. Options include Binance, Coinbase, Kraken, WazirX, and CoinDCX.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Step 3: Set Up and Verify Your Account</h2>
          <p className="text-gray-700">
            Once you've chosen an exchange, you'll need to create an account. This typically involves:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Email Registration:</strong> Sign up using your email.</li>
            <li><strong>Password Creation:</strong> Use a strong, unique password.</li>
            <li><strong>Identity Verification (KYC):</strong> Provide documents like Aadhar, PAN card, and sometimes a selfie to meet KYC/AML requirements.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Step 4: Fund Your Account</h2>
          <p className="text-gray-700">Add funds to your account using:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Bank Transfer (IMPS/NEFT/RTGS):</strong> Common and secure.</li>
            <li><strong>UPI:</strong> Convenient for smaller deposits.</li>
            <li><strong>Debit/Credit Card:</strong> Often has higher fees but quick.</li>
          </ul>
          <p className="text-red-600 font-semibold">Always double-check deposit instructions to avoid errors.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Step 5: Make Your First Trade!</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Navigate:</strong> Go to "Trade," "Buy Crypto," or "Markets."</li>
            <li><strong>Select Your Pair:</strong> Example: BTC/INR, ETH/INR.</li>
            <li><strong>Choose Order Type:</strong> 
              <ul className="list-disc list-inside pl-6">
                <li><strong>Market Order:</strong> Immediate trade at current price.</li>
                <li><strong>Limit Order:</strong> Set your price. Executes only if price matches.</li>
              </ul>
            </li>
            <li><strong>Enter the Amount:</strong> Specify how much crypto or INR.</li>
            <li><strong>Review & Confirm:</strong> Double-check currency, amount, and fees.</li>
          </ul>
          <p className="text-green-600 font-semibold">🎉 Congratulations! You've just made your first crypto trade!</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Step 6: Secure Your Assets</h2>
          <p className="text-gray-700">Store your assets safely:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Exchange Wallet:</strong> Convenient but higher risk.</li>
            <li><strong>Software Wallet:</strong> Like Exodus or Trust Wallet.</li>
            <li><strong>Hardware Wallet:</strong> Offline and most secure (e.g., Ledger, Trezor).</li>
          </ul>
          <p className="text-yellow-600">Tip: For beginners, small amounts on an exchange are fine, but consider secure options as your portfolio grows.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Important Considerations for Beginners</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Start Small:</strong> Only invest what you're okay with losing.</li>
            <li><strong>Risk Management:</strong> Don’t panic during market dips.</li>
            <li><strong>Don’t Chase Pumps:</strong> Avoid FOMO investing.</li>
            <li><strong>Stay Informed:</strong> Use trustworthy news sources. Educate yourself.</li>
            <li><strong>Tax Implications:</strong> Understand 30% capital gains tax and 1% TDS in India. Consult a tax expert.</li>
          </ul>
        </section>

        <p className="text-gray-700 text-lg">
          Making your first crypto trade is an exciting milestone. By following these steps and prioritizing research and security, you can confidently embark on your cryptocurrency journey.
        </p>

        <p className="text-xl font-semibold text-center text-green-700">🚀 Happy trading!</p>

      </div>
    </div>
  );
}
