import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarouselPage() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative mt-12 p-8">
      

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold rounded-lg">
                Slide {index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
