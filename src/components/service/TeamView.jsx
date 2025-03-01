import { useState, useEffect } from "react";
import { HashLink as Link} from "react-router-hash-link";
// eslint-disable-next-line no-undef
const imagePath = `${process.env.REACT_APP_PUBLIC_URL}/assets/images/service_img/teamview/teamview.png`;

const TeamView = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animatedTeamView');
      const position = element.getBoundingClientRect();
      
      // Check if element is within viewport
      if (position.top > 0 && position.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    // Trigger once on load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative overflow-hidden h-full w-full bg-teamview">
      <div id="animatedTeamView" className="inset-0 h-full w-full bg-[linear-gradient(to_right,#150a2d_4px,transparent_4px),linear-gradient(to_top,#150a2d_4px,transparent_4px)] bg-[size:80px_80px] flex">
        <div className="w-full justify-center pb-10 sm:px-4 md:px-8 lg:px-10 xl:px-16 max-w-10xl flex flex-col-reverse items-center lg:flex-row md:flex-row sm:flex-row sm:items-center pt-6">
          <div  className={`flex flex-col px-2 text-white lg:gap-y-8 md:gap-y-4 sm:gap-y-2 gap-y-1 ${isVisible ? 'animate-slideRight' : 'translate-x-full'}`}>
            <h3 className="font-ebgaramond lg:text-custom-large md:text-[28px] sm:text-[24px] text-[22px] w-full lg:leading-[64px] md:leading-[48px] sm:leading-[32px] text-center md:text-left sm:text-left">We have the Pinnacle Pioneers: Our Multifaceted Team of Digital Architects</h3>
            <p className="font-opensanshebrew text-center md:text-custom-regular sm:text-[14px] text-[12px] sm:text-left">
              Our Pinnacle Pioneers bring a wealth of knowledge, creativity, and innovation to the table, ensuring that every project is not just a success but a groundbreaking testament to digital excellence
            </p>
            <Link to = "/about"> 
            <button className="grow justify-center px-6 mt-1 py-2.5 font-bold tracking-normal whitespace-nowrap bg-red-500 rounded max-md:px-5 md:w-[165px]">
              View Our Team
            </button>
            </Link>
          </div>
          <div className={`transition-transform duration-500 ${isVisible ? 'animate-slideLeft' : 'translate-x-full'}`}>
            <img alt="service hero image" src={imagePath} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamView;
