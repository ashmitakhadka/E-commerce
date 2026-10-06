import { BestSeller } from "../components/bestseller";
import { Category } from "../components/category";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { WhyChooseUs } from "../components/whychooseus";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <BestSeller />
      <WhyChooseUs />
      <Footer />
    </>
  );
};
