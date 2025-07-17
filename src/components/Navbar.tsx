import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { Coins, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">CryptoEZ</span>
          </Link>

          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link
                  to="/blog"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/portfolio"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  to="/learn"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Learn
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-white" />
                  <span className="text-white text-sm">{currentUser.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
              <Link
                  to="/blog"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;