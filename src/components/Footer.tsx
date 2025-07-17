import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Project Info */}
        <div>
          <h2 className="text-xl font-bold text-white">CryptoEZ</h2>
          <p className="mt-2 text-sm">
            Learn, simulate and grow your crypto knowledge. Built for everyone.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link to="/learn" className="hover:underline">Learn</Link></li>
            <li><Link to="/event" className="hover:underline">Events</Link></li>
          </ul>
        </div>

        {/* Legal / Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-2">Info</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/blog" className="hover:underline">Blogs</Link></li>
            <li><Link to="/developer" className="hover:underline">Developers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://instagram.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://github.com/yourusername/cryptoclarity" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CryptoEZ by Atharv & Riddhi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
