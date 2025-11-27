import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    '/food-image1.jpg',
    '/food-image2.jpg',
    '/food-image3.jpg',
    '/food-image4.jpg'
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentBg((i) => (i + 1) % images.length);
    }, 2000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-800 text-white py-20 sm:py-32 overflow-hidden">
      {/* Background slider layers */}
      <div className="absolute inset-0 pointer-events-none">
        {images.map((img, i) => (
          <div
            key={img}
            aria-hidden="true"
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentBg === i ? 1 : 0
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="inline-block bg-red-500 text-white px-10 py-5 rounded-full mb-8 animate-pulse shadow-lg">
          <span className="text-base sm:text-lg md:text-xl font-semibold">We are launching in Agra & Noida</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Delivering Love to Students
        </h1>
        <br></br>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
          Fresh food, lowest commissions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-amber-800 bg-opacity-50 text-white px-16 py-6 rounded-full hover:bg-opacity-70 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
            <MapPin size={24} />
            Choose your city
          </button>
          <button className="bg-red-500 text-white px-16 py-6 rounded-full hover:bg-red-600 transition-all duration-200 transform hover:scale-105 text-lg shadow-lg">
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
