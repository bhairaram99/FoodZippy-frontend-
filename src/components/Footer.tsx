import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pt-8">
          <div>
            <div className="mb-2">
              <img
                src="/foodzippy-logo.png"
                alt="Foodzippy logo"
                className="h-24 sm:h-32 md:h-40 w-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.onerror = null;
                  el.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="48" viewBox="0 0 160 48"><rect width="100%" height="100%" fill="%23F59E0B" rx="8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" fill="white">Foodzippy</text></svg>'
                  );
                }}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering love to students in Agra & Noida. Built for students.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Food Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Subscription Tiffin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Food Pickup
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Drive Through
                </a>
              </li>
            </ul>
          </div>

          <div>
            
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get updates on offers 
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-600 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              Contact us • hello@foodzippy.com
            </div>
            <div>
              © 2024 Foodzippy. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
