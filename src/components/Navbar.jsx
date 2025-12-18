import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const goto = url => {
    navigate(url);
    setNav(false);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setNav(false)}
        />
      )}

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          
          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <img 
                  src="/OPTI.png" 
                  alt="Optimus PRO" 
                  className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Optimus PRO
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1">
              {[
                { name: 'Home', path: '/' },
                { name: 'Community', path: '/community' },
                { name: 'Resources', path: '/resources' },
                { name: 'Blog', path: '/blog' },
                { name: 'Company', path: '/company' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => goto(item.path)}
                    className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button - Desktop */}
            <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNav(!nav)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {nav ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 origin-top ${
            nav ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <ul className="p-4 space-y-1">
              {[
                { name: 'Home', path: '/' },
                { name: 'Community', path: '/community' },
                { name: 'Resources', path: '/resources' },
                { name: 'Blog', path: '/blog' },
                { name: 'Company', path: '/company' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <li 
                  key={item.name}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={nav ? 'animate-fadeInUp' : ''}
                >
                  <button
                    onClick={() => goto(item.path)}
                    className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="p-4 border-t border-white/10">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}