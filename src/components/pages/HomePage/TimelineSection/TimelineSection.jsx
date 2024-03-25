import timelineBg from "../../../images/Timeline/bg.jpg";
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";
import PrimaryHeading from "../../../ui/PrimaryHeading";
import { TimelineSteps, TimelineStepsLeft } from "../../../ui/TimelineSteps";
import bluePulseImg from "../../../images/Timeline/blueEllipse.png";

function TimelineSection() {
  return (
    <>
      <section
        className="px-3 lg:px-40 pt-10 pb-20 lg:py-20 relative z-[1] overflow-hidden rightStick"
        style={{
          backgroundImage: `url(${timelineBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="topLeftBluePulseBlock">
          <img src={bluePulseImg} alt="bluePulseImg" />
        </div> 
        <div className="centerRightBluePulseBlock">
          <img src={bluePulseImg} alt="bluePulseImg" />
        </div>
        <div className="bottomLeftBluePulseBlock">
          <img src={bluePulseImg} alt="bluePulseImg" />
        </div>
        
        <PrimaryHeading
          headingText="Transforming Ideas into Digital Reality: Your Web Design Timeline"
          custColor="#fff"
          timelineHeading="lg:w-[70%] lg:mx-auto"
        />

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 md:gap-20 md:mb-20 lg:mb-40 lg:mt-20">
          <TimelineSteps
            stepsContent={{
              Steps: "Step 1",
              Heading: "Discovery Meeting",
              SubHeading: "We begin with an in-depth discovery meeting to understand your business, goals, and vision for your website.",
              lowerCol: "md:relative pointRight",
            }}
          />
          <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 2",
              Heading: "Design Mock-ups",
              SubHeading:
                "Our designers create initial mock-ups, giving you a visual feel of your future website.",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
          <TimelineSteps
            stepsContent={{
              Steps: "Step 3",
              Heading: "Feedback & Revisions",
              SubHeading:
                "We welcome your feedback on these mock-ups and make revisions to ensure they align perfectly with your vision.",
              lowerCol: "md:relative pointRight",
            }}
          />
          <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 4",
              Heading: "Bringing Designs to Life",
              SubHeading:
                "Our development team transforms these designs into a functional, user-friendly website.",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
          <TimelineSteps
            stepsContent={{
              Steps: "Step 5",
              Heading: "CMS-Driven Content Crafting",
              SubHeading:
                "We craft engaging content using a CMS, ensuring easy updates and brand-aligned storytelling on your site.",
              lowerCol: "md:relative pointRight",
            }}
          />
          <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 6",
              Heading: "Ensuring Excellence",
              SubHeading:
                "Rigorous testing is conducted to ensure flawless functionality and user experience across all devices.",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
          <TimelineSteps
            stepsContent={{
              Steps: "Step 7",
              Heading: "Your Website Takes Flight",
              SubHeading:
                "The big moment where your website goes live - a digital embodiment of your business vision.",
              lowerCol: "md:relative pointRight",
            }}
          />
      
               <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 8",
              Heading: "Ongoing Partnership",
              SubHeading:
                "Our journey doesn’t end at launch. We provide ongoing support to ensure your website continues to thrive.",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
        </div>
        <div className="px-10">
          <PrimaryButtonOutlined buttonlabel="Learn More" href= "/contact#root" />
        </div>
      </section>
    </>
  );
}

export default TimelineSection;
