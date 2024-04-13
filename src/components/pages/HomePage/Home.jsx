import HeroSection from "../HomePage/Hero/Hero";
import Services from "../HomePage/Services/Services";
// Sections Import End
import WhyChooseUs from "../HomePage/WhyChooseUs/WhyChooseUs";
import FeaturedWork from "../HomePage/FeaturedWork/FeaturedWork";
import Consultation from "./Consultation/Consultation";
//import ClientTestimonials from "../Portfolio/ClientTestimonials";
import TimelineSection from "../HomePage/TimelineSection/TimelineSection";
import Awards from "../HomePage/Awards/Awards";
import PricingOptions from "../HomePage/PricingOptions/PricingOptions";
//import Cta from "../HomePage/CTA/Cta";
import GetInTouch from "../GetInTouch/GetInTouch";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Helmet } from "react-helmet-async";

// import AOS from "../../../../node_modules/aos/dist/aos";
// import "aos/dist/aos.css";
// import "../../../../node_modules/animate.css";

export default function Home() {
  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        easing: "ease-out-cubic",
      });
    };

    // Delay initialization by a short duration
    const delay = 100;
    const timeoutId = setTimeout(initializeAOS, delay);

    // Cleanup function to clear the timeout in case the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Run this code after the component has mounted
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      image.draggable = false;
    });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hiqsense: Tech Partner for Small Businesses in Canada</title>
        <meta
          name="description"
          content="Discover Hiqsense: premier web design agency in Saskatoon, SK, serving small businesses across Canada. Elevate your business with our tailored solutions."
        />
        <meta
          name="keywords"
          content="Hiqsense, Hiqsense Smart Systems, web design agency, 
           Saskatoon, Saskatchewan, small business, Canada, professional services,
            web design, corporate branding, graphic design, SEO optimization,
             email hosting, IT support, affordable solutions, business technology partner."
        />
        <link rel="canonical" href="https://hiqsense.ca/" />
      </Helmet>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <FeaturedWork />
      <Consultation />
      {/* <ClientTestimonials /> */}

      <TimelineSection />
      <Awards />
      <PricingOptions />
      {/* <Cta /> */}
      <GetInTouch />
    </div>
  );
}
