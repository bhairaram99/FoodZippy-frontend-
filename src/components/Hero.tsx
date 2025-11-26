import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-800 text-white py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full mb-8 animate-pulse">
          <span className="text-sm sm:text-base">We are launching with your love n support</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Delivering Love to Students
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-yellow-300">
          in Agra & Noida
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
          Fresh food, lowest commissions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-amber-800 bg-opacity-50 text-white px-8 py-4 rounded-full hover:bg-opacity-70 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
            <MapPin size={24} />
            Choose your city
          </button>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-200 transform hover:scale-105 text-lg shadow-lg">
            Order Now
          </button>
        </div>

        <p className="text-sm sm:text-base text-yellow-200 font-light">
          Coming soon to your campus!
        </p>
      </div>
    </section>
  );
}

export default Hero;
