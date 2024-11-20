import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  logo1,
} from "../assets";

export const navLinks = [
  { id: 1, label: "Home", to: "/", icon: "fa-solid fa-chart-line" },
  { id: 2, label: "AboutUs", to: "/Aboutus", icon: "fa-solid fa-chart-line" },

  {
    id: 3,
    label: "Our Mission",
    to: "/Mission",
    icon: "fa-solid fa-chart-line",
  },
  // {
  //   id: 4,
  //   label: "Our Services",
  //   to: "/Mission",
  //   icon: "fa-solid fa-chart-line",
  // },
  {
    id: 5,
    label: "Contact us",
    to: "/MoreContactus",
    icon: "fa-solid fa-chart-line",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Integrity",
    content:
      "Integrity: Upholding the highest ethical standards in all our dealings.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Quality",
    content:
      "Ensuring that every product meets stringent quality requirements.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Collaboration",
    content:
      "Building lasting partnerships with manufacturers and stakeholders.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Access to quality pharmaceuticals has transformed healthcare for our community, ensuring better health outcomes and a brighter future.",
    name: "Dr. Helen Tesfaye",
    title: "Healthcare Advocate",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Partnering with M HELZ Trading has elevated our pharmaceutical standards and strengthened global collaborations in healthcare.",
    name: "Blen Alemu",
    title: "Pharmacy Manager",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "M HELZ Trading's commitment to delivering safe and effective medications has revolutionized the pharmaceutical landscape in Ethiopia.",
    name: "Dr. Edil Worku",
    title: "Medical Specialist",
    img: people02,
  },
];

export const Medicines = [
  {
    id: "med-1",
    title: "Paracetamol (Tylenol)",
    value: "3800+",
    image: logo1,
  },
  {
    id: "med-2",
    title: "Ibuprofen (Advil, Motrin) ",
    value: "230+",
  },
  {
    id: "med-3",
    title: "Aspirin ",
    value: "30+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
