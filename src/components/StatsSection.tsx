import { Users, Store, Package, MapPin } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Stat {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Users, value: 5000, suffix: '+', label: 'Happy Students' },
  { icon: Store, value: 50, suffix: '+', label: 'Partner Restaurants' },
  { icon: Package, value: 10000, suffix: '+', label: 'Orders Delivered' },
  { icon: MapPin, value: 2, suffix: '', label: 'Cities Launching' }
];

function StatsSection() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = stat.value;
                    return newCounts;
                  });
                  clearInterval(timer);
                } else {
                  setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                  });
                }
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {counts[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-white font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
