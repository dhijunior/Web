
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80'
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] mt-16 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 w-full h-full transition-transform duration-300 ${
            index === currentSlide 
              ? 'translate-x-0'
              : direction === 'right'
              ? 'translate-x-[100%]'
              : 'translate-x-[-100%]'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Transform Your Future</h2>
              <p className="text-xl">Expert coaching to help you achieve your goals</p>
            </div>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="carousel-button left-4">
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="carousel-button right-4">
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
