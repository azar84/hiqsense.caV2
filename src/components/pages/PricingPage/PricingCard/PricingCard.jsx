import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icon from "../../../../assets/pricing/Icon.png";
import check from "../../../../assets/pricing/Check.png";
import "./PricingCard.css";
import { HashLink as Link} from "react-router-hash-link";

const PricingCard = ({
  title,
  packageName,
  price,
  image,
  imagePosition,
  bgColor,
  offers,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="pricing-card-container">
      <div data-aos="fade-up" className={`pricing-plan-card ${bgColor}`}>
        <img
          className={`pricing-card-image ${imagePosition}`}
          src={image}
          alt="ellipse"
        />
        <div className="plan-card-content">
          <div className="plan-card-text">
            <img className="w-[65px] " src={icon} alt="icon" />
            <p
              style={{ fontSize: "2.5rem", color: "#0A0628" }}
              className="font-bold font-subTitle text-4xl my-4"
            >
              {title}
            </p>
            <p
              style={{ color: "#0A0628" }}
              className="font-light font-subTitle text-2xl my-2.5"
            >
              {packageName}
            </p>
            <p
              style={{ color: "#0A0628" }}
              className="font-bold font-subTitle text-6xl my-8"
            >
              {price}
            </p>
            <div className="plan-card-list">
              {offers.map((offer) => (
                <div key={offer.id} className="plan-card-list-item">
                  <img className="w-[28px] h-[28px] " src={check} alt="check" />
                  <p className="font-normal font-subTitle text-2xl ml-2">
                    {offer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="plan-card-btn-container">
            <Link to = "/contact#root"> 
            <button className="plan-card-btn font-subTitle">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
