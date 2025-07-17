import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams();
  const { description } = useParams();

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/60 backdrop-blur-md p-8 max-w-4xl mx-auto rounded-2xl shadow-2xl space-y-10 border border-gray-200">
        
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 leading-tight">
          Blockchain Explained: Like You're Five (or just curious!)
        </h1>

        <section className="space-y-4">
          <p className="text-gray-700 text-lg">
            Imagine you and your friends want to keep a record of who borrowed what from whom.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            The Old Way (Centralized System):
          </h2>

          <p className="text-gray-700">
            You decide to write everything down in a single notebook. Let's say it's your notebook.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>"John borrowed my toy car."</li>
            <li>"Sarah returned my book."</li>
            <li>"You borrowed $5 from me."</li>
          </ul>
        </section>

        <div className="flex justify-center">
          <img
            src="https://images.shiksha.com/mediadata/images/articles/1744357138phpz39j2R.jpeg"
            alt="Blockchain Illustration"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Problems with the old way:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>If you lose the notebook: All the records are gone! Disaster!</li>
            <li>If you cheat: You could secretly erase "John borrowed my toy car" and pretend he never did. No one would know.</li>
            <li>If someone doesn't trust you: They might say, "How do I know you're not changing things in your notebook?"</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">The New Way: Blockchain!</h2>

          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">1. Blocks are like pages in the notebook:</h3>
            <p className="text-gray-700">
              When someone wants to record something (e.g., "John borrowed my toy car"), they write it down on a new page. This page is like a "block" of information.
            </p>
            <p className="text-gray-600 italic">This page isn't added to the notebook yet. It's just a proposed record.</p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">2. The "Chain" is like linking pages together:</h3>
            <p className="text-gray-700">
              Before a new page (block) can be added to everyone's notebooks, everyone needs to agree that it's a valid record.
            </p>
            <p className="text-gray-700">
              Once everyone agrees, that page is sealed shut with a special "digital glue" (cryptography). This connects it to the previous page, creating an unbreakable chain.
            </p>
            <p className="text-gray-600 italic">If you try to change an old page, the digital glue breaks, and everyone knows you cheated!</p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">3. Everyone has a copy (Decentralization):</h3>
            <p className="text-gray-700">
              Because everyone has an identical copy of the entire chain, there's no single point of failure.
            </p>
            <p className="text-gray-700">
              If one copy gets corrupted, others will show the original, correct record.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">4. It's permanent and transparent (Immutability):</h3>
            <p className="text-gray-700">
              Once a page is added and "glued" into the chain, it can never be removed or changed.
            </p>
            <p className="text-gray-700">
              All transactions are transparent — everyone can see what's been recorded.
            </p>
            <p className="text-gray-600 italic">Imagine a never-ending chain of receipts, each linked to the previous one, traceable back to the start.</p>
          </div>
        </section>

        <div className="flex justify-center">
          <img
            src="https://www.ku.ac.ae/wp-content/uploads/2022/06/Blockchain-in-the-Oil-and-Gas-Industry-min.jpg"
            alt="Blockchain Concept Illustration"
            className="rounded-xl shadow-lg w-full max-w-2xl"
          />
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Why is this a big deal?</h2>
          <p className="text-gray-700">
            Because it creates a system of trust without needing a middleman. We don't rely on a single bank or company to tell us what's true.
          </p>
          <p className="text-gray-700">
            The truth is collectively verified and stored by the network itself, making it:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Transparent: Everyone can see the records (though identities can remain anonymous).</li>
            <li>Secure: Extremely difficult to hack or alter.</li>
            <li>Efficient: Transactions can be faster and cheaper by cutting out intermediaries.</li>
          </ul>

          <p className="text-gray-700">Beyond Bitcoin: Real-World Impacts</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Tracking your food:</strong> Know exactly where your vegetables came from, ensuring freshness and safety.</li>
            <li><strong>Authenticating products:</strong> Prove that your designer handbag or diamond is genuine.</li>
            <li><strong>Secure medical records:</strong> Give patients control over their health data, accessible securely.</li>
            <li><strong>Fair voting systems:</strong> Create an unhackable, transparent record of every vote.</li>
            <li><strong>Managing supply chains:</strong> For businesses, visibility and accountability for goods worldwide.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">The Future is Distributed</h2>
          <p className="text-gray-700">
            Blockchain isn't just a tech trend; it's a fundamental shift in managing and sharing information with trust and transparency. Its potential to reshape industries is immense.
          </p>
          <p className="text-gray-700">
            So, next time you hear "blockchain," think of it as a super-secure, shared digital record book that's making the world more transparent, one linked "page" at a time.
          </p>
        </section>

      </div>
    </div>
  );
}
