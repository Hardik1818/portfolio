import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Hardik Thapaliya",
  initials: "HT",
  url: "https://github.com/Hardik1818",
  location: "Bharatpur-8, Chitwan, Nepal",
  locationLink: "https://www.google.com/maps/place/Bharatpur,+Nepal",
  description:
    "Web Developer & Machine Learning Engineer | Computer Engineering Student at Tribhuvan University. Building intelligent systems, network security platforms, and modern web applications.",
  summary:
    "Detail-oriented developer and researcher with deep experience in **Machine Learning**, **Cybersecurity / NIDS**, and **Full-Stack Web Engineering**. Co-developed a production-grade Network Intrusion Detection System (Django + Scapy + 3 ML models), designed civic-tech & fintech web applications, and currently participating as a **2025 Data Fellow at Data Fellowship Nepal**. Passionate about solving real-world challenges with data-driven architecture and performant software.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "C / C++", icon: Csharp },
  ],
  allSkills: [
    "Python",
    "Machine Learning",
    "scikit-learn",
    "XGBoost",
    "Optuna",
    "CTGAN",
    "SHAP Explainability",
    "PyBullet & PPO (RL)",
    "DuckDB",
    "Pandas & NumPy",
    "Scapy Network Forensics",
    "React 18+",
    "Next.js (App Router)",
    "TypeScript",
    "JavaScript",
    "Node.js / Express",
    "Django",
    "Firebase",
    "MongoDB / Mongoose",
    "PostgreSQL",
    "Redis",
    "Tailwind CSS",
    "REST APIs",
    "Docker",
    "Git / Git LFS",
    "Render & Vercel",
    "Google Gemini API",
    "NLP & Sentiment Analysis",
    "PRD & System Design",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Thapaliyahardik1818@gmail.com",
    tel: "+977 9744343990",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Hardik1818",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hardikthapaliya/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Thapaliyahardik1818@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Data Fellowship Nepal",
      href: "https://datafellowship.org",
      badges: ["Fellowship"],
      location: "Nepal",
      title: "2025 Data Fellow",
      logoUrl: "",
      start: "2025",
      end: "Present",
      description:
        "Selected for a competitive nationwide fellowship focused on advanced data literacy, governance, and skill-building in Nepal. Contributing to data-driven community solutions, analytics pipelines, and public policy research initiatives.",
    },
    {
      company: "KEC Hackathon 2024 (Leapfrog Technology)",
      href: "https://github.com/Hardik1818",
      badges: ["Hackathon"],
      location: "Kathmandu, Nepal",
      title: "Backend Developer — Nagarik Dristi",
      logoUrl: "",
      start: "Jan 2025",
      end: "Jan 2025",
      description:
        "Collaborated in a multidisciplinary team during an intensive 48-hour sprint to build Nagarik Dristi, a civic-tech web platform. Engineered secure backend API endpoints, real-time data ingestion, and public tracking modules for municipal projects and civic issue voting.",
    },
    {
      company: "Independent ML & Software Developer",
      href: "https://github.com/Hardik1818",
      badges: ["Engineering"],
      location: "Chitwan, Nepal",
      title: "Machine Learning & Full-Stack Developer",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "Designed, trained, and deployed predictive machine learning models and full-stack web applications. Built automated intrusion detection pipelines, AI chatbots with Google Gemini, e-commerce sentiment engines, and reinforcement learning simulations in PyBullet.",
    },
  ],

  education: [
    {
      school: "Tribhuvan University",
      href: "https://tu.edu.np",
      degree: "Bachelor in Computer Engineering",
      logoUrl: "",
      start: "2024",
      end: "2028",
    },
    {
      school: "Oxford Secondary School",
      href: "#",
      degree: "+2 Computer Science",
      logoUrl: "",
      start: "2021",
      end: "2023",
    },
    {
      school: "SOS Hermann Gmeiner School Bharatpur",
      href: "#",
      degree: "Secondary Education (School Leaving Level)",
      logoUrl: "",
      start: "2011",
      end: "2021",
    },
  ],

  certifications: [
    {
      title: "CS50’s Introduction to Programming with Python",
      issuer: "HarvardX (edX)",
      date: "2024",
      credentialId: "",
      link: "https://cs50.harvard.edu/python/",
    },
    {
      title: "Tools for Data Science",
      issuer: "IBM",
      date: "Oct 2023",
      credentialId: "M4SG2M8JGAZJ",
      link: "https://www.coursera.org/account/accomplishments/records/M4SG2M8JGAZJ",
    },
    {
      title: "KEC Hackathon Participation Certificate",
      issuer: "Leapfrog Technology, Inc.",
      date: "Jan 2025",
      credentialId: "",
      link: "https://github.com/Hardik1818",
    },
    {
      title: "Front-End Web Development (HTML5 & CSS3)",
      issuer: "AuraEd",
      date: "2023",
      credentialId: "",
      link: "",
    },
    {
      title: "C Intermediate & Introduction to C",
      issuer: "Sololearn",
      date: "2023",
      credentialId: "CC-XBEMLQ5G / CC-FEILPZWA",
      link: "https://www.sololearn.com",
    },
    {
      title: "Cloud Computing",
      issuer: "Simplilearn",
      date: "2023",
      credentialId: "3831230",
      link: "https://www.simplilearn.com",
    },
    {
      title: "Build a Website Using ChatGPT",
      issuer: "Great Learning",
      date: "2023",
      credentialId: "",
      link: "",
    },
  ],

  projects: [
    {
      title: "Network Intrusion Detection System (NIDS)",
      href: "https://nids-ids2018.onrender.com/",
      dates: "2024 - 2025",
      active: true,
      description:
        "Flagship security & ML system: Production Django web app serving 3 tuned classifiers (HistGradientBoosting, XGBoost, MLP) detecting 15 attack classes from 30 CICFlowMeter features. Includes live Scapy packet capture, CTGAN balancing, Optuna tuning, and a 25-experiment FTP forensic research program with 446 Django tests.",
      technologies: [
        "Python",
        "Django",
        "scikit-learn",
        "XGBoost",
        "Optuna",
        "CTGAN",
        "Scapy",
        "DuckDB",
        "SHAP",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://nids-ids2018.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitbhatta2-ship-it/IDS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nids.png",
      video: "",
    },
    {
      title: "3D Bipedal Robot Walker (Reinforcement Learning)",
      href: "https://github.com/Hardik1818",
      dates: "2024",
      active: true,
      description:
        "Physics-based robotics simulation training a bipedal locomotion agent using Proximal Policy Optimization (PPO) reinforcement learning within the PyBullet physics engine.",
      technologies: [
        "Python",
        "PyBullet",
        "Reinforcement Learning (PPO)",
        "NumPy",
        "Physics Simulation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Hardik1818",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/bipedal-walker.mp4",
    },
    {
      title: "DailyPay Nepal — Earned Wage Access (EWA)",
      href: "https://github.com/Hardik1818",
      dates: "2025",
      active: true,
      description:
        "Fintech Earned Wage Access platform with real-time second-by-second salary streaming, employee wallet transfers (Bank/eSewa/Khalti), org payroll funding dashboard, and admin approval workflows built with a custom framework-free CSS design system.",
      technologies: [
        "React 18+",
        "TypeScript",
        "Vite",
        "Framer Motion",
        "Lucide React",
        "Vanilla CSS",
        "Context API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Hardik1818",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "StreamVerse — Streaming Platform Architecture (PRD)",
      href: "https://stream-verse-topaz.vercel.app/",
      dates: "Jan 2026",
      active: true,
      description:
        "Authored comprehensive Product Requirements Document (PRD) and system architecture for a legal-first streaming service: HLS adaptive bitrate, sub-2s latency for 100k+ concurrent users, Redis caching, DMCA & DRM readiness, and a 3-phase monetization roadmap.",
      technologies: [
        "System Architecture",
        "Next.js",
        "Node.js",
        "HLS Streaming",
        "Redis",
        "PostgreSQL",
        "PRD",
      ],
      links: [
        {
          type: "Website",
          href: "https://stream-verse-topaz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hardik1818",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/streamverse.png",
      video: "",
    },
    {
      title: "Nagarik Dristi — Civic-Tech Platform",
      href: "https://github.com/kecitclub/parle-G",
      dates: "Jan 2025",
      active: true,
      description:
        "Civic-tech web platform developed at KEC Hackathon 2024 enabling citizens to live-track government development projects, report & upvote community issues, and participate in collaborative public discussions.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Mongoose",
        "Firebase Auth",
        "Shadcn UI",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kecitclub/parle-G",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/nagarik-dristi.jpg",
      video: "",
    },
    {
      title: "Life OS — Offline-First Productivity PWA",
      href: "https://life-os-topaz-eta.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Single-user Progressive Web App consolidating calendar, tasks, habits, mood tracking, and an AI assistant designed to run at $0/month using offline-first local storage and optional local LLM integration via Ollama.",
      technologies: [
        "PWA",
        "TypeScript",
        "Local Storage / IndexedDB",
        "Ollama (Local AI)",
        "React",
      ],
      links: [
        {
          type: "Website",
          href: "https://life-os-topaz-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hardik1818",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/life-os.png",
      video: "",
    },
    {
      title: "Product Comparison & Recommendation System",
      href: "https://github.com/Hardik1818",
      dates: "2024",
      active: true,
      description:
        "Smart product ranking and recommendation system that scrapes e-commerce data and evaluates top deals using a multi-variable scoring model (30% price, 50% rating, 20% reviews) alongside NLP sentiment analysis.",
      technologies: [
        "Python",
        "NLP",
        "Recommendation Model",
        "Web Scraping",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Hardik1818",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/recommender-sys.jpg",
      video: "",
    },
    {
      title: "Heart Disease Prediction System",
      href: "https://github.com/Hardik1818",
      dates: "2023",
      active: true,
      description:
        "Clinical diagnostic ML classifier assessing cardiovascular disease risk from patient biometric indicators and medical records.",
      technologies: [
        "Python",
        "scikit-learn",
        "Classification",
        "Pandas",
        "NumPy",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Hardik1818",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/heart-disease.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "KEC Hackathon 2024 — Nagarik Dristi",
      dates: "January 2025",
      location: "Kathmandu, Nepal (Organized by Leapfrog Technology & KEC)",
      description:
        "Built Nagarik Dristi, a civic-tech application connecting citizens with local governance through live municipal project tracking, vote-based issue reporting, and public discussion forums in a 48-hour sprint.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/kecitclub/parle-G",
        },
      ],
    },
    {
      title: "Data Fellowship Nepal 2025",
      dates: "2025 – Present",
      location: "Nepal",
      description:
        "Selected for the competitive nationwide fellowship program focused on data literacy, analytics, and building community-driven data solutions across Nepal.",
      image: "",
      links: [
        {
          title: "Program",
          icon: <Icons.globe className="size-3" />,
          href: "https://datafellowship.org",
        },
      ],
    },
  ],
} as const;
