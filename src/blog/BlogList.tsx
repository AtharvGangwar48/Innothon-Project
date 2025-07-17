import { Link } from 'react-router-dom';

const Posts = [
  {
    title: 'Understanding Blockchain',
    slug: 'understanding-blockchain',
    headline: 'Blockchain Basic Knowledge',
    description: `<p class="mb-4 text-gray-700 leading-relaxed">You've probably heard the term "blockchain" floating around – maybe in connection with Bitcoin, NFTs, or the latest tech news. It sounds complicated, right? Like something only tech wizards understand. But what if I told you that at its heart, blockchain is surprisingly simple, and it's set to change the way we trust and interact with information online?</p>

        <p class="mb-6 text-gray-700 leading-relaxed">Forget complex jargon for a moment. Let's break down blockchain into its core, easy-to-understand components.</p>

        <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Imagine a Super-Secure Digital Ledger.</h2>
        <p class="mb-4 text-gray-700 leading-relaxed">Think of a ledger as a fancy word for a record book. Traditionally, if you wanted to keep track of transactions (like money transfers, or who owns what), you'd use a central authority – a bank, a government office, or even just one person with a notebook. This central authority holds all the records.</p>
        <p class="mb-6 text-gray-700 leading-relaxed">The problem? What if that central authority makes a mistake, gets hacked, or tries to cheat? You have to trust them completely.</p>

        <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Enter Blockchain: The Shared, Unbreakable Record.</h2>
        <p class="mb-4 text-gray-700 leading-relaxed">Blockchain flips this idea on its head. Instead of one central record book, imagine <strong class="font-semibold text-gray-800">thousands, even millions, of identical copies</strong> of the same record book, all spread across many computers around the world.</p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-6">Here's the magic:</h3>
        <ol class="list-decimal list-inside space-y-3 mb-6 text-gray-700">
            <li><strong class="font-medium text-gray-800">"Blocks" are like pages:</strong> When a new transaction or piece of information needs to be recorded (e.g., "John sends 1 Bitcoin to Mary"), it's grouped with other recent transactions into a "block" – think of it as a new page in our digital ledger.</li>
            <li><strong class="font-medium text-gray-800">"Chains" are the unbreakable links:</strong> Before this new "page" (block) can be added to the record book, a network of computers must <strong class="font-semibold text-gray-800">verify</strong> that the transactions on it are legitimate. Once verified, this block is given a unique digital "fingerprint" (called a cryptographic hash) and is permanently linked to the previous block in the chain. This creates a continuous, chronological "chain" of blocks.</li>
            <li><strong class="font-medium text-gray-800">Everyone has a copy (Decentralization):</strong> Because everyone on the network has an identical copy of this entire chain of blocks, there's no single point of control or failure. If one copy gets corrupted, all the other copies will instantly show the discrepancy.</li>
            <li><strong class="font-medium text-gray-800">It's Permanent (Immutability):</strong> This "chaining" with digital fingerprints is incredibly secure. If someone tries to go back and change a past transaction on one block, its digital fingerprint changes, breaking the link to all subsequent blocks. The entire network would immediately know something is wrong, making it virtually impossible to tamper with records without being detected.</li>
        </ol>

        <h3 class="text-2xl font-semibold text-gray-800 mb-4 mt-6">Why is this a big deal?</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">Because it creates a system of <strong class="font-semibold text-gray-800">trust without needing a middleman.</strong> We don't have to rely on a single bank or company to tell us what's true. The truth is collectively verified and stored by the network itself, making it:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong class="font-medium text-gray-800">Transparent:</strong> Everyone can see the records (though identities can remain anonymous).</li>
            <li><strong class="font-medium text-gray-800">Secure:</strong> Extremely difficult to hack or alter.</li>
            <li><strong class="font-medium text-gray-800">Efficient:</strong> Transactions can be faster and cheaper by cutting out intermediaries.</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Beyond Bitcoin: Real-World Impacts</h2>
        <p class="mb-4 text-gray-700 leading-relaxed">While cryptocurrencies like Bitcoin were the original use case, blockchain's potential is exploding across various industries:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li><strong class="font-medium text-gray-800">Tracking your food:</strong> Imagine knowing the exact farm your vegetables came from, and every step they took to reach your plate – ensuring freshness and safety.</li>
            <li><strong class="font-medium text-gray-800">Authenticating products:</strong> Proving that your designer handbag or diamond is genuine, not a fake.</li>
            <li><strong class="font-medium text-gray-800">Secure medical records:</strong> Giving patients more control over their health data and allowing seamless, secure sharing with authorized providers.</li>
            <li><strong class="font-medium text-gray-800">Fairer voting systems:</strong> Creating an unhackable and transparent record of every vote cast.</li>
            <li><strong class="font-medium text-gray-800">Managing supply chains:</strong> For businesses, it means unparalleled visibility and accountability for goods moving around the globe.</li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">The Future is Distributed</h2>
        <p class="mb-4 text-gray-700 leading-relaxed">Blockchain isn't just a tech trend; it's a fundamental shift in how we can manage and share information with unprecedented levels of trust and transparency. It's still evolving, but its potential to reshape industries, from finance to healthcare to logistics, is undeniable.</p>

        <p class="mb-8 text-gray-700 leading-relaxed">So, the next time you hear "blockchain," don't be intimidated. Think of it as a super-secure, shared digital record book that's making the world a more transparent and trustworthy place, one linked "page" at a time.</p>`,
    image: '/src/blog/News1.jpg'
  },
  {
    title: 'First Crypto Trade',
    slug: 'first-crypto-trade',
    headline: 'A beginner’s guide to making your first crypto trade.',
    description: 'A beginner’s guide to making your first crypto trade.',
    image: '/src/blog/News2.jpg'
  },
  {
    title: 'Future of DeFi',
    slug: 'future-of-defi',
    headline: 'Explore how decentralized finance is changing the game.',
    description: 'Explore how decentralized finance is changing the game.',
    image: '/src/blog/News3.jpg'
  },
  {
    title: 'Safeguarding Your Crypto',
    slug: 'safeguarding-investments',
    headline: 'Tips on securing your crypto assets from threats.',
    description: 'Tips on securing your crypto assets from threats.',
    image: '/src/blog/News4.jpg'
  },
];

export default function BlogList() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-100 tracking-tight">
        Our Blogs
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="group block relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden
                       shadow-2xl hover:shadow-yellow-500/30
                       transform hover:-translate-y-3 transition-all duration-500 ease-in-out
                       border-2 border-transparent hover:border-yellow-600" // Enhanced styling for card, shadows, and hover effect
          >
            {/* Optional: Add an overlay for a subtle dark gradient on the image */}
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover object-center
                         transform group-hover:scale-110 transition-transform duration-500 ease-in-out" // Smoother image zoom
            />
            <div className="p-7 relative z-20"> {/* Increased padding and z-index for content */}
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-4"> {/* Added bottom margin */}
                {post.headline}
              </p>
              <span className="inline-flex items-center text-yellow-300 group-hover:text-yellow-200 text-sm font-semibold transition-colors duration-300">
                Read More
                <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}