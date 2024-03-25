import { useEffect } from "react";
import PricingCard from "../../../ui/PricingCard";
import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import lgRightEllipse from "../../../images/pricing-options/lgRightEllipse.png";
import lgLeftEllipse from "../../../images/pricing-options/lgLeftEllipse.png";

const pricingObj = [
  {
    service: "Web Design",
    package: "Startup Package",
    cost: "$1500 CAD",
    list: [
      "Professional Website with Five Static Pages" ,
      "CMS Backend for Effortless Content Management" ,
      "Free Domain Name for One Year",
      "Complimentary Web Hosting for One Year",
      "Premiem UI Design",
      "5 Business Email Accounts",
      "One Month of Free Support Post-Launch"
    ],
  },
  {
    service: "Web Design",
    package: "E-Commerce Package",
    cost: "$3000 CAD",
    list: [
      "Free Domain Name for One Year",
      "Free Web Hosting with SSL for One Year" ,
      
      "Integrated Shopping Cart and Secure Payment Gateways",
      "Responsive Design for All Devices",
      "Custom UI Design for Shopping Experience" ,
      "Unlimited Products & Categories",
      "Round-the-Clock Support for the First Month",
     
    ],
  },
  {
    service: "Graphic Design",
    package: "Corporate Branding",
    cost: "$500 CAD",
    list: [
      "Three Creative Concepts",
      "Social Media Kit",
      "Stationery and Mockup Designs",
      "Extensive Brand Guidelines" , 
      "Defined Color Palette & Typography",     
      "Elegant Brand Book Design",
      "3D mockups" ,
      "All Editable and Source Files"
      
    ],
  },
  {
    service: "SEO",
    package: "SEO Pro",
    cost: "$1000 CAD",
    list: [
      "Site SEO Audit",
      "Keywords Research",
      "H1,H2, and H3 Tags",
      "On-Page Optimization",
      "Meta Description",
      "Schema Markup" ,
      "Submit Sitemap for Search Engines",
      "Contents Rewriting"
    ],
  },
];

function PricingOptions() {
  useEffect(() => {}, [pricingObj]);
  return (
    <>
      <section className="px-4 lg:px-40 py-10 lg:py-20 relative overflow-hidden">
        <div className="hidden lg:block absolute right-0 top-0 -z-10">
          <img src={lgRightEllipse} alt="lgRightEllipse" />
        </div>
        <div className="hidden lg:block absolute left-0 bottom-0 -z-10">
          <img src={lgLeftEllipse} alt="lgLeftEllipse" />
        </div>
        <PrimaryHeading headingText="Pricing Options" />
        <PrimarySubHeading subText="Choose the plan that fits your budget" />

        <div className="grid grid-cols-1 pricingContainer md:grid-cols-2 md:gap-4">
          {/* Map over pricingObj and pass object keys as props */}
          {pricingObj.map((pricing, index) => (
            <PricingCard
              key={index}
              serviceName={pricing.service}
              packageName={pricing.package}
              priceTag={pricing.cost}
              serviceList={pricing.list}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default PricingOptions;
