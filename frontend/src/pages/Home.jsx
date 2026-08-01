import Hero from "../components/Hero";
import Categories from "../components/categories";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChoose from "../components/WhyChoose";
import DataWave from "../components/DataWave";
import TrustedBrands from "../components/TrustedBrands";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />

      <Categories />

      <FeaturedCourses />

      <WhyChoose />

      <DataWave />

      <TrustedBrands />

      <Testimonials />

      <CallToAction />
    </div>
  );
}

export default Home;