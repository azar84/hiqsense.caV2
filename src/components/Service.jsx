import Content from "./service/Content";
import Hero from "./service/Hero";
import OfferingSection from "./service/OfferingSection";
import TeamView from "./service/TeamView";
import SEO from "./SEO";

const Service = () => {
  return (
    <div className="w-full">
      <SEO
        title="Hiqsense | Services | Enhancing Your Business Through
        Technology"
        description="Explore the wide range of services offered by Hiqsense Smart Systems,
        your go-to web design and technology partner in Saskatoon. From innovative web design to strategic SEO optimization
        , impactful graphic design, reliable email hosting, and comprehensive IT support, 
        we provide tailored solutions for small businesses in Canada.
         Discover how our services can transform and grow your business with technology that's both advanced and affordable."
        canonical="https://hiqsense.ca/services"
        name="Hiqsense Smart Systems LTD"
        type="article"
      />

      <Hero />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <OfferingSection />
        </div>
      </div>
      <TeamView />
      <Content />
    </div>
  );
};

export default Service;
