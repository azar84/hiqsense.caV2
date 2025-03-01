import React, { useEffect } from "react";
import person from "../../assets/about-us/hero-section.png";
import people from "../../assets/about-us/transforming-section.png";
import line from "../../assets/about-us/line.png";
import pseudo from "../../assets/about-us/pseudo.png";
import delivery2 from "../../assets/about-us/delivery2.png";
import legacy2 from "../../assets/about-us/legacy2.png";
import milestone1 from "../../assets/about-us/milestone1.png";
import relationship2 from "../../assets/about-us/relationship2.png";
import circularBg from "../../assets/about-us/bg-values.png";
import { features, services } from "../../constants";
import Feature from "../Feature";
import AboutButton from "../AboutButton";
import ServiceCard from "../ServiceCard";
import Team from "../Team/Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink as Link } from "react-router-hash-link";
import SEO from "../../components/SEO";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <SEO
        title="Hiqsense | About Us | Your Canadian Small Business Ally"
        description="Meet the team behind Hiqsense Smart Systems, Saskatoon's leading web design and technology agency
        dedicated to empowering small businesses across Canada. Learn about our journey,
         values, and commitment to providing top-notch web design, branding, graphic design, SEO,
          email hosting, and IT support. Discover how our affordable, tailored solutions make technology
           accessible and effective for small businesses."
        canonical="https://hiqsense.ca/about"
        name="Hiqsense Smart Systems LTD"
        type="article"
      />

      <div className="about-hero-section w-full  ">
        <div
          style={{ paddingBottom: "5rem" }}
          className=" mx-auto grid md:grid-cols-2 hero-about-content"
        >
          <div data-aos="fade-right" className=" hero-about-text">
            <p
              style={{
                fontSize: "3rem",
                marginTop: "10.56rem",
                marginLeft: "6.125rem",
                color: "#F9F9F9",
                lineHeight: "4.56rem",
              }}
              className="about-hero-text font-body font-bold text-center md:text-left text-whiteTitle"
            >
              Empowering Your Digital <br /> Journey – A Decade of Design
              Excellence in Saskatoon
            </p>
            <p
              style={{
                marginLeft: "6.125rem",
                color: "#F9F9F9",
                fontWeight: "400",
                fontSize: "1rem",
                letter: "0.25px",
                lineHeight: "1.5rem",
              }}
              className="about-hero-text text-center md:text-left text-whiteTitle font-subTitle"
            >
              Empowering Canadian Businesses: Hiqsense, Your Technology Ally
            </p>
          </div>
          <img
            style={{ marginTop: "10.56rem" }}
            className="w-[500px] mx-auto my-4"
            src={person}
            alt="person"
            data-aos="fade-left"
          />
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            data-aos="fade-right"
            className="w-[500px] mx-auto my-4"
            src={people}
            alt="/"
          />
          <div data-aos="fade-right" className="flex flex-col justify-center">
            <p
              style={{ fontSize: "2rem" }}
              className=" transform-text sm:text-3xl  font-bold text-left font-subTitle"
            >
              From Saskatoon to the World: Elevate Your Online Presence with
              Hiqsense
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
                lineHeight: "1.625rem",
                letter: "0.25px",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              className=" md:text-left font-subTitle text-transform"
            >
              At Hiqsense, we&apos;re on a mission to empower small businesses
              across Canada by providing affordable solutions for establishing a
              professional online presence. From captivating logo design to
              comprehensive SEO optimization and seamless email hosting setup,
              we offer a full suite of services to meet all your digital needs.
              With our expertise and dedication, we&apos;ll help you stand out
              in the crowded online marketplace and achieve your business goals.
              Let Hiqsense be your trusted partner on the path to success.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
                lineHeight: "1.625rem",
                letter: "0.25px",
                marginBottom: "3rem",
              }}
              className="text-transform font-subTitle"
            >
              Join us on this transformative journey, where design meets
              excellence, and together, we shape the future of Saskatoon.
            </p>

            <img className="line" src={line} alt="line" />
          </div>
        </div>
      </div>

      <div className="about-services w-full">
        <div data-aos="fade-right" className="about-services-left md:text-left">
          <p
            style={{
              fontSize: "2rem",
              lineHeight: "2.5rem",
              letter: "0.25px",
              color: "#F9F9F9",
            }}
            className="font-bold font-subTitle text-center md:text-left transform-text"
          >
            We are Dedicated to Pushing the Boundaries of Design and Automation
          </p>
          <div className="btn-services-container">
            <Link to="/contact#root">
              <AboutButton
                someStyle="add-width"
                className="services-btn"
                text="Get started"
              />
            </Link>
          </div>
        </div>
        <div className="about-services-right">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 500}`}
            >
              <ServiceCard
                image={service.image}
                text={service.text}
                tittle={service.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ margin: "5rem 0", paddingBottom: "5rem" }}
        className="my-10"
      >
        <div className="about-achievements">
          <div data-aos="fade-up">
            <img src={milestone1} alt="milestone" />
          </div>

          <div data-aos="fade-down" className="achievements-legacy">
            <img src={legacy2} alt="delivery" />
          </div>
          <div data-aos="fade-up">
            <img src={relationship2} alt="delivery" />
          </div>
          <div data-aos="fade-down" className="achievements-legacy">
            <img src={delivery2} alt="delivery" />
          </div>
        </div>
      </div>

      <div className="about-team">
        <p
          style={{ fontSize: "3.5rem", color: "#F9F9F9" }}
          className="font-body font-bold"
        >
          Meet the Team
        </p>
        <Team />
      </div>

      <div className="about-values">
        <img className="circular-bg" src={circularBg} alt="circularBg" />

        <div style={{ width: "65%" }} className="values-text-container">
          <p
            style={{ fontSize: "3.5rem", marginTop: "5rem" }}
            className="font-body font-bold text-6xl"
          >
            Values and Approach
          </p>
          <p
            style={{ fontSize: "1.125rem", marginTop: "1rem" }}
            className="font-normal font-subTitle"
          >
            Our approach combines cutting-edge technology with personalized
            strategies to deliver exceptional results.
          </p>
        </div>

        <img className="pseudo" src={pseudo} alt="pseudo" />
        <div className="about-features hover:scale-105 hover:shadow-xl duration-300 ">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 500}`}
            >
              <Feature
                image={feature.image}
                text={feature.text}
                tittle={feature.title}
              />
            </div>
          ))}
        </div>
        <Link to="/contact#root">
          <AboutButton text="Get started" />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
