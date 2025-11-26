import { X } from 'lucide-react';
import { useEffect } from 'react';

interface OurStoryPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function OurStoryPanel({ isOpen, onClose }: OurStoryPanelProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          <div className="px-6 py-8 space-y-8">
            <div>
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Built for Students, By Students
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the struggle of finding affordable, quality food during late-night study sessions. Foodzippy was created to make access to good food easier without breaking the bank.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proud Indian Startup from UP
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Born in the heart of Uttar Pradesh, we represent India's entrepreneurial spirit by empowering local restaurants.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lowest Commission Promise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We charge the lowest commission in the industry so restaurants can offer better prices and students can enjoy more affordable meals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <p className="text-gray-700 text-center font-medium">
                Join us in our mission to make quality food accessible to every student!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStoryPanel;
