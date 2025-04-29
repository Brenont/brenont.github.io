import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "feat-ou-beat",
    companyName: "Feat ou Beat",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Leading the build of the platform from the start. At Feat ou Beat, Musicians can connect, create, and collaborate with others.",
    websiteLink: "https://featoubeat.com.br/",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Supabase",
      "AWS"
    ],
    startDate: new Date("2024-10-08"),
    endDate: new Date(),
    companyLogoImg: "/experience/featoubeat/logo.svg",
    pagesInfoArr: [
      // {
      //   title: "Landing Page",
      //   description:
      //     "Modern and responsive landing page showcasing company services and portfolio",
      //   imgArr: [],
      // },
      // {
      //   title: "Custom PDF Reader and optimizer",
      //   description:
      //     "Specialized PDF viewer with optimization features for improved performance and user experience",
      //   imgArr: ["/experience/builtdesign/pdf_opt.webp"],
      // },
      // {
      //   title: "Clients Dashboard",
      //   description:
      //     "Comprehensive client portal with project tracking, document management, and communication tools",
      //   imgArr: [
      //     // "/experience/builtdesign/cli_dashboard_1.webp",
      //     // "/experience/builtdesign/cli_dashboard_2.webp",
      //     // "/experience/builtdesign/cli_dashboard_3.webp",
      //   ],
      // },
      // {
      //   title: "Admin Dashboard",
      //   description:
      //     "Powerful administrative interface for managing users, projects, and system settings",
      //   imgArr: ["/experience/builtdesign/logo.png"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        // "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        // "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        // "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        "Connecng the business side with the dev team.",
        "Building scalable web applicaons for arst's networks.",
        "Definion of technologies and project structure to have a scalable project.",
      ],
    },
  },
  {
    id: "nobueno",
    companyName: "NoBueno",
    type: "Professional",
    category: ["Mobile Dev", "Frontend"],
    shortDescription:
      "Developed scalable apps for the hiring industry at NoBueno, including a translation feature for English, French, and Arabic.",
    websiteLink: "https://nobueno.com/",
    techStack: ["React Native", "Angular", "Typescript", "Node.js"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/experience/nobueno/logo.svg",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "At NoBueno, I contributed to scalable applications for the hiring industry, building crucial features such as translation functionality supporting English, French, and Arabic.",
        "Worked closely with the team based in Dubai to ensure high-quality production deployments."
      ],
      bullets: [
        "Built a translation feature for multi-language support.",
        "Worked on scalable apps currently in production.",
        "Collaborated with international teams to deliver top-quality apps."
      ],
    },
  },
  {
    id: "branding-brand",
    companyName: "Branding Brand",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Developed and maintained large-scale React Native and Node.js apps, improving accessibility and UX for clients across the U.S.",
    websiteLink: "",
    techStack: ["React Native", "Redux", "Typescript", "Node.js", "React"],
    startDate: new Date("2021-10-01"),
    endDate: new Date("2022-10-01"),
    companyLogoImg: "/experience/brandingbrand/logo.png",
    pagesInfoArr: [
      {
        title: "Country Road App",
        description: "iOS/Android app for Australian fashion brand Country Road.",
        imgArr: [
          // "https://apps.apple.com/au/app/country-road-since-1974/id1631154696",
          // "https://play.google.com/store/apps/details?id=com.countryroad.mobileapp"
        ],
      },
      {
        title: "BJ's Wholesale Club App",
        description: "Large-scale shopping app for BJ's Wholesale Club.",
        imgArr: [
          // "https://apps.apple.com/us/app/bjs-wholesale-club/id1287596508",
          // "https://play.google.com/store/apps/details?id=com.brandingbrand.reactnative.and.bjs"
        ],
      },
      {
        title: "Related Connect and Related 360 Life Apps",
        description: "Commercial and residential apps for Related Companies, Hudson Yards NY.",
        imgArr: [
          // "https://apps.apple.com/us/app/related-connect/id1436638900",
          // "https://play.google.com/store/apps/details?id=com.relatedcompanies.relatedconnect",
          // "https://apps.apple.com/us/app/related-360-life/id1559044467",
          // "https://play.google.com/store/apps/details?id=com.relatedcompanies.relatedoffice"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Branding Brand, I worked on development and maintenance of React Native and Node.js applications for large U.S. companies.",
        "Emphasized best practices including accessibility improvements, user experience enhancements, and scalable system design following SOLID principles."
      ],
      bullets: [
        "Developed large-scale mobile apps deployed to App Store and Google Play.",
        "Applied accessibility best practices to enhance UX.",
        "Practiced DRY and SOLID principles to ensure maintainable codebases."
      ],
    },
  },
  {
    id: "globo",
    companyName: "Globo TV",
    type: "Professional",
    category: ["Frontend"],
    shortDescription:
      "Built a web application for Globo, the second-largest TV network worldwide, delivering continuous value and quality.",
    websiteLink: "https://en.wikipedia.org/wiki/TV_Globo",
    techStack: ["React", "Next.js", "Redux", "Styled Components", "HTML", "CSS"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-08-01"),
    companyLogoImg: "/experience/globo/logo.svg",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "At Globo, I was part of the initial development of a key web application, ensuring code quality through consistent reviews and feature deliveries.",
        "Worked with a high-performing team focused on value delivery and clean architecture."
      ],
      bullets: [
        "Developed and maintained a major Globo web application from scratch.",
        "Engaged in rigorous code review processes to maintain high quality.",
        "Delivered continuous improvements and new features for high-traffic web platforms."
      ],
    },
  },
  {
    id: "storm-development",
    companyName: "Storm Group",
    type: "Professional",
    category: ["Frontend", "Full Stack"],
    shortDescription:
      "Worked on diverse products at Storm, rapidly growing technical skills and adopting ownership mentality.",
    websiteLink: "https://stormgroup.com.br/",
    techStack: [
      "React", "Next.js", "Redux", "React Native", "React Admin",
      "Styled Components", "HTML", "CSS", "SASS"
    ],
    startDate: new Date("2020-03-01"),
    endDate: new Date("2021-08-01"),
    companyLogoImg: "/experience/stormgroup/logo.webp",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "At Storm, I developed various types of web and mobile products, sharpening my technical abilities and cultivating strong soft skills.",
        "Taking ownership of development tasks and regularly presenting new features to clients boosted my understanding of professional software practices."
      ],
      bullets: [
        "Worked on multiple web and mobile products with modern front-end technologies.",
        "Practiced weekly client presentations to ensure transparency and client engagement.",
        "Developed SEO-optimized blogs and CMS systems using React Admin and Next.js."
      ],
    },
  },
  {
    id: "conect-edu",
    companyName: "Conect+Edu",
    type: "Professional",
    category: ["Frontend"],
    shortDescription:
      "Built ConectEdu, a large-scale school platform used by hundreds of schools and 500k+ users in Brazil.",
    websiteLink: "",
    techStack: ["Angular", "Typescript", "RxJS", "HTML", "CSS", "SASS"],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-03-01"),
    companyLogoImg: "/experience/conectedu/logo.svg",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "At TechDog Solutions, I was responsible for developing ConectEdu, a major school platform that connects teachers, principals, students, and parents.",
        "The platform is widely adopted across Brazil and serves over 500,000 users."
      ],
      bullets: [
        "Built ConectEdu platform from scratch using Angular and Typescript.",
        "Integrated complex features to connect various roles in the school system.",
        "Contributed to a product impacting hundreds of schools across Brazil."
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);

