export const workData = [
  {
    imageUrl: "/media/images/fotonvr_light.png",
    title: "fotonVR",
    description:
      "FotonVR Platform — A fully dynamic & multi-domain website builder for FotonVR and their sub-brands.I built a custom CMS from scratch that allows the team to launch multiple websites under one core system, manage  content, and handle user permissions with secure role-based access.This platform is running in production and powers real marketing sites + product sites without requiring dev involvement.",
    link: "https://fotonvr.com/",
    technologies: ["Next JS", "Tailwind CSS","MongoDB","JWT Token","Sun Editor"],
  },
  {
    imageUrl: "/media/images/the-elite-world.png",
    title: "The Elite World",
    description:
      "The Elite World is a visa portfolio project designed to showcase global opportunities in a structured and visually appealing way. Built with Next.js and Tailwind CSS, it delivers a fast, responsive, and modern user experience. The design is crafted in Figma, ensuring a clean and intuitive interface.",
    link: "https://theeliteworld.vercel.app/",
    technologies: ["Next JS", "Tailwind CSS"],
  },
  {
    imageUrl: "/media/images/staff-track.png",
    title: "Staff Track",
    description:
      "Staff Track is a comprehensive shift management system designed to streamline workforce scheduling. Built with Next.js and Tailwind CSS, it offers a user-friendly interface for employees and admins to manage work shifts efficiently.",
    link: "https://staff-track-system.vercel.app",
    technologies: ["Next JS", "Auth JS", "Tailwind CSS", "Chart JS", "MongoDB"],
  },
  {
    imageUrl: "/media/images/staff-track.png",
    title: "Match Macking",
    description:
      "This is a smart matching system that connects client gig briefs with the most suitable creators. Clients usually write vague lines like “Need candid photographer in Goa, ₹80k budget” — I built a system that understands this text, converts it into structured data, and then finds the top 3 most relevant talents.It scores each talent based on location, skills, style, experience, portfolio tags, and budget fit — and returns a match score + explanation of why that talent matched.",
    link: "https://thematchmaking.vercel.app/",
    technologies: ["Next JS", "TypeScript"],
  },
];

export const navLinks = [

  { label: "About", href: "#about", index: 1 },
  { label: "Experience", href: "#experience", index: 2 },
  { label: "Work", href: "#work", index: 3 },
  { label: "Contact", href: "#contact", index: 4 },
    { label: "Resume", href: "/media/pdf/Mayur_Parmar.pdf", index: 0 },
];

export const experienceData = [
  {
    title: "Fullstack Developer",
    companyName: "fotonVR, Patan",
    companyUrl: "https://www.fotonvr.com/",
    duration: "May 2023 - Present",
    projects: [
      {
        name: "fotonVR website",
        details: [
          "Spearheaded the development of the fotonVR’s portfolio website, utilizing the MERN stack with a special emphasis on Next.js for seamless client-side rendering.",
          "Designed and implemented a responsive and user-friendly interface, ensuring a positive user experience across various devices.",
          "Integrated dynamic content through MongoDB to provide real-time updates on the website, showcasing the company’s projects, achievements, and values.",
        ],
      },
      {
        name: "Task Management Module",
        details: [
          "Led the frontend development of a robust Task Management Module for fotonVR employees, focusing on enhancing the user experience and visual interface.",
          "Collaborated closely with backend developers to integrate frontend components seamlessly with RESTful APIs for dynamic task data retrieval and updates.",
          "Designed and implemented an intuitive and responsive user interface using React.js, ensuring accessibility and ease of use for all team members.",
        ],
      },
    ],
  },
  {
    title: "Junior Developer",
    companyName: "Squad Technologies, Ahmedabad",
    companyUrl: "https://www.squadtechnologies.com/",
    duration: "Feb 2022 - May 2023",
    projects: [
      {
        name: "Hubspot API Integration",
        details: [
          "Successfully integrated HubSpot APIs to enhance CRM functionalities and streamline business processes.",
          "Implemented data synchronization between HubSpot CRM and other systems, ensuring real-time and accurate information across platforms.",
          "Troubleshooted and resolved API-related issues promptly, ensuring minimal disruption to business operations.",
        ],
      },
    ],
  },
];

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "MongoDB",
  "Angular.js",
  "Electron.js",
  "Three.js",
];

export const aboutMe = [
  `Hello! My name is Mayur Parmar, and I love the process of making digital art come to life. My journey into the world of web building began in the final semester of my diploma in computer engineering. While working on a library management project, a spark appeared that revealed my passion for creating streamlined, user-centered digital solutions.`,

  `Fast-forward to the today. I work at FotonVR as a full-stack developer, contributing my abilities to the creation of complete solutions over the whole development stack. Working with cross-functional teams, putting new features into practice, and making sure front-end and back-end technologies are seamlessly integrated are all part of my job description.`,

  `In order to provide cutting-edge solutions that satisfy the needs of our clients and users, I am committed to keeping up with the most recent developments in the industry and technology. I do this by continuously improving my skills. I am always eager to learn new things and take on new challenges, and I am excited to see where my journey will take me next.`,
];
