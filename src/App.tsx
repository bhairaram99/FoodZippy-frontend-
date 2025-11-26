import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RestaurantsSection from './components/RestaurantsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnershipSection from './components/PartnershipSection';
import Footer from './components/Footer';
import OurStoryPanel from './components/OurStoryPanel';
import WhatWeOffer from './components/WhatWeOffer';
import HowItWorks from './components/HowItWorks';

function App() {
  const [isStoryPanelOpen, setIsStoryPanelOpen] = useState(false);

  useEffect(() => {
    if (isStoryPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isStoryPanelOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenStoryPanel={() => setIsStoryPanelOpen(true)} />
      <Hero />
      <WhatWeOffer />
      <HowItWorks />
      <RestaurantsSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnershipSection />
      <Footer />
      <OurStoryPanel isOpen={isStoryPanelOpen} onClose={() => setIsStoryPanelOpen(false)} />
    </div>
  );
}

export default App;
