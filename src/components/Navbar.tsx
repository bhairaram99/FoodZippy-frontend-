import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenStoryPanel: () => void;
}

function Navbar({ onOpenStoryPanel }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const colors = ['#E82335', '#F7C150'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % colors.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [colors.length]);

  return (
    <nav
      className="sticky top-0 z-50 transition-colors duration-500"
      style={{ backgroundColor: colors[bgIndex] }}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-7 lg:px-9">
        <div className="flex justify-between items-center h-24 py-2">
          <div className="flex-shrink-0">
            <img
              src="/foodzip2.png"
              alt="Foodzippy logo"
              className="h-28 sm:h-32 md:h-40 w-auto object-contain"
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
            <button className="text-white hover:text-yellow-100 transition-colors duration-200 font-medium flex items-center gap-2">
              <MapPin size={20} />
              Choose your city
            </button>
            <button className=" text-white px-6 py-2 rounded-full hover:text-yellow-100 transition-all duration-200  ">
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
            <button className="w-full px-3 py-2 text-white hover:bg-yellow-500 rounded-md font-medium flex items-center gap-2">
              <MapPin size={20} />
              Choose your city
            </button>
            <button className="w-full bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-yellow-100 transition-colors font-medium active:bg-white focus:bg-white">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
