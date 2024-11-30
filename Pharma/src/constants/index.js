import {
  // people01,
  // people02,
  // people03,
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
  // logo1,
  med1,
  med2,
  med3,
  med4,
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
  {
    id: 4,
    label: "Our Services",
    to: "/Service",
    icon: "fa-solid fa-chart-line",
  },
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
    name: "Helen Tesfaye",
    title: "Healthcare Advocate",
    // img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Partnering with M HELZ Trading has elevated our pharmaceutical standards and strengthened global collaborations in healthcare.",
    name: "Blen Alemu",
    title: "Pharmacy Manager",
    // img: people03,
  },
  {
    id: "feedback-3",
    content:
      "M HELZ Trading's commitment to delivering safe and effective medications has revolutionized the pharmaceutical landscape in Ethiopia.",
    name: " Edil",
    title: "Medical Specialist",
    // img: people02,
  },
];
export const ImportPro = [
  {
    id: 1,
    name: "Medicines",
    img: "./src/assets/Import/med1.jpg",
    description: "Lorem Ipsum",
  },
  {
    id: 2,
    name: " Medical equipments and devices",
    img: "./src/assets/Import/MedicalEquiment.jpg",
    description: "Sed Curus",
  },
  {
    id: 3,
    name: "Medical supplies",
    img: "./src/assets/Import/Medical supplies.jpg",
    description: "Nulla Quis",
  },
  {
    id: 4,
    name: " Medical furniture",
    img: "./src/assets/Import/Medical furniture.jpg",
    description: "Lorem Ipsum",
  },
  {
    id: 5,
    name: "Vaccines",
    img: "./src/assets/Import/Vaccines.jpg",
    description: "Sed Curus",
  },
  {
    id: 6,
    name: " Cosmetic products",
    img: "./src/assets/Import/Cosmetic products.jpg",
    description: "Nulla Quis",
  },
  {
    id: 7,
    name: "  Formula milk",
    img: "./src/assets/Import/Cosmetic products.jpg",
    description: "Nulla Quis",
  },
];
export const ExportPro = [
  {
    id: 1,
    name: "Coffe",
    img: "./src/assets/Import/med1.jpg",
    description: "Lorem Ipsum",
  },
  {
    id: 1,
    name: "spices",
    img: "./src/assets/Import/med1.jpg",
    description: "Lorem Ipsum",
  },
  {
    id: 1,
    name: "cereals",
    img: "./src/assets/Import/med1.jpg",
    description: "Lorem Ipsum",
  },
];
export const Medicines = [
  {
    id: "med-1",
    name: "Paracetamol (Tylenol)",
    details: "sdlkjflksdjf",
    contact: "0911615712",
    img: med1,
  },
  {
    id: "med-2",
    contact: "0987656789",
    details: "sdlkjflksdjf",
    name: "TYLENOL ",
    img: med2,
  },
  {
    id: "med-3",
    contact: "0987654345",
    details: "sdlkjflksdjf",
    name: "Amoxicillin ",
    img: med3,
  },
  {
    id: "med-4",
    contact: "0987654345",
    details: "sdlkjflksdjf",
    name: "Amoxicillin",
    img: med4,
  },
];
export const MoreInfoMedicines = [
  {
    id: "med-1",
    name: "Paracetamol (Tylenol)",
    // img: logo1,
    contact: "0987654356",
  },
  {
    id: "med-2",
    name: "Ibuprofen (Advil, Motrin) ",
    details: "kdfsjflksj",
    // img: logo1,
    contact: "0987654356",
  },
  {
    id: "med-3",
    name: "Aspirin ",
    // img: logo1,
    details: "kdlsjflksdj",
    contact: "0987654356",
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
