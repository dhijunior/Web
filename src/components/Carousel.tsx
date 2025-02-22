import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2400&q=80',
    title: 'Transform Your Future',
    subtitle: 'Expert coaching to help you achieve your goals',
    quote: '"The only way to do great work is to love what you do." - Steve Jobs'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2400&q=80',
    title: 'Unlock Your Potential',
    subtitle: 'Personalized strategies for success',
    quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill'
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80',
    title: 'Lead With Confidence',
    subtitle: 'Develop essential leadership skills',
    quote: '"Leadership is not about being the best. It\'s about making everyone else better."'
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80',
    title: 'Build Strong Teams',
    subtitle: 'Create high-performing collaborative environments',
    quote: '"Alone we can do so little; together we can do so much." - Helen Keller'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80',
    title: 'Career Excellence',
    subtitle: 'Navigate your path to professional success',
    quote: '"The future depends on what you do today." - Mahatma Gandhi'
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=80',
    title: 'Strategic Growth',
    subtitle: 'Scale your business with proven methods',
    quote: '"Growth is never by mere chance; it is the result of forces working together."'
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2400&q=80',
    title: 'Personal Development',
    subtitle: 'Invest in your continuous improvement',
    quote: '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=80',
    title: 'Business Excellence',
    subtitle: 'Transform challenges into opportunities',
    quote: '"Success usually comes to those who are too busy to be looking for it." - Henry David Thoreau'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] mt-16 overflow-hidden w-full">
      {/* Static content layer - Always visible */}
      <div className="absolute inset-0 z-10">
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto space-y-4 px-4">
            <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            <div className="mt-6 px-6 py-4 bg-black/40 backdrop-blur-sm rounded-lg mx-auto max-w-2xl">
              <p className="text-lg italic text-white/90">
                {slides[currentSlide].quote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding images layer */}
      <div 
        className="relative flex transition-transform duration-500 ease-in-out h-full"
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 100}%`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Controls Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="container mx-auto h-full relative">
          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 carousel-button pointer-events-auto"
            disabled={isAnimating}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 carousel-button pointer-events-auto"
            disabled={isAnimating}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
