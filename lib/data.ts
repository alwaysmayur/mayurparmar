export type Project = {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  /** Live URL. Omit for projects that aren't deployed yet. */
  link?: string;
  github?: string;
  /** Shown as the accent badge on the case study, e.g. "Prototype". Defaults to "Production". */
  status?: string;
  technologies: string[];
  features: string[];
  tag?: string;
};

const matchMaking: Project = {
  slug: "match-macking",
  imageUrl: "/media/images/match-macking.png",
  title: "Match Making",
  description:
    "This is a smart matching system that connects client gig briefs with the most suitable creators. Clients usually write vague lines like “Need candid photographer in Goa, ₹80k budget” — I built a system that understands this text, converts it into structured data, and then finds the top 3 most relevant talents. It scores each talent based on location, skills, style, experience, portfolio tags, and budget fit — and returns a match score + explanation of why that talent matched.",
  link: "https://thematchmaking.vercel.app/",
  status: "Prototype",
  technologies: ["Next JS", "TypeScript"],
  features: [
    "Parses free-text briefs into structured data",
    "Scores candidates by location, skills, style, experience, portfolio tags, and budget fit",
    "Returns a match score with an explanation for each recommendation",
  ],
};

export const workData: Project[] = [
  {
    slug: "nj-jewels-wholesale",
    imageUrl: "/media/images/nj-jewels-wholesale.png",
    title: "NJ Jewels Wholesale",
    description:
      "NJ Jewels Wholesale is a full-stack e-commerce platform built for a jewelry wholesale business, focusing on performance, scalability, and a smooth purchasing experience. The application includes product listings, category-based filtering, cart and checkout flow, secure order management, and an admin dashboard for inventory and order control. Designed and developed end-to-end with a responsive-first approach to ensure seamless usability across devices.",
    link: "https://njjewelswholesale.com/",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Razorpay",
    ],
    features: [
      "Product listings with category-based filtering",
      "Cart and checkout flow with Razorpay payments",
      "Secure order management",
      "Admin dashboard for inventory and order control",
    ],
  },
  {
    slug: "dolphin-global-traders",
    imageUrl: "/media/images/dolphin-global-traders.png",
    title: "Dolphin Global Traders",
    description:
      "An eco-friendly bags e-commerce and export website built to showcase and sell products like jute, cotton, juco, and non-woven bags to global clients. Developed a fully dynamic and scalable application using Next.js and React, featuring a structured product catalog, SEO-optimized pages for global visibility, and dedicated sections for bulk orders and custom branding. Integrated contact forms and WhatsApp flows for lead generation, ensuring a fast, seamless, and user-friendly experience across devices.",
    link: "https://dolphinglobaltraders.com/",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Razorpay",
    ],
    features: [
      "Structured product catalog for global buyers",
      "SEO-optimized pages for international visibility",
      "Dedicated sections for bulk orders and custom branding",
      "Contact and WhatsApp flows for lead generation",
    ],
    tag: "Client Project",
  },
  {
    slug: "fotonvr",
    imageUrl: "/media/images/fotonvr_light.png",
    title: "fotonVR",
    description:
      "FotonVR Platform — A fully dynamic & multi-domain website builder for FotonVR and their sub-brands. I built a custom CMS from scratch that allows the team to launch multiple websites under one core system, manage content, and handle user permissions with secure role-based access. This platform is running in production and powers real marketing sites + product sites without requiring dev involvement.",
    link: "https://fotonvr.com/",
    technologies: [
      "Next JS",
      "Tailwind CSS",
      "MongoDB",
      "JWT Token",
      "Sun Editor",
    ],
    features: [
      "Custom CMS built from scratch",
      "Multi-domain website builder for sub-brands",
      "Role-based access control via JWT",
      "Powers live marketing and product sites without developer involvement",
    ],
  },
  {
    slug: "the-elite-world",
    imageUrl: "/media/images/the-elite-world.png",
    title: "The Elite World",
    description:
      "The Elite World is a visa portfolio project designed to showcase global opportunities in a structured and visually appealing way. Built with Next.js and Tailwind CSS, it delivers a fast, responsive, and modern user experience. The design is crafted in Figma, ensuring a clean and intuitive interface.",
    link: "https://theeliteworld.vercel.app/",
    technologies: ["Next JS", "Tailwind CSS"],
    features: [
      "Structured presentation of visa/immigration opportunities",
      "Interface designed in Figma before implementation",
    ],
  },
  {
    slug: "staff-track",
    imageUrl: "/media/images/staff-track.png",
    title: "Staff Track",
    description:
      "Staff Track is a comprehensive shift management system designed to streamline workforce scheduling. Built with Next.js and Tailwind CSS, it offers a user-friendly interface for employees and admins to manage work shifts efficiently.",
    link: "https://staff-track-system.vercel.app",
    technologies: ["Next JS", "Auth JS", "Tailwind CSS", "Chart JS", "MongoDB"],
    features: [
      "Shift scheduling for employees and admins",
      "Authentication via Auth.js",
      "Reporting views built with Chart.js",
    ],
  },
  matchMaking,
];

