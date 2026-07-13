export type CareerIconName =
  | "agent"
  | "automation"
  | "briefcase"
  | "chart"
  | "cloud"
  | "code"
  | "database"
  | "education"
  | "growth"
  | "network"
  | "rocket"
  | "shield"
  | "target";

export type CareerTimelineItem = {
  period: string;
  title: string;
  icon: CareerIconName;
  description: string;
  objectives: string[];
  coreSkills?: string[];
  targetRoles?: string[];
};

export type CareerRoadmapLevel = {
  title: string;
  icon: CareerIconName;
  skills: string[];
};

export const careerIntro = {
  eyebrow: "Career Vision: 2026-2031",
  title: "My Career Vision",
  subtitle: "My professional roadmap from Master's student to AI/ML Engineer by 2031.",
  introduction:
    "I aim to transform my academic knowledge and personal projects into real professional experience in Artificial Intelligence, Data Science, Software Engineering, and Cybersecurity.",
};

export const careerTimeline: CareerTimelineItem[] = [
  {
    period: "2026-2027",
    title: "Build Strong Foundations",
    icon: "education",
    description:
      "My first objective is to move from academic and personal projects to real professional environments where I can learn, contribute, and improve my engineering skills.",
    objectives: [
      "Complete my Master's coursework successfully.",
      "Secure an internship in AI, Data Science, Generative AI, Data Engineering, or Cybersecurity.",
      "Improve my professional experience through real projects.",
      "Strengthen my portfolio and GitHub profile.",
      "Improve my communication in English and French.",
    ],
    coreSkills: [
      "Python",
      "SQL",
      "Git",
      "Machine Learning",
      "Data Analysis",
      "Power BI",
      "APIs",
      "FastAPI",
      "Docker",
      "Cybersecurity Fundamentals",
    ],
  },
  {
    period: "2027-2028",
    title: "Start My Professional Career",
    icon: "briefcase",
    description:
      "At this stage, I want to obtain my first full-time professional role and contribute to real-world AI and data products.",
    objectives: [
      "Join a professional AI, data, or software engineering team.",
      "Contribute to production projects.",
      "Build and deploy complete AI applications.",
      "Gain experience with databases, cloud platforms, testing, and CI/CD.",
      "Learn how professional teams design and maintain software.",
    ],
    targetRoles: [
      "Junior AI/ML Engineer",
      "Generative AI Developer",
      "Junior Data Scientist",
      "Python Backend Developer",
      "AI Automation Engineer",
      "Junior Data Engineer",
      "Cybersecurity Data Analyst",
    ],
  },
  {
    period: "2028-2029",
    title: "Become an Independent AI Engineer",
    icon: "rocket",
    description:
      "My goal is to become capable of designing, developing, deploying, and maintaining reliable AI applications from end to end.",
    objectives: [
      "Design complete AI solutions with less supervision.",
      "Build RAG systems, AI agents, predictive models, and automation tools.",
      "Deploy AI services using cloud platforms and containers.",
      "Improve system monitoring, testing, security, and performance.",
      "Contribute to technical decisions and architecture discussions.",
    ],
    coreSkills: [
      "LLMs",
      "RAG",
      "Vector databases",
      "LangChain or LangGraph",
      "FastAPI",
      "Docker",
      "Cloud services",
      "CI/CD",
      "MLOps",
      "Monitoring",
      "Software testing",
    ],
  },
  {
    period: "2029-2031",
    title: "Advance to AI/ML Engineer",
    icon: "target",
    description:
      "By 2031, I aim to be an experienced AI/ML Engineer capable of building secure, scalable, and production-ready intelligent systems.",
    objectives: [
      "Lead small technical features or AI projects.",
      "Design scalable and secure AI systems.",
      "Mentor interns or junior developers.",
      "Work with production data and real business requirements.",
      "Develop a clear specialization in Generative AI, RAG, AI automation, or AI security.",
      "Prepare for future senior engineering or architecture responsibilities.",
    ],
    targetRoles: [
      "AI/ML Engineer",
      "Generative AI Engineer",
      "Applied AI Engineer",
      "MLOps Engineer",
      "AI Solutions Engineer",
      "AI and Cybersecurity Engineer",
    ],
  },
];

export const targetIdentity = {
  title: "Target by 2031",
  description:
    "AI/ML Engineer specializing in Generative AI, RAG systems, intelligent automation, and secure AI applications.",
  directionTitle: "Long-Term Direction",
  direction:
    "Progress toward AI Solutions Architecture, technical leadership, and entrepreneurship after gaining strong professional experience.",
};

export const skillsRoadmap: CareerRoadmapLevel[] = [
  {
    title: "Foundation",
    icon: "database",
    skills: ["Python", "SQL", "Git", "Data Analysis", "Machine Learning"],
  },
  {
    title: "Application Development",
    icon: "code",
    skills: ["FastAPI", "APIs", "Databases", "Authentication", "Testing", "Docker"],
  },
  {
    title: "AI Engineering",
    icon: "agent",
    skills: ["LLMs", "RAG", "AI agents", "Vector databases", "Cloud deployment", "MLOps"],
  },
  {
    title: "Professional Growth",
    icon: "growth",
    skills: ["System design", "AI security", "Teamwork", "Communication", "Mentoring", "Technical leadership"],
  },
];

export const impactAreas = [
  "Generative AI",
  "AI Agents and Automation",
  "Secure AI Systems",
  "Data Science",
  "Cybersecurity",
  "Education Technology",
  "Business Intelligence",
  "Multilingual AI for Arabic, French, and English users",
];

export const careerCallToAction = {
  title: "Open to Opportunities",
  description:
    "I am currently looking for internships, junior positions, research opportunities, and collaborations in Artificial Intelligence, Data Science, Generative AI, Software Engineering, and Cybersecurity.",
};
