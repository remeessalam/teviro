import logoImg from "./assets/logo/logo.jpeg";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {
  FaCode,
  FaRobot,
  FaPalette,
  FaCommentDots,
  FaGamepad,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";
export { logoImg };

export const companyDetails = {
  phone: "+91-7980869338",
  address:
    "Amazing towers awfis space solution pvt.ltd ecospace business park Kolkata -7001",
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=7980869338&text&type=phone_number&app_absent=0",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    position: "Operations Manager, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“The custom software that Teviro AI Technologies developed for us has completely revolutionized our internal operations. From the very beginning, their team took the time to truly understand our business and built a solution that fits perfectly with our needs. The software has not only improved our efficiency but is also flexible enough to grow with us. We’re very pleased with the result and the ongoing support we've received.”",
    service: "Custom Software Development",
  },
  {
    id: 2,
    name: "James H.",
    position: "Chief Technology Officer, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“We were looking for ways to integrate AI into our customer service to improve efficiency and enhance user experience. Teviro AI Technologies delivered exactly what we needed. Their team implemented an AI-driven chatbot that has reduced response times and handled customer queries 24/7. It’s been a game-changer for us, and we’ve seen a notable improvement in customer satisfaction since the launch.”",
    service: "AI Integration",
  },
  {
    id: 3,
    name: "Amanda S.",
    position: "Marketing Director, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“Our website was in desperate need of a makeover, and Teviro AI Technologies helped us completely transform it. They took the time to understand our target audience and designed a user-friendly, visually appealing site that enhances our customers’ experience. The results speak for themselves—we’ve seen a huge increase in user engagement and positive feedback from visitors.”",
    service: "UI/UX Design",
  },
  {
    id: 4,
    name: "David K.",
    position: "Customer Support Lead, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“We needed an automated solution to manage customer inquiries, and Teviro AI Technologies delivered with an incredibly effective chatbot. It’s smart, intuitive, and works seamlessly across our website and social media channels. Our customer support team has been able to focus on more complex tasks, while the chatbot handles the routine queries. It's been a fantastic addition to our customer service strategy.”",
    service: "Chatbot Development",
  },
  {
    id: 5,
    name: "Laura G.",
    position: "Game Producer, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“We had an idea for a mobile game, and Teviro AI Technologies turned it into reality. Their team was incredibly creative and professional throughout the entire development process. From concept to launch, they helped us refine our ideas and bring them to life with beautiful graphics and smooth gameplay. The game has been well received by users, and we couldn’t have asked for a better development partner.”",
    service: "Game Development",
  },
  {
    id: 6,
    name: "Tom R.",
    position: "CEO, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“We approached Teviro AI Technologies to help us revamp our website, and the results exceeded our expectations. The team not only created a visually stunning site, but they also focused on performance and user experience. It’s mobile-friendly, loads quickly, and is optimized for search engines. Our online traffic and conversion rates have significantly improved since the new site launched.”",
    service: "Website Development",
  },
  {
    id: 7,
    name: "Emily W.",
    position: "Sales Director, [Client Company Name]",
    img: require("./assets/images/user-icon.png"),
    desc: "“When we realized our existing CRM wasn’t meeting our needs, we turned to Teviro AI Technologies for a custom solution. Their team worked closely with us to build a CRM that is perfectly suited to our processes. It’s made managing leads, tracking customer interactions, and automating marketing efforts much easier and more efficient. The custom CRM has been an essential tool in improving our customer relationships and sales pipeline.”",
    service: "CRM Solutions",
  },
];

// all services

