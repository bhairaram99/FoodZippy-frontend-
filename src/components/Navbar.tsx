import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenStoryPanel: () => void;
}

function Navbar({ onOpenStoryPanel }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-2">
          <div className="flex-shrink-0">
            <img 
              src="/Foodzippy_Final_1-removebg-preview.png" 
              alt="Foodzippy logo" 
              className="h-28 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onOpenStoryPanel}
              className="text-white hover:text-yellow-100 transition-colors duration-200 font-medium"
            >
              Our Story
            </button>
            <a href="#services" className="text-white hover:text-yellow-100 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#restaurants" className="text-white hover:text-yellow-100 transition-colors duration-200 font-medium">
              Restaurants
            </a>
            <a href="#how-it-works" className="text-white hover:text-yellow-100 transition-colors duration-200 font-medium">
              How It Works
            </a>
            <button className="bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-yellow-100 transition-all duration-200 transform hover:scale-105 font-medium">
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-yellow-400 to-orange-500 border-t border-yellow-300">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                onOpenStoryPanel();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-white hover:bg-yellow-500 rounded-md font-medium"
            >
              Our Story
            </button>
            <a href="#services" className="block px-3 py-2 text-white hover:bg-yellow-500 rounded-md font-medium">
              Services
            </a>
            <a href="#restaurants" className="block px-3 py-2 text-white hover:bg-yellow-500 rounded-md font-medium">
              Restaurants
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-white hover:bg-yellow-500 rounded-md font-medium">
              How It Works
            </a>
            <button className="w-full bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-yellow-100 transition-colors font-medium">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
