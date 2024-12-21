// data.ts



export const cardData = [
  {
    title: "Personal Information removal",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    buttonTitle: "Explore More",
    buttonHref: "/",
    icon: "/images/personal-icon.svg",
  },
  {
    title: "Cloaking Alias Profiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    buttonTitle: "Explore More",
    buttonHref: "/",
    icon: "/images/personal-icon.svg",
  },
  {
    title: "Virtual identities Security",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    buttonTitle: "Explore More",
    buttonHref: "/",
    icon: "/images/personal-icon.svg",
  },
];


// feature data
// data.ts
export const featureData = [
  {
    id: 1,
    title: "Protect Personal Information",
    icon: "FaAnglesDown",
    backgroundColor: "bg-blue-400", // Tailwind background color class
    fromGradient:"#1E21E9",
    textColor: "#1E21E9", 
    imageSrc: "/images/protect.svg",
    imageAlt: "Protect Image",
    content: [
      {
        id: 1,
        text: "The first step involves identifying all places where your personal information might be present.",
      },
      {
        id: 2,
        text: "The second step involves securing that information from unauthorized access.",
      },
      {
        id: 3,
        text: "The third step involves regularly monitoring your personal information for security breaches.",
      },
      {
        id: 4,
        text: "The fourth step involves taking immediate action in case of any detected breach.",
      },
    ],
  },
  {
    id: 2,
    title: "Detailed Reporting",
    icon: "FaAnglesDown",
    backgroundColor: "bg-violet-300", // Different background color for this feature
    textColor: "#7950FF", 
    fromGradient:"#7950FF",
    imageSrc: "/images/secure",
    imageAlt: "Secure Data Image",
    content: [
      {
        id: 1,
        text: "Use strong passwords and multi-factor authentication to secure your accounts.",
      },
      {
        id: 2,
        text: "Keep your operating system and software up to date with the latest security patches.",
      },
      {
        id: 3,
        text: "Encrypt sensitive data before storing or sending it.",
      },
      {
        id: 4,
        text: "Use a secure VPN to protect your online activities.",
      },
    ],
  },
  {
    id: 3,
    title: "Secure Your Data",
    icon: "FaCheck",
    backgroundColor: "bg-lime-300", // Different background color for this feature
    textColor: "#098709", 
    fromGradient:"#098709 ",
    imageSrc: "/images/secure",
    imageAlt: "Secure Data Image",
    content: [
      {
        id: 1,
        text: "Use strong passwords and multi-factor authentication to secure your accounts.",
      },
      {
        id: 2,
        text: "Keep your operating system and software up to date with the latest security patches.",
      },
      {
        id: 3,
        text: "Encrypt sensitive data before storing or sending it.",
      },
      {
        id: 4,
        text: "Use a secure VPN to protect your online activities.",
      },
    ],
  },
];
