import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import SplideCore from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
//import gogleImg from "../../../images/awards/google.png";
import microsoftImg from "../../../images/awards/microsoft.png";
import amazonImg from "../../../images/awards/AWS.png";
//import ciscoImg from "../../../images/awards/cisco.png";
import metaImg from "../../../images/awards/meta.png";
//import ibmImg from "../../../images/awards/ibm.png";
import DesignRush from "../../../images/awards/DesignRush.png";
import Firebase from "../../../images/awards/Firebase.png";
import Zoho from "../../../images/awards/zoho-logo-web.svg";

import { useEffect } from "react";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// import prevIcon from '../../../images/awards/prev.svg'
// import nextIcon from '../../../images/awards/next.svg'
function Awards() {
  useEffect(() => {
    const splide = new SplideCore(".awardsSplide", {
      heightRatio: "auto",
      type: "loop",
      drag: "free",
      focus: "center",
      autoStart: true,
      pauseOnFocus: false,
      pauseOnHover: true,
      pagination: false, // Enable or disable pagination
      arrows: true,
      perPage: 6,
      autoScroll: {
        speed: 0.5,
      },
      breakpoints: {
        1024: {
          perPage: 3,
          pagination: true, // Enable or disable pagination
          arrows: true,
        },
        767: {
          perPage: 2,
          pagination: false, // Enable or disable pagination
          arrows: true,
          padding: "1rem",
        },
        640: {
          perPage: 2,
          pagination: false, // Enable or disable pagination
          arrows: true,
          padding: "1rem",
        },
      },
    });

    // Add the AutoScroll extension
    splide.mount({ AutoScroll });

    // Cleanup
    return () => {
      splide.destroy();
    };
  }, []);
  return (
    <>
      <section className="px-4 lg:px-40 pt-10 lg:pt-20">
        <PrimaryHeading headingText="Partners & Technologies" />
        <PrimarySubHeading subText="Enhanced Service Through Technology Partnerships" />

        <div className="grid grid-cols-1 lg:grid-cols-2 awardsBottomLine">
          <div>
            <h3
              className="text-center font-hebrew-bold text-txt-primary text-[32px] mb-5 lg:text-left lg:w-[60%] lg:text-[40px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Powering Excellence with Technology Partnerships
            </h3>
          </div>
          <div>
            <p
              className="text-center font-hebrew-regular text-txt-primary text-[14px] w-[65%] mx-auto lg:text-left lg:w-[60%] lg:text-[18px]"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              We&apos;ve partnered with top technology providers to deliver
              exceptional service to our clients, leveraging innovative
              solutions to meet their needs.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-20">
          <Splide aria-label="Partners Images" className="awardsSplide">
            <SplideSlide className="p-6">
              <img
                src={DesignRush}
                alt="Hiqsense Smart Systems LTD on DesignRush"
              />
            </SplideSlide>
            <SplideSlide className="p-6">
              <img
                src={Firebase}
                alt="Hiqsense Smart Systems LTD on FireBase"
              />
            </SplideSlide>

            <SplideSlide className="p-6">
              <img src={Zoho} alt="Hiqsense Smart Systems LTD on Zoho" />
            </SplideSlide>
            <SplideSlide className="p-6">
              <img
                src={microsoftImg}
                alt="Hiqsense Smart Systems LTD on Microsoft"
              />
            </SplideSlide>
            <SplideSlide className="p-6">
              <img
                src={amazonImg}
                alt="Hiqsense Smart Systems LTD on Amazon Web Services"
              />
            </SplideSlide>

            <SplideSlide className="p-6">
              <img src={metaImg} alt="Hiqsense Smart Systems LTD on Facebook" />
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
}

export default Awards;
