import type { EducationItem, ExperienceItem, ProfileLink } from "@/types/content";

export const profile = {
  name: "Oualid Ait Alla",
  cvName: "AIT ALLA Oualid",
  displayRole: {
    en: "AI / Machine Learning Engineer | Data Scientist",
    fr: "Ingénieur IA / Machine Learning | Data Scientist",
  },
  shortProfile: {
    en: "AI-focused Master's student in Data Science and Information Systems Security, with project experience in machine learning, generative AI, retrieval-augmented generation (RAG), and secure application development. Built a document-grounded AI application and contributed to a collaborative reinforcement-learning project for security alert triage. Seeking an internship in AI Engineering, Machine Learning, or Data Science to apply my skills to practical projects and continue developing my expertise.",
    fr: "Étudiant en master Data Science et Sécurité des Systèmes d’Information, orienté IA, avec une expérience de projet en machine learning, IA générative, génération augmentée par récupération (RAG) et développement d’applications sécurisées. J’ai développé un assistant éducatif fondé sur les supports de cours et contribué à un projet collaboratif d’apprentissage par renforcement pour le triage des alertes de sécurité. Je recherche un stage en ingénierie IA, machine learning ou data science afin d’appliquer mes compétences à des projets concrets et de continuer à développer mon expertise.",
  },
  value: {
    en: "Building practical skills in AI, Machine Learning, Data Science, Python, SQL, APIs, data visualization, cybersecurity, and full-stack development through academic and personal projects focused on data-driven and AI-powered solutions.",
    fr: "Développement de compétences pratiques en IA, Machine Learning, Data Science, Python, SQL, API, visualisation de données, cybersécurité et développement full-stack à travers des projets académiques et personnels axés sur des solutions pilotées par les données et l'IA.",
  },
  institution: {
    en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
    fr: "Université Sultan Moulay Slimane, Faculté Polydisciplinaire de Beni Mellal",
  },
  email: "oualidaitalla18@gmail.com",
  location: "Beni Mellal, Morocco",
  locationMapHref: "https://www.google.com/maps/search/?api=1&query=Beni%20Mellal%2C%20Morocco",
  preciseLocationFromCv: "Mghila, Beni Mellal, Morocco",
  nationality: {
    en: "Moroccan",
    fr: "Marocaine",
  },
  mobility: {
    en: "Morocco, remote and hybrid opportunities",
    fr: "Maroc, opportunités à distance et hybrides",
  },
  phone: "+212 609 831 277",
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/212609831277",
    status: "available",
  } satisfies ProfileLink,
  availability: {
    en: "Open to internships, academic research projects, collaborations, and suitable junior opportunities.",
    fr: "Ouvert aux stages, projets de recherche académiques, collaborations et opportunités junior adaptées.",
  },
  interests: [
    {
      en: "Applied AI and generative AI prototyping",
      fr: "Prototypage en IA appliquée et IA générative",
    },
    {
      en: "Cybersecurity labs and secure system design",
      fr: "Labs cybersécurité et conception de systèmes sécurisés",
    },
    {
      en: "Data visualization and business intelligence",
      fr: "Visualisation de données et business intelligence",
    },
    {
      en: "Multilingual AI for Arabic, French, and English users",
      fr: "IA multilingue pour utilisateurs arabophones, francophones et anglophones",
    },
  ],
  roles: [
    "Data Science Student",
    "Future Data Scientist",
    "AI and Machine Learning Developer",
    "Generative AI Builder",
    "RAG Application Developer",
    "Data Analyst",
    "Information Systems Security Student",
  ],
  links: {
    website: {
      label: "Portfolio",
      href: "https://oualid-ait-alla.vercel.app",
      status: "available",
    } satisfies ProfileLink,
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aitalla-oualid-9797132bb/",
      status: "available",
    } satisfies ProfileLink,
    github: {
      label: "GitHub",
      href: "https://github.com/gimuser",
      status: "available",
    } satisfies ProfileLink,
  },
};