export const aiData: Project[] = [
  {
    slug: "clipping-ai",
    // Placeholder cover — replace with a real screenshot.
    imageUrl: "/media/images/clipping-ai.png",
    title: "Clipping AI",
    description:
      "Clipping AI turns long-form videos into short, shareable clips automatically. It transcribes the source video, uses an LLM to find the most engaging moments, and cuts them into ready-to-post vertical clips with captions — replacing hours of manual scrubbing and editing with a single upload.",
    github: "https://github.com/alwaysmayur/clipping-ai",
    status: "Work in progress",
    technologies: ["Next JS", "TypeScript", "LLM", "FFmpeg"],
    features: [
      "Upload a long-form video and get it transcribed with timestamps",
      "LLM-based highlight detection that scores segments for engagement",
      "Automatic cutting and reframing into vertical short-form clips",
      "Burned-in captions generated from the transcript",
    ],
  },
  matchMaking,
];

export const experienceData = [
  {
    title: "Freelance Full-Stack Developer",
    companyName: "Self-Employed",
    companyUrl: "/projects",
    duration: "July 2026 - Present",
    projects: [
      {
        name: "Client Projects",
        details: [
          "Working independently as a freelance full-stack developer, building web applications and platforms for clients while exploring my next full-time opportunity.",
          "Delivering end-to-end e-commerce, CMS, and internal tooling projects using Next.js, Node.js, and PostgreSQL/MongoDB, from requirements through deployment.",
          "Managing client communication, project scoping, and delivery independently, in addition to hands-on development.",
        ],
      },
    ],
  },
  {
    title: "Software Engineer II",
    companyName: "Prakash Software Solutions, Ahmedabad",
    companyUrl: "https://prakashinfotech.com/",
    duration: "March 2026 - June 2026",
    projects: [
      {
        name: "Send2Me",
        details: [
          "Developed Send2Me, a workflow-driven platform that enables users to create, assign, and manage dynamic tasks with file uploads and shareable links.",
          "My role involved building end-to-end features across the stack, designing efficient APIs, and ensuring seamless integration between frontend and backend systems.",
          "Collaborated with cross-functional teams to implement new features, improve system performance, and deliver smooth, user-friendly experiences.",
          "Continuously improved my skills and stayed updated with modern technologies to build efficient and impactful digital solutions.",
        ],
      },
    ],
  },
  {
    title: "Fullstack Developer",
    companyName: "fotonVR, Patan",
    companyUrl: "https://www.fotonvr.com/",
    duration: "May 2023 - Feb 2026",
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
        name: "HubSpot API Integration",
        details: [
          "Successfully integrated HubSpot APIs to enhance CRM functionalities and streamline business processes.",
          "Implemented data synchronization between HubSpot CRM and other systems, ensuring real-time and accurate information across platforms.",
          "Diagnosed and resolved API-related issues promptly, ensuring minimal disruption to business operations.",
        ],
      },
    ],
  },
];

export const stack = {
  Frontend: ["React.js", "Next.js", "TypeScript",  "Tailwind CSS"],
  Backend: ["Node.js", "NestJS", "Express"],
  Databases: ["PostgreSQL", "MongoDB","MySQL","MSSQL"],
  Infrastructure: ["AWS", "Docker", "Redis"],
  AI: ["LLM Applications", "RAG", "Embeddings", "AI Agents"],
  "3D": ["Three.js", "React Three Fiber", "GLTF"],
  Other: ["Git", "GitHub", "Figma", "Jira",],
};

export const aboutMe = [
  `Hello! My name is Mayur Parmar, and I love the process of making digital art come to life. My journey into the world of web building began in the final semester of my diploma in computer engineering. While working on a library management project, a spark appeared that revealed my passion for creating streamlined, user-centered digital solutions.`,
  `Fast-forward to today, I'm working as an independent freelance full-stack developer, building web applications for clients while exploring my next full-time opportunity.`,
  `I work closely with clients to understand their requirements, architect solutions, and deliver polished, production-ready products from start to finish.`,
  `I am committed to continuously improving my skills and staying updated with modern technologies to build efficient and impactful digital solutions. I enjoy taking on new challenges and solving real-world problems through clean and scalable code.`,
];

export const socialLinks = {
  github: "https://github.com/alwaysmayur",
  linkedin: "https://www.linkedin.com/in/alwaysmayur/",
  instagram: "https://www.instagram.com/alwaysdeveloper/",
  email: "mayurparmar.ce@gmail.com",
};

export const resumeUrl = "/media/pdf/Mayur_Parmar_Fullstack_developer.pdf";
