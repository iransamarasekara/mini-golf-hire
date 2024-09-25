import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  golfbg,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  portable,
  qulity,
  fun,
  aforadble,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/aboutus",
  },
  {
    id: "2",
    title: "Courses",
    url: "/courses",
  },
  {
    id: "3",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "4",
    title: "Book Now",
    url: "/booknow",
    onlyMobile: true,
  },
];

export const heroIcons = [
  {
    id: "portable",
    title: "Portable",
    text: "Our mini golf courses are portable and can be set up anywhere.",
    iconUrl: portable,
  },

  {
    id: "quality",
    title: "Quality",
    text: "We only use high-quality equipment and materials for our courses.",
    iconUrl: qulity,
  },

  {
    id: "fun",
    title: "Fun",
    text: "Our courses are designed to be fun and engaging for all ages.",
    iconUrl: fun,
  },

  {
    id: "affordable",
    title: "Affordable",
    text: "We offer competitive prices for our mini golf courses.",
    iconUrl: aforadble,
  },
];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];

// export const brainwaveServicesIcons = [
//   recording03,
//   recording01,
//   disc02,
//   chromecast,
//   sliders04,
// ];
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: golfbg,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: golfbg,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: golfbg,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: golfbg,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: golfbg,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: golfbg,
  },
];

export const special_benefits = [
  {
    id: "0",
    title: "Corporate, Fundraising, and Domestic Event Support",
    text: "We cater to a wide variety of events, from corporate functions to fundraising and private parties, ensuring a perfect mini golf experience for any occasion.",
  },
  {
    id: "1",
    title: "Custom-designed Mini Golf Courses for Hire",
    text: "Our mini golf courses are designed with flexibility in mind, tailored to meet the specific needs of your event, whether it's a small gathering or a large festival.",
  },
  {
    id: "2",
    title: "Range of Course Options (1, 2, 4, 6, and 9-hole Courses)",
    text: "We offer various course sizes to fit any space and event type, ensuring fun for both small and large groups.",
  },
  {
    id: "3",
    title: "Fun Variations: Chip Golf, Dual Golf, and Billiard Golf",
    text: "Beyond traditional mini golf, we provide exciting variations like Chip Golf, Dual Golf, and even Billiard Golf, adding unique and creative twists to the game.",
  },
  {
    id: "4",
    title:
      "Available Australia-wide through Our Network of Pre-qualified Agents",
    text: "We provide our services across the country, using a reliable network of agents in all major metro areas to ensure timely delivery and setup for your event.",
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
