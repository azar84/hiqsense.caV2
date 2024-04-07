import React from "react";
import PricingHero from "./PricingHero.jsx/PricingHero";
import PricingPlans from "./PricingPlans/PricingPlans";
//import ContactUs from "./ContactUs/ContactUs";
import SEO from "../../SEO";
import { ContactForm } from "../ContactUs/components/FormNew";
import Map from "../ContactUs/components/Map";
import { Container } from "../ContactUs/components/Container";

const Pricing = () => {
  return (
    <div>
      <SEO
        title="Hiqsense | Pricing | Affordable, Tailored Technology Packages"
        description="Unlock exceptional value with Hiqsense Smart Systems' pricing plans, perfectly crafted for small businesses
        in Canada. Our pricing page details various budget-friendly packages that combine services like web design,
         SEO optimization, graphic design, email hosting, and IT support. Find the ideal technology solution tailored 
         to your business needs and budget, ensuring you get top-quality service without breaking the bank."
        canonical="https://hiqsense.ca/pricing"
        name="Hiqsense Smart Systems LTD"
        type="article"
      />

      <PricingHero />
      <PricingPlans />
      <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-start px-1 md:px-3 py-9 lg:p-16 lg:pb-20">
          <div className="flex flex-col pt-5">
            <h1 className="text-4xl text-left font-bold text-[#0A0628]">
              Get in
              <span className="text-[#F6393D]">Touch</span>
            </h1>

            <ContactForm />
          </div>
          <Map />
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
