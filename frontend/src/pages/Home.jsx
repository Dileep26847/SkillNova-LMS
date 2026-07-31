import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBrands from "../components/TrustedBrands";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Categories />
      <FeaturedCourses />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;