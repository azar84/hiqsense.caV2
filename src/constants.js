const TEAM_MEMBERS = [
  {
    id: "m1",
    image: "/assets/about-us/azar.png",
    description: "/assets/about-us/azar_description.png",
  },
  {
    id: "m2",
    image: "/assets/about-us/kei.png",
    description: "/assets/about-us/kei_description.png",
  },
  {
    id: "m3",
    image: "/assets/about-us/alexy.png",
    description: "/assets/about-us/alexy_description.png",
  },
  {
    id: "m4",
    image: "/assets/about-us/lara.png",
    description: "/assets/about-us/lara_description.png",
  },
];
const features = [
  {
    id: "f1",
    title: "Commitment to Creativity",
    image: "/assets/about-us/feature-icon-1.png",
    text: "Commitment to Creativity",
  },
  {
    id: "f2",
    title: "Client Satisfaction",
    image: "/assets/about-us/feature-icon-2.png",
    text: "Client Satisfaction",
  },
  {
    id: "f3",
    title: "Digital Trends",
    image: "/assets/about-us/feature-icon-3.png",
    text: "Digital Trends",
  },
];

const services = [
  {
    id: "s1",
    title: "A Decade of Expertise",
    image: "/assets/about-us/decade.svg",
    text: "A Decade of Expertise",
  },
  {
    id: "s2",
    title: "Innovative Design",
    image: "/assets/about-us/clean.svg",
    text: "Innovative Design",
  },
  {
    id: "s3",
    title: "Client-Centric Approach",
    image: "/assets/about-us/protection.svg",
    text: "Client-Centric Approach",
  },
];

const pricing_plans = [
  {
    id: "p1",
    title: "Web Design",
    packageName: "Startup Package",
    price: "$1500 CAD",
    image: "/assets/pricing/ellipse.png",
    offers: [
      {
        id: "o1",
        text: "Free Domain Name - 1 Year",
      },
      {
        id: "o2",
        text: "5-Static Pages Web Design",
      },
      {
        id: "o3",
        text: "Free Hosting - 1 Year",
      },
      {
        id: "o5",
        text: "5 Business Email Accounts",
      },
      {
        id: "o6",
        text: "CMS to Manage Contents",
      },
      {
        id: "o7",
        text: "1 Month Free Support After Launch",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Domain",
        content: "Free Domain Name for 1 Year",
      },
      {
        id: "f2",
        title: "SSL Certificate",
        content: "Increase Securty with SSL",
      },
      {
        id: "f3",
        title: "Hosting",
        content: "Free Hosting for One Year",
      },
      {
        id: "f4",
        title: "Email",
        content: "Professional Business Emails",
      },
    ],
  },
  {
    id: "p2",
    title: "Web Design",
    packageName: "E-Commerce Package",
    price: "$3000 CAD",
    image: "/assets/pricing/ellipse2.png",
    offers: [
      {
        id: "o1",
        text: "Free Domain Name - 1 Year",
      },
      {
        id: "o2",
        text: "Fully Functional E-Commerce with Admin Portal",
      },
      {
        id: "o3",
        text: "Online Payment Integration",
      },
      {
        id: "o4",
        text: "Free Hosting - 1 Year",
      },
      {
        id: "o5",
        text: "5 Business Email Accounts",
      },

      {
        id: "o6",
        text: "Custom UI Design for Shopping Experience",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Domain",
        content: "Free Domain Name for 1 Year",
      },
      {
        id: "f2",
        title: "SSL Certificate",
        content: "Increase Securty with SSL",
      },
      {
        id: "f3",
        title: "Shopping Cart",
        content: "Magento or Woocommerce",
      },
      {
        id: "f4",
        title: "Payment",
        content: "Online Payment Integration",
      },
      {
        id: "f5",
        title: "Email",
        content: "Obtain 5 Business Email Accounts",
      },
    ],
  },
  {
    id: "p3",
    title: "Graphic Design",
    packageName: "Corporate Branding Package",
    price: "$500 CAD",
    image: "/assets/pricing/ellipse3.png",
    offers: [
      {
        id: "o1",
        text: "Logo Design",
      },
      {
        id: "o2",
        text: "Social Media Kit",
      },
      {
        id: "o3",
        text: "3 Concepts",
      },
      {
        id: "o4",
        text: "Stationary Design",
      },
      {
        id: "o5",
        text: "Extensive Brand Guidelines",
      },
      {
        id: "o6",
        text: "All Editable and Source Files",
      },
      {
        id: "o7",
        text: "3D mockups",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Logo",
        content: "We’ll Craft Your Own Logo",
      },
      {
        id: "f2",
        title: "Social Media",
        content: "Access to Social Media Kit",
      },
      {
        id: "f3",
        title: "3 Concepts",
        content: "Provides 3 Design Concepts",
      },
      {
        id: "f4",
        title: "Design",
        content: "With Stationary Design",
      },
      {
        id: "f4",
        title: "3d Mockups",
        content: "Visualize Your Branding",
      },
    ],
  },
  {
    id: "p4",
    title: "SEO",
    packageName: "Take Your Business to the Next Level with Business Plan.",
    price: "$1000 CAD",
    image: "/assets/pricing/Pattern.png",
    offers: [
      {
        id: "o1",
        text: "Site Audit",
      },
      {
        id: "o2",
        text: "Research Keywords",
      },
      {
        id: "o3",
        text: "Title Optimization",
      },
      {
        id: "o4",
        text: "Meta Description",
      },
      {
        id: "o5",
        text: "Site Map for Search Engines",
      },
    ],
    features: [
      {
        id: "f1",

        title: "Audit",
        content: "Ensure Clear Page Auditing",
      },
      {
        id: "f2",
        title: "Keywords",
        content: "Dive to Market Research",
      },
      {
        id: "f3",
        title: "Title",
        content: "Provides Title Optimization",
      },
      {
        id: "f4",
        title: "Meta",
        content: "Meta Description Optimization",
      },
      {
        id: "f5",
        title: "Site Map",
        content: "Provides Site Map for Search Engines",
      },
    ],
  },
];

