import { Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Restaurant {
  name: string;
  tags: string[];
  rating: number;
  description: string;
}

const restaurants: Restaurant[] = [
  {
    name: 'Spice Paradise',
    tags: ['North Indian', 'Mughlai', 'Tandoor'],
    rating: 4.5,
    description: 'Authentic North Indian flavors with tandoori dishes and rich curries.'
  },
  {
    name: 'Dosa Corner',
    tags: ['South Indian', 'Vegetarian', 'Healthy'],
    rating: 4.7,
    description: 'Crisp dosas, fluffy idlis, and aromatic filter coffee.'
  },
  {
    name: 'Pizza Hub',
    tags: ['Italian', 'Fast Food', 'Pizza'],
    rating: 4.3,
    description: 'Wood-fired pizzas with gooey cheese.'
  },
  {
    name: 'Burger Nation',
    tags: ['American', 'Fast Food', 'Burgers'],
    rating: 4.6,
    description: 'Fresh ingredients and house special sauce.'
  },
  {
    name: 'Wok Express',
    tags: ['Chinese', 'Asian', 'Noodles'],
    rating: 4.4,
    description: 'Authentic Chinese & Asian fusion dishes.'
  },
  {
    name: 'Cafe Delights',
    tags: ['Cafe', 'Beverages', 'Desserts'],
    rating: 4.8,
    description: 'Coffee, refreshing beverages, heavenly desserts.'
  }
];

const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200'];

const getRestaurantImage = (restaurantName: string): string => {
  const imageMap: { [key: string]: string } = {
    'Dosa Corner': '/dosa.jpg',
    'Pizza Hub': '/pizza.jpg',
    'Burger Nation': '/bureger.jpg',
    'Wok Express': '/wrk.jpg',
    'Spice Paradise': '/restorent1.jpg',
    'Cafe Delights': '/restorent1.jpg'
  };
  return imageMap[restaurantName] || '/restorent1.jpg';
};

function RestaurantsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(restaurants.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (!prev[index]) {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="restaurants" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Restaurants in Your City
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing restaurants offering the best food at student-friendly prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-opacity transition-transform duration-500 hover:shadow-2xl ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: visibleCards[index] ? 'none' : 'translateY(40px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div
                className={`h-32 ${colors[index]} bg-center bg-cover bg-no-repeat rounded-t-2xl`}
                style={{
                  backgroundImage: `url('${getRestaurantImage(restaurant.name)}')`
                }}
                aria-hidden="true"
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                  <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-lg">
                    <Star size={16} className="text-green-600 fill-green-600" />
                    <span className="text-sm font-semibold text-green-700">{restaurant.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {restaurant.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105 text-lg font-semibold shadow-lg">
            See All Restaurants
          </button>
        </div>
      </div>
    </section>
  );
}

export default RestaurantsSection;
