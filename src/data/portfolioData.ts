export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: "Featured Product" | "Enterprise" | "Full-Stack" | "Frontend";
  stack: string[];
  role: string;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const personalDetails = {
  name: "Omkar Kallekar",
  role: "Full-Stack & Frontend Software Engineer",
  heroHeadlines: {
    variant1: {
      headline: "Full-Stack & Frontend Software Engineer",
      subtitle:
        "I build web applications and cloud services with React, TypeScript, and Node.js currently engineering internal product platforms at Accenture.",
    },
    variant2: {
      headline: "Building scalable web applications with React, TypeScript, and Node.js",
      subtitle:
        "Associate Software Engineer at Accenture with full-stack product experience, open to frontend and full-stack roles at product companies and remote startups.",
    },
  },
  about: [
    "I am an Associate Software Engineer at Accenture with a B.E. in Computer Science and Engineering, working on full-stack enterprise product platforms.",
    "My core stack centers on React, TypeScript, and Node.js, covering reusable frontend component libraries, RESTful microservices, and serverless Google Cloud services.",
    "I am looking for React/frontend and full-stack engineering roles at product companies and remote-friendly startups where I can build and ship reliable software.",
  ],
  email: "omkark6342@gmail.com",
  phone: "+91 9175563878",
  location: "Taleigao, Panaji, Goa",
  resumeUrl: "/images/omkar-kallekar-resume.pdf",
  socialLinks: {
    github: "https://github.com/omkaaaar",
    linkedin: "https://linkedin.com/in/omkar-kallekar",
    devpost: "https://devpost.com",
  },
};

export const skillsData = {
  languages: ["TypeScript", "JavaScript", "SQL", "C++"],
  frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  backendAndCloud: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Google Cloud Run",
    "Cloud Functions",
    "Firestore",
    "Pub/Sub",
    "MongoDB",
  ],
  tools: ["Git/GitHub", "CI/CD", "Figma", "VS Code"],
};

export const experienceData: ExperienceItem[] = [
  {
    company: "Accenture India",
    role: "Associate Software Engineer",
    location: "Bangalore, India",
    period: "Nov 2024 – Present",
    highlights: [
      "Contributed to core module development for 'Manage My Team', an internal enterprise resource and project management platform.",
      "Designed and built reusable React.js and TypeScript UI component libraries supporting role-based access control (RBAC).",
      "Developed scalable Node.js and TypeScript microservices and implemented an Express.js API Gateway deployed on Google Cloud Run and App Engine.",
      "Contributed to serverless RESTful APIs using Google Cloud Functions and Firestore (NoSQL).",
    ],
  },
  {
    company: "Varcons Technologies",
    role: "Fullstack Web Developer Intern",
    location: "Bangalore, India",
    period: "Feb 2024 – Aug 2024",
    highlights: [
      "Developed responsive full-stack web applications using HTML, CSS, JavaScript, PHP, MySQL, and Figma.",
      "Collaborated on an online voting system template with secure user authorization workflows.",
      "Adopted Git version control and team code review standards for production deployments.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "algonode",
    title: "AlgoNode",
    category: "Featured Product",
    summary:
      "An interactive DSA preparation platform that teaches algorithmic problem solving through a pattern-first approach rather than rote memorization.",
    description:
      "AlgoNode organizes 60+ algorithmic challenges by underlying design patterns (Sliding Window, Two Pointers, Monotonic Stack, etc.) and difficulty levels, giving learners step-by-step intuition and recognition cues for technical interviews.",
    stack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Vercel", "SPA Architecture"],
    role: "Sole Creator & Frontend Developer",
    liveUrl: "https://algo-node.vercel.app/",
    repoUrl: "https://github.com/omkaaaar",
    image: "/images/work-1.png",
    highlights: [
      "Structured a client-side data model organizing 60+ algorithmic challenges into pattern hierarchies with difficulty ratings, recognition cues, and intuition guides.",
      "Built a modular single-page interface with real-time category filtering and mobile-responsive layout views.",
    ],
  },
  {
    id: "manage-my-team",
    title: "Manage My Team Platform",
    category: "Enterprise",
    summary:
      "An enterprise resource and project management platform built to coordinate staffing, project tracking, and permissions.",
    description:
      "Engineered full-stack features from reusable component libraries to serverless microservices and event-driven workflows on Google Cloud Platform.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "GCP Cloud Run",
      "Firestore",
      "Google Pub/Sub",
    ],
    role: "Associate Software Engineer at Accenture",
    image: "/images/work-2.png",
    highlights: [
      "Engineered role-based access control (RBAC) component libraries in React and TypeScript.",
      "Contributed to serverless backend services using Google Cloud Functions Gen-2 with Firestore queries.",
      "Integrated asynchronous messaging workflows using Google Pub/Sub for background tasks.",
    ],
  },
];