export const allServices = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "Tailored solutions that align with your business objectives, ensuring flexibility, security, and scalability for optimal operational efficiency.",
    icon: FaCode,
    detailContent: `We develop bespoke software solutions that are precisely tailored to meet your unique business challenges. From initial consultation to deployment and support, we handle the entire software lifecycle, ensuring reliability, adaptability, and peak efficiency.

• Strategic Alignment: Custom-built software aligned with your internal workflows and long-term goals  
• Scalable Architecture: Modular design enabling seamless upgrades and future enhancements  
• Security First: Data encryption, access controls, and secure coding practices to safeguard your systems  
• Integration Expertise: Flawless interaction with your existing infrastructure, tools, and APIs  
• Agile Development: Rapid delivery cycles with constant feedback loops for high-quality outcomes  
• Lifetime Support: Ongoing performance monitoring, updates, and feature enhancements to ensure sustainability`,
  },
  {
    id: 2,
    title: "AI Integration",
    description:
      "Harness the power of artificial intelligence to automate processes, enhance decision-making, and drive intelligent automation.",
    icon: GiArtificialIntelligence,
    detailContent: `We integrate artificial intelligence into your digital ecosystem, transforming how your business thinks and reacts. Our AI solutions automate operations, generate deep insights, and drive meaningful engagement.

• Machine Learning Models: Data-trained systems that evolve with experience to improve accuracy  
• Process Automation: AI bots managing tasks from customer service to internal operations  
• Predictive Analytics: Anticipate market trends, user behavior, and operational risks before they happen  
• Smart Chatbots: AI agents capable of understanding context and intent, offering personalized interactions  
• NLP Integration: Advanced language models that interact naturally with users in real time  
• Continuous Optimization: Feedback-driven learning engines to enhance decision-making over time`,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centric design solutions that combine aesthetics with functionality for exceptional digital experiences.",
    icon: FaPalette,
    detailContent: `Our design philosophy blends form and function to deliver experiences that are visually engaging and intuitively navigable. We create systems that users not only enjoy but trust and rely on.

• User Research: Deep discovery process to understand motivations, needs, and digital behavior  
• Journey Mapping: Comprehensive flow analysis to streamline interactions and remove friction  
• Wireframing & Prototyping: Interactive, testable blueprints that bring your ideas to life early  
• Accessibility Focus: WCAG and ADA-compliant designs ensuring usability for all audiences  
• Responsive Design: Pixel-perfect adaptation across smartphones, tablets, and desktops  
• Feedback-Driven Refinement: Iterative improvements based on real user testing and analytics`,
  },
  {
    id: 4,
    title: "Chatbot Development",
    description:
      "Intelligent conversational AI solutions that enhance customer engagement and streamline support operations.",
    icon: FaCommentDots,
    detailContent: `Our chatbot development services empower your business with AI-driven communication tools capable of providing round-the-clock support and engagement across multiple platforms.

• Natural Language Processing (NLP): Conversational bots that understand tone, intent, and slang  
• Multichannel Deployment: Operate across web, mobile apps, WhatsApp, Facebook, and more  
• Memory and Context Awareness: Bots that remember past conversations for seamless continuity  
• CRM & API Integration: Direct linkage to your business systems for real-time data retrieval  
• Custom Workflows: Tailored decision trees and logic-based paths to meet your use cases  
• Self-Learning Engine: Analytics-powered bots that improve with every interaction`,
  },
  {
    id: 5,
    title: "Game Development",
    description:
      "Immersive gaming experiences across platforms with cutting-edge graphics and engaging gameplay mechanics.",
    icon: FaGamepad,
    detailContent: `From indie games to large-scale multiplayer experiences, we build engaging and scalable gaming solutions with a strong focus on player retention and creative storytelling.

• Cross-Platform Development: Simultaneous deployment on iOS, Android, PC, and console  
• Realistic 3D Graphics: Advanced rendering with high-poly modeling, lighting, and animation  
• Game Mechanics Design: Balanced, addictive gameplay systems with progression and reward dynamics  
• Multiplayer Architecture: Robust server solutions supporting real-time competitive or cooperative play  
• VR/AR Integration: Enhanced immersion through devices like Oculus, Vive, or Hololens  
• Live Ops & Monetization: In-game events, microtransactions, and content updates for long-term revenue`,
  },
  {
    id: 6,
    title: "Website Development",
    description:
      "High-performance websites that combine stunning design with robust functionality for maximum impact.",
    icon: FaGlobe,
    detailContent: `We create powerful, responsive, and SEO-friendly websites that act as the digital front door to your brand. Whether informational or transactional, our sites convert.

• Responsive Layouts: Mobile-first design ensuring usability across all screen sizes  
• Search Engine Optimization: Schema, metadata, speed, and structure optimized for high visibility  
• E-Commerce Development: Secure online stores with intuitive navigation and payment integration  
• CMS Integration: WordPress, Shopify, or headless CMS for easy content management  
• Speed Optimization: Lazy loading, compression, and caching for sub-second page loads  
• Maintenance & Security: Regular updates, SSL, and firewalls for ongoing protection`,
  },
  {
    id: 7,
    title: "CRM Solutions",
    description:
      "Transform customer relationships with intelligent CRM systems that centralize data and automate workflows.",
    icon: FaUsers,
    detailContent: `Our CRM solutions help you build stronger relationships by centralizing customer data, automating communication, and providing actionable insights for growth.

• Unified Data Hub: Central platform to store and track all customer touchpoints  
• Sales Pipeline Automation: Efficient lead qualification, follow-ups, and deal tracking  
• Insightful Dashboards: Real-time views into customer engagement and business health  
• Marketing Campaigns: Integrated email, SMS, and social campaigns tailored to audience behavior  
• Custom Modules: Built specifically for your operations—from support tickets to loyalty rewards  
• API-Friendly Architecture: Seamless integration with third-party tools like Mailchimp, Zapier, and more`,
  },
];

// // portfolio images (web development)
// export const webPortfolio = [
//   {
//     id: 1,
//     img: require("./assets/images/web_projects/1.webp"),
//     title: "FE-Finance",
//   },
//   {
//     id: 2,
//     img: require("./assets/images/web_projects/2.webp"),
//     title: "Ocxee",
//   },
//   {
//     id: 3,
//     img: require("./assets/images/web_projects/3.webp"),
//     title: "Leaderbridge",
//   },
//   {
//     id: 4,
//     img: require("./assets/images/web_projects/4.webp"),
//     title: "Gigzio",
//   },
//   {
//     id: 5,
//     img: require("./assets/images/web_projects/5.webp"),
//     title: "FE Group",
//   },
//   {
//     id: 6,
//     img: require("./assets/images/web_projects/6.webp"),
//     title: "V Talkz",
//   },
// ];

// // portfolio images (app development)
// export const appPortfolio = [
//   {
//     id: 1,
//     img: require("./assets/images/app_projects/1.webp"),
//     title: "PartEx",
//   },
//   {
//     id: 2,
//     img: require("./assets/images/app_projects/2.webp"),
//     title: "Find A Driver",
//   },
//   {
//     id: 3,
//     img: require("./assets/images/app_projects/3.webp"),
//     title: "Artisan Express",
//   },
//   {
//     id: 4,
//     img: require("./assets/images/app_projects/4.webp"),
//     title: "House of Deliverance",
//   },
// ];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
