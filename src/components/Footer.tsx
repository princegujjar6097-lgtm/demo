import { Link } from 'react-router-dom';
import { Pill, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-600 p-2 rounded-lg text-white">
                <Pill className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Rawal Medical Hall
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted neighborhood pharmacy providing quality medicines, healthcare products, and professional pharmaceutical guidance to the community.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Health Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Prescription Medicines</li>
              <li className="text-gray-400 text-sm">Over-the-Counter Products</li>
              <li className="text-gray-400 text-sm">Medical Equipment</li>
              <li className="text-gray-400 text-sm">Home Delivery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Ponta sahib, Purwala, Nahan road</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-gray-400 text-sm">9671034467</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-gray-400 text-sm">vishal@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Mon – Sat: 6:00 AM – 9:00 PM</p>
                  <p className="mt-1">Sun: 10:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Rawal Medical Hall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
