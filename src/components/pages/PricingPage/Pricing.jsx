import React from "react";
import PricingHero from "./PricingHero.jsx/PricingHero";
import PricingPlans from "./PricingPlans/PricingPlans";
//import ContactUs from "./ContactUs/ContactUs";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "../ContactUs/components/FormNew";
import  Map  from "../ContactUs/components/Map";
import  {Container}  from "../ContactUs/components/Container";






const Pricing = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          Pricing - Hiqsense Smart Systems: Affordable, Tailored Technology
          Packages
        </title>
        <meta
          name="description"
          content="Unlock exceptional value with Hiqsense Smart Systems' pricing plans, perfectly crafted for small businesses
         in Canada. Our pricing page details various budget-friendly packages that combine services like web design,
          SEO optimization, graphic design, email hosting, and IT support. Find the ideal technology solution tailored 
          to your business needs and budget, ensuring you get top-quality service without breaking the bank."
        />
        <meta
          name="keywords"
          content="Hiqsense pricing, affordable technology solutions, small business packages,
            web design pricing, SEO services cost, graphic design deals, email hosting plans,
             IT support pricing, budget-friendly solutions, customized service packages, 
             business technology deals, Saskatoon web agency, value-for-money services."
        />
        <link rel="canonical" href="https://hiqsense.ca/pricing" />
      </Helmet>
      <PricingHero />
      <PricingPlans />
      <Container >
       
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
