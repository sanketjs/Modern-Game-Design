import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
     
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
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
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Earn Experince",
    "Earn Gold",
    "Earn Medal",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "DESTROY THE BASE",
      text: "The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.",
      date: "May 2024",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "CLEAR THE PATH",
      text: "Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defense structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.",
      date: "May 2023",
      status: "Slay",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "TAKE ON THE JUNGLE",
      text: "In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "POWER UP YOUR CHAMP",
      text: "Champions get stronger by earning experience to level up and gold to buy more powerful items as the game progresses. Staying on top of these two factors is crucial to overpowering the enemy team and destroying their base.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift";
  
  export const collabContent = [
    {
      id: "0",
      title: "Slay With Style",
      text: collabText,
    },
    {
      id: "1",
      title: "Multiple way to play",
    },
    {
      id: "2",
      title: "More to Discover",
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
      description: "Enhancing Daily Rewards",
      price: "0",
      features: [
        "Power Up your skills ",
        "Get extra emblems daily",
        "free Avatar border for one month",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "New Heroes Unlocked",
      price: "9.99",
      features: [
        "Power Up your skills ",
        "Get extra emblems daily",
        "free Avatar border for one month",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Get Help",
      price: null,
      features: [
        "Power Up your skills ",
        "Get extra emblems daily",
        "free Avatar border for one month",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Naafiri",
      text: "We track for a thousand years. None can flee for that long.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Aatrox",
      text: "I exist across realms, in the space between lightning’s strike and thunder’s call, the true balance within the storm.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Shen",
      text: "The Eye is blind to fear, to hate, to love – to all things that would sway equilibrium.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Gangplank",
      text: "I was cutting throats and sinking Noxian war galleys when you were still pissing your britches, boy. You don’t want to take me on.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Katrina",
      text: "'Never question my loyalty. You will never know what I endure for it.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Swain",
      text: "I have learned enough to detest all men. Only nations may be revered",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];