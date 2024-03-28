import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../components/images/Logo.png";
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
function FeatureItem({ children }) {
  return (
    <div className="flex gap-2 py-0.5">
      <CheckIcon />
      <div>{children}</div>
    </div>
  );
}
const features = [
  { id: 1, text: "Web Design" },
  { id: 2, text: "Logo and Graphic Design" },
  { id: 3, text: "SEO Optimization" },
  { id: 4, text: "Email Hosting" },
];
const navItems = [
  { text: "About Us", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "Contact Us", link: "/contact" },
];
const socialIcons = [
  {
    id: 1,
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/hiqsense",
  },
  {
    id: 2,
    icon: <TwitterIcon />,
    link: "https://twitter.com/hiqsense",
  },
  {
    id: 3,
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/hiqsense",
  },
  {
    id: 4,
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/hiqsense",
  },
  {
    id: 5,
    icon: <GoogleIcon />,
    link: "https://maps.app.goo.gl/ZTsAAuCNpNugemVVA",
  },
];
const legalItems = [
  { text: "Privacy Policy", link: "/privacy" },
  { text: "Terms of Use", link: "/terms" },
];

export default function MyFooter() {
  const handleGetInTouch = () => {
    window.location.replace("/contact");
  };
  const handleAboutUs = () => {
    window.location.replace("/about");
  };
  const handleNavItemClick = (link) => {
    window.location.href = link;
  };
  const handleSocialIconClick = (link) => {
    window.open(link, "_blank");
  };
  const handleLegalItemClick = (link) => {
    window.location.href = link;
  };
  return (
    <footer className="flex flex-col ">
      <div className="flex flex-col items-center px-16 pb-6  w-full bg-violet-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex z-10 flex-col mt-0 w-full max-w-[1200px] max-md:max-w-full">
          <div className="flex flex-row px-5 py-12 rounded-xl max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col grow text-white w-[65%] max-md:mt-10 max-md:max-w-full">
              <h2 className="text-2xl font-bold max-md:max-w-full">
                Start Building your Business Today
              </h2>
              <div className="flex gap-5 justify-between pr-8 mt-4 text-base max-md:flex-wrap max-md:pr-5">
                {features.map((feature) => (
                  <FeatureItem key={feature.id}>{feature.text}</FeatureItem>
                ))}
              </div>
            </div>
            <div className="flex gap-4 items-start mt-2.5 text-sm font-bold tracking-normal leading-5 w-[35%] max-md:mt-10 max-sm:flex max-sm:flex-col max-sm:my-auto">
              <button
                className="grow justify-center px-9 py-2.5 w-full text-sm text-white rounded border border-white border-solid max-md:px-5 max-sm:px-2.5 max-sm:text-xs"
                onClick={handleGetInTouch}
              >
                Get in Touch
              </button>
              <button
                className="justify-center px-9 py-2.5 w-full text-sm bg-red-500 rounded text-stone-50 max-md:px-5 max-sm:px-2.5 max-sm:text-xs"
                onClick={handleAboutUs}
              >
                About Us
              </button>
            </div>
          </div>
          <div className="flex gap-5 mt-24 text-2xl font-bold text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src={logo}
              alt="Hiqsense Smart Sysytems"
              className="aspect-[7.69] w-[380px]"
            />
            <div className="flex-auto self-end mt-8 ml-auto text-right max-sm:mx-auto max-sm:text-center">
              Let s do it!
            </div>
          </div>
          <nav className="flex gap-5 justify-between items-start mt-6 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full max-sm:mx-auto">
            <ul className="flex gap-5 justify-between self-end mt-7 text-lg tracking-wide leading-5 text-stone-50 max-sm:mx-auto">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="max-sm:text-xs cursor-pointer"
                  onClick={() => handleNavItemClick(item.link)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 self-start">
              {socialIcons.map((socialIcon) => (
                <div
                  key={socialIcon.id}
                  className="cursor-pointer text-white"
                  onClick={() => handleSocialIconClick(socialIcon.link)}
                >
                  {socialIcon.icon}
                </div>
              ))}
            </div>
          </nav>
          <div className="flex gap-5 mt-5 w-full text-white max-md:flex-wrap max-md:max-w-full">
            <ul className="flex gap-5 text-lg">
              {legalItems.map((item) => (
                <li
                  key={item.text}
                  className="flex-auto max-sm:text-xs cursor-pointer"
                  onClick={() => handleLegalItemClick(item.link)}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex-auto my-auto text-sm font-light">
              © 2024 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
