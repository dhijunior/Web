
import Navbar from "@/components/Navbar";
//import Carousel from "@/components/Carousel";
import SubjectCards from "@/components/SubjectCards";
import Footer from "@/components/Footer";
import EmblaCarouselPage from "@/components/EmblaCarousel";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EmblaCarouselPage />
      <SubjectCards />
      <Footer />
    </div>
  );
};

export default Index;
