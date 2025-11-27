import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    "/food-image1.jpg",
    "/food-image2.jpg",
    "/food-image3.jpg",
    "/food-image4.jpg"
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 4000); // slide every 4 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">

      {/* SLIDER WRAPPER */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${currentBg * 100}%)` }}
      >
        {images.map((img) => (
          <div
            key={img}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT */}
      <div
        className={`relative z-20 max-w-7xl mx-auto px-6 text-center font-century-gothic transition-all duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mt-24">
          Delivering Love to Students
        </h1>

        <p className="text-3xl sm:text-4xl md:text-5xl mt-6 font-semibold">
          Fresh food, lowest commissions
        </p>

        <p className="text-3xl sm:text-4xl md:text-5xl mt-10 font-semibold">
          Coming soon to your campus!
        </p>

        <p className="text-3xl sm:text-4xl md:text-5xl mt-6 font-semibold">
          We are launching soon in Agra & Noida
        </p>
      </div>
    </section>
  );
}

export default Hero;
