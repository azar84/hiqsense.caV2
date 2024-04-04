import React from "react";
import PricingCard from "../PricingCard/PricingCard";
import ellipses1 from "../../../../assets/pricing/bg-ellipses1.png";
import ellipses2 from "../../../../assets/pricing/ellipse-bg2.png";
import ellipses3 from "../../../../assets/pricing/ellipses-bg3.png";
import PricingItem from "../PricingItem/PricingItem";
import { pricing_plans } from "../../../../constants";
import "./PricingPlans.css";

const PricingPlans = () => {
  return (
    <div className="pricing-plans-container">
      <div className="pricing-plans-text">
        {" "}
        <p
          style={{ fontSize: "3.5rem", marginTop: "5rem" }}
          className="font-body font-bold text-6xl"
        >
          Pricing Plans
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
          className="font-normal font-subTitle"
        >
          {" "}
          Discover a range of tailored solutions designed to meet the unique
          needs of your digital journey. Choose the package that aligns with
          your goals and let&apos;s embark on a transformative journey together.
        </p>
      </div>

      <div className="pricing-plan1">
        <img
          className="ellipses-bg1 hidden md:block "
          src={ellipses1}
          alt="ellipse"
        />
        <PricingCard
          imagePosition="postion-top-right"
          image={pricing_plans[0].image}
          key={pricing_plans[0].id}
          title={pricing_plans[0].title}
          packageName={pricing_plans[0].packageName}
          price={pricing_plans[0].price}
          offers={pricing_plans[0].offers}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12 "
          >
            Unlock your online potential with our $1500 CAD package, featuring a
            stunning five-page professional website, easy CMS, free domain and
            hosting for a year, premium design, five business emails, and a
            month of post-launch support. Elevate your brand effortlessly and
            impressively!
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[0].features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 300}`}
            >
              <PricingItem
                styles="left-right-spacing"
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-plan2">
        <PricingCard
          image={pricing_plans[1].image}
          imagePosition="position-left"
          key={pricing_plans[1].id}
          title={pricing_plans[1].title}
          packageName={pricing_plans[1].packageName}
          price={pricing_plans[1].price}
          offers={pricing_plans[1].offers}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12"
          >
            Experience the pinnacle of online retail with our $3000 CAD package:
            A year of free domain and SSL-secured hosting, a seamless shopping
            cart with secure payments, responsive design for all devices, custom
            UI for an unparalleled shopping experience, unlimited products &
            categories, plus 24/7 support for the first month. Elevate your
            e-commerce effortlessly!
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[1].features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 300}`}
            >
              <PricingItem
                styles="left-right-spacing"
                key={feature.id}
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-plan1">
        <img
          className="pricing-plan-bg2 hidden md:block "
          src={ellipses2}
          alt="ellipse"
        />
        <PricingCard
          imagePosition="postion-right"
          image={pricing_plans[2].image}
          bgColor="linear-gradient-bg"
          key={pricing_plans[2].id}
          title={pricing_plans[2].title}
          packageName={pricing_plans[2].packageName}
          price={pricing_plans[2].price}
          offers={pricing_plans[2].offers}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12"
          >
            Revitalize your brand with our $500 CAD package, offering three
            unique creative concepts, a comprehensive social media kit, stylish
            stationery and mockups, in-depth brand guidelines, a curated color
            palette and typography, an elegant brand book, 3D mockups, plus all
            editable and source files for total control. Transform and define
            your brand identity with sophistication and ease!
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[2].features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 300}`}
            >
              <PricingItem
                styles="left-right-spacing"
                key={feature.id}
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-plan2">
        <img
          className="pricing-plan-bg2 hidden md:block"
          src={ellipses3}
          alt="ellipse"
        />
        <PricingCard
          image={pricing_plans[3].image}
          imagePosition="position-top"
          bgColor="bg-transparent"
          key={pricing_plans[3].id}
          title={pricing_plans[3].title}
          packageName={pricing_plans[3].packageName}
          price={pricing_plans[3].price}
          offers={pricing_plans[3].offers}
        />
        <div className="mx-auto text-center" style={{ width: "65%" }}>
          <p
            style={{
              fontSize: "1.125rem",
            }}
            className="font-normal font-subTitle my-12"
          >
            Elevate your online visibility with our $1000 CAD SEO package,
            offering a detailed site audit, comprehensive keyword research,
            optimized H1, H2, H3 tags, on-page enhancement, crafted meta
            descriptions, schema markup, sitemap submission to search engines,
            and expert content rewriting. Boost your search rankings and drive
            traffic effortlessly!
          </p>
        </div>
        <div className="pricing-plan-features">
          {pricing_plans[3].features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 300}`}
            >
              <PricingItem
                styles="left-right-spacing"
                key={feature.id}
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
