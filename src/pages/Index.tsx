
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import SubjectCards from "@/components/SubjectCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Carousel />
      <SubjectCards />
      <Footer />
    </div>
  );
};

export default Index;