const faq_questions = [
  {
    id: "s1",
    title: "Web Designs",
    questions: [
      {
        id: "a1",
        title: "What web design services does Hiqsense Smart Systems offer?",
        answer:
          "Hiqsense specializes in a range of web design services including custom website design, responsive web design, e-commerce website development, content management systems (CMS), user interface (UI) and user experience (UX) design, and website maintenance and support.",
      },
      {
        id: "a2",
        title: "How does the design process work?",
        answer:
          "Our design process begins with understanding your business goals and target audience. We then create a conceptual design, which upon your approval, is developed into a fully functional website. We involve our clients at each stage for feedback and revisions to ensure the final product meets their expectations.",
      },
      {
        id: "a3",
        title: "Web Design questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a4",
        title: "Web Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a5",
        title: "Web Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a6",
        title: "Web Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s2",
    title: "Graphic Designs",
    questions: [
      {
        id: "a7",
        title: "What type of graphic design services does Hiqsense provide?",
        answer:
          "Hiqsense offers a wide range of graphic design services including corporate identity creation, logo design, stationery design, brochure and flyer design, infographics, and custom illustrations. Our designs are tailored to enhance your brand's visual appeal and communication.",
      },
      {
        id: "a8",
        title: "Can Hiqsense help with rebranding my company?",
        answer:
          "Absolutely! We specialize in corporate rebranding. Our team can revamp your existing brand elements or create an entirely new brand identity, aligning with your company’s evolution and future direction.",
      },
      {
        id: "a9",
        title: "Graphic Design questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a10",
        title: "Graphic Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a11",
        title: "Graphic Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a12",
        title: "Graphic Design questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s3",
    title: "SEO Optimization",
    questions: [
      {
        id: "a13",
        title: " What SEO services does Hiqsense provide?",
        answer:
          "Hiqsense offers comprehensive SEO services that include keyword research and optimization, on-page SEO, off-page SEO (such as backlink building), technical SEO to improve website structure and performance, content creation for SEO, and local SEO strategies for businesses looking to enhance their local market presence.",
      },
      {
        id: "a14",
        title:
          "How does Hiqsense improve our website’s ranking on search engines?",
        answer:
          "We employ a multi-faceted approach to improve your website's ranking. This includes optimizing website content with relevant keywords, enhancing website speed and user experience, building quality backlinks, and ensuring your site is easily crawlable by search engine bots. We also stay updated with the latest search engine algorithms to refine our strategies.",
      },
      {
        id: "a15",
        title: "SEO questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a16",
        title: "SEO questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a17",
        title: "SEO questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a18",
        title: "SEO questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s4",
    title: "Email Hosting",
    questions: [
      {
        id: "a19",
        title: "Email Hosting questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a20",
        title: "Email Hosting questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a21",
        title: "Email Hosting questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a22",
        title: "Email Hosting questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a23",
        title: "Email Hosting questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a24",
        title: "Email Hosting questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
  {
    id: "s5",
    title: "Others",
    questions: [
      {
        id: "a25",
        title: "Other questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a26",
        title: "Other questions",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a27",
        title: "Other questionse?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a28",
        title: "Other questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a29",
        title: "Other questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        id: "a30",
        title: "Other questions?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
    ],
  },
];

const legal_information = [
  {
    id: "l1",
    title: "Terms and \n Conditions",
    content: [
      {
        id: "p1",
        text: `Last Updated: March 1, 2024
  `,
      },
      {
        id: "p2",
        text: `Welcome to Hiqsense Smart Systems LTD ("Hiqsense," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms. If you do not agree with any part of these Terms, you may not use our website.`,
      },
      {
        id: "p3",
        text: `1. Use of Website:`,
      },
      {
        id: "p4",
        text: `- You must be of legal age in your jurisdiction to use our website. By using our website, you represent and warrant that you meet the legal age requirement.
  `,
      },
      {
        id: "p5",
        text: `- You agree to use our website only for lawful purposes and in accordance with these Terms.`,
      },
      {
        id: "p6",
        text: `2.Intellectual Property:`,
      },
      {
        id: "p7",
        text: `- The content, design, and layout of our website are owned by Hiqsense and protected by Canadian copyright and other intellectual property laws.`,
      },
      {
        id: "p8",
        text: `You may not use, reproduce, modify, distribute, or republish any content from our website without our prior written consent.`,
      },
      {
        id: "p9",
        text: `3. User Content`,
      },
      {
        id: "p10",
        text: `By submitting any content (e.g., comments, reviews) to our website, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in any form, media, or technology.`,
      },
      {
        id: "p11",
        text: `4. Disclaimer of Warranties:`,
      },
      {
        id: "p12",
        text: `- Our website and services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
      },
      {
        id: "p13",
        text: `- We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
      },
      {
        id: "p14",
        text: `5. Limitation of Liability:`,
      },
      {
        id: "p15",
        text: `- In no event shall Hiqsense be liable for any indirect, consequential, incidental, special, punitive, or exemplary damages arising out of or in connection with your use of our website or services.`,
      },
      {
        id: "p16",
        text: `6. Governing Law:`,
      },
      {
        id: "p17",
        text: `- These Terms shall be governed by and construed in accordance with the laws of Saskatchewan, without regard to its conflict of law provisions.`,
      },
      {
        id: "p18",
        text: `7. Changes to Terms:`,
      },
      {
        id: "p19",
        text: `- We reserve the right to modify or update these Terms at any time. The updated Terms will be posted on our website with the "Last Updated" date. Your continued use of our website after any such changes constitutes your acceptance of the new Terms.`,
      },
      {
        id: "p20",
        text: `8. Contact Us:`,
      },
      {
        id: "p21",
        text: `If you have any questions or concerns about these Terms, please contact us at info@hiqsense.ca.`,
      },
      {
        id: "p22",
        text: `By using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms, you may not use our website.`,
      },
    ],
  },

  {
    id: "l2",
    title: "Privacy Policy",
    content: [
      {
        id: "p1",
        text: `Effective Date: March 1, 2024`,
      },
      {
        id: "p2",
        text: ` Hiqsense Smart Systems LTD ("Hiqsense," "we," "our," or "us") is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and protect personal information obtained through our website and services.`,
      },
      {
        id: "p3",
        text: `1. Information We Collect:`,
      },
      {
        id: "p4",
        text: `- Personal Information: We may collect personal information such as name, email address, phone number, and other contact details when voluntarily provided by users.  `,
      },
      {
        id: "p5",
        text: `- Usage Information: We may collect non-personal information about users' interactions with our website and services, such as IP address, browser type, device information, and browsing behavior.`,
      },
      {
        id: "p6",
        text: `- Cookies: We may use cookies and similar technologies to enhance user experience, analyze trends, and personalize content. Users can manage cookie preferences through their browser settings.
`,
      },
      {
        id: "p7",
        text: `2. How We Use Information:`,
      },
      {
        id: "p8",
        text: `- Personalization: We use collected information to personalize user experience, tailor content, and provide relevant recommendations.`,
      },
      {
        id: "p9",
        text: `- Communication: We may use contact information to respond to inquiries, send updates, promotions, and other communications.`,
      },
      {
        id: "p10",
        text: `- Analytics: We use usage information for analytics purposes, such as measuring website performance, analyzing trends, and improving our services.`,
      },
      {
        id: "p11",
        text: `3. Information Sharing:`,
      },
      {
        id: "p12",
        text: `- Third-Party Service Providers: We may share information with trusted third-party service providers to facilitate website operation, data analysis, and other business functions.`,
      },
      {
        id: "p13",
        text: `4. Data Security:`,
      },
      {
        id: "p14",
        text: `- We implement security measures to protect personal information from unauthorized access, disclosure, alteration, or destruction.`,
      },
      {
        id: "p15",
        text: `- However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security of user information.`,
      },
      {
        id: "p16",
        text: `5. User Choices:`,
      },
      {
        id: "p17",
        text: `- Users may choose to provide or withhold certain information, but this may affect their ability to access certain features or services.`,
      },
      {
        id: "p19",
        text: `6. Children's Privacy:`,
      },
      {
        id: "p20",
        text: `- Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children.`,
      },
      {
        id: "p21",
        text: `7. Updates to Privacy Policy:`,
      },
      {
        id: "p22",
        text: `- We may update this Privacy Policy periodically. Users will be notified of any material changes via email or by prominently posting a notice on our website.`,
      },
      {
        id: "p23",
        text: `8. Contact Us:`,
      },
      {
        id: "p24",
        text: `- For questions or concerns regarding this Privacy Policy or our data practices, users may contact us at info@hiqsense.ca.`,
      },
      {
        id: "p25",
        text: `By using our website and services, users consent to the collection, use, and disclosure of information as described in this Privacy Policy.`,
      },
    ],
  },
];

export { features, services, pricing_plans, faq_questions, legal_information };
export default TEAM_MEMBERS;
