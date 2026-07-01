import { Link, useLocation } from 'react-router-dom';
import { Pill, Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-teal-600 p-2 rounded-lg text-white">
              <Pill className="w-6 h-6" />
            </div>
            <Link to="/" className="font-serif text-2xl font-bold text-gray-900 tracking-tight">
              Rawal Medical Hall
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  location.pathname === link.path ? 'text-teal-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-gray-200 pl-8 ml-2">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute max-w-max top-0 right-0 transform translate-x-1/2 -translate-y-1/4 bg-teal-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
              <Link to="/contact" className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute max-w-max top-0 right-0 transform translate-x-1/2 -translate-y-1/4 bg-teal-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium py-2 transition-colors ${
                    location.pathname === link.path ? 'text-teal-600' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