export const education: EducationItem[] = [
  {
    year: "2027",
    period: {
      en: "Sep 2025 – Oct 2027 (expected)",
      fr: "Sept. 2025 – Oct. 2027 (prévu)",
    },
    title: {
      en: "Master’s Degree in Data Science and Information Systems Security (in progress)",
      fr: "Master Data Science et Sécurité des Systèmes d’Information (en cours)",
    },
    institution: profile.institution,
    details: {
      en: "Focus: data science, artificial intelligence, cybersecurity, and secure information systems.",
      fr: "Axes : data science, intelligence artificielle, cybersécurité et systèmes d’information sécurisés.",
    },
    source: "User-provided profile",
  },
  {
    year: "2025",
    title: {
      en: "Bachelor's in Data Science & Information Systems Security",
      fr: "Licence en Data Science et Sécurité des Systèmes d'Information",
    },
    institution: {
      en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
      fr: "Université Sultan Moulay Slimane, Faculté Polydisciplinaire de Beni Mellal",
    },
    details: {
      en: "Coursework included data science, AI, database systems, network security, cybersecurity, cryptography, machine learning fundamentals, information systems security, Python, SQL, C, and HTML5.",
      fr: "Formation couvrant la data science, l'IA, les bases de données, la sécurité réseau, la cybersécurité, la cryptographie, les fondamentaux du machine learning, la sécurité des systèmes d'information, Python, SQL, C et HTML5.",
    },
    source: "User-provided profile",
  },
  {
    year: "2024",
    title: {
      en: "Undergraduate Diploma in Mathematics & Computer Science (DEUG)",
      fr: "DEUG en Mathématiques et Informatique",
    },
    institution: {
      en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
      fr: "Université Sultan Moulay Slimane, Faculté Polydisciplinaire de Beni Mellal",
    },
    details: {
      en: "Coursework included linear algebra, calculus, probability and statistics, discrete mathematics, CMS, database fundamentals, algorithms, and computer systems.",
      fr: "Formation couvrant l'algèbre linéaire, l'analyse, les probabilités et statistiques, les mathématiques discrètes, les CMS, les bases de données, les algorithmes et les systèmes informatiques.",
    },
    source: "User-provided profile",
  },
  {
    year: "2023",
    title: {
      en: "High School Diploma, Mathematical Sciences",
      fr: "Baccalauréat, Sciences Mathématiques",
    },
    institution: {
      en: "Al Massira, Azilal",
      fr: "Al Massira, Azilal",
    },
    details: {
      en: "Mathematics, physics, computer science basics, and statistics.",
      fr: "Mathématiques, physique, bases de l'informatique et statistiques.",
    },
    source: "CV",
  },
  {
    year: "2022",
    title: {
      en: "High School Diploma, Physical Sciences",
      fr: "Baccalauréat, Sciences Physiques",
    },
    institution: {
      en: "Al Massira, Azilal",
      fr: "Al Massira, Azilal",
    },
    details: {
      en: "Mathematics, mechanics, electricity, and scientific fundamentals.",
      fr: "Mathématiques, mécanique, électricité et bases scientifiques.",
    },
    source: "CV",
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2025",
    period: {
      en: "January 2025 - June 2025",
      fr: "Janvier 2025 - Juin 2025",
    },
    duration: {
      en: "6 months",
      fr: "6 mois",
    },
    location: {
      en: "Beni Mellal, Morocco",
      fr: "Beni Mellal, Maroc",
    },
    title: {
      en: "Academic Machine Learning Projects",
      fr: "Projets académiques de machine learning",
    },
    context: {
      en: "Completed as academic and personal engineering projects; this work is not presented as employment experience.",
      fr: "Réalisés dans le cadre de projets académiques et personnels ; ils ne constituent pas une expérience salariée.",
    },
    bullets: [
      {
        en: "Developed a car price prediction workflow using data cleaning, exploratory analysis, feature engineering, and regression-model evaluation.",
        fr: "Développement d'un workflow de prédiction des prix de voitures avec nettoyage des données, analyse exploratoire, feature engineering et évaluation de modèles de régression.",
      },
      {
        en: "Built and tested an image-classification workflow with PyTorch and labeled image datasets.",
        fr: "Développement et test d'un workflow de classification d'images avec PyTorch et des jeux de données étiquetés.",
      },
    ],
  },
  {
    year: "2024",
    period: {
      en: "March 2024 - May 2024",
      fr: "Mars 2024 - Mai 2024",
    },
    duration: {
      en: "3 months",
      fr: "3 mois",
    },
    location: {
      en: "Beni Mellal, Morocco",
      fr: "Beni Mellal, Maroc",
    },
    title: {
      en: "Cybersecurity learning project",
      fr: "Projet d'apprentissage en cybersécurité",
    },
    context: {
      en: "Completed in a controlled, ethical security-testing environment.",
      fr: "Réalisé dans un environnement de test contrôlé et éthique.",
    },
    bullets: [
      {
        en: "Studied Android device security testing with Kali Linux and Metasploit, then documented mitigation approaches.",
        fr: "Étude des tests de sécurité Android avec Kali Linux et Metasploit, puis documentation de pistes de mitigation.",
      },
    ],
  },
  {
    year: "2023",
    period: {
      en: "March 2023 - June 2023",
      fr: "Mars 2023 - Juin 2023",
    },
    duration: {
      en: "4 months",
      fr: "4 mois",
    },
    location: {
      en: "Beni Mellal, Morocco",
      fr: "Beni Mellal, Maroc",
    },
    title: {
      en: "Academic Web Development Project",
      fr: "Projet académique de développement web",
    },
    context: {
      en: "Completed to practise database-backed web development in an information-systems context.",
      fr: "Réalisé pour mettre en pratique le développement web adossé à une base de données dans un contexte de système d'information.",
    },
    bullets: [
      {
        en: "Developed a PHP hotel management application supporting room management, reservations, user handling, and database persistence.",
        fr: "Développement d'une application PHP de gestion hôtelière couvrant la gestion des chambres, les réservations, les utilisateurs et la persistance des données.",
      },
    ],
  },
];
