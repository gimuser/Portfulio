import type { EducationItem, ExperienceItem, ProfileLink } from "@/types/content";

export const profile = {
  name: "Oualid Ait Alla",
  cvName: "AIT ALLA Oualid",
  displayRole: {
    en: "Master's Student in Data Science & Information Systems Security",
    fr: "Étudiant en master Data Science & Sécurité des Systèmes d'Information",
  },
  shortProfile: {
    en: "I am a Master's student in Data Science and Information Systems Security, passionate about artificial intelligence, machine learning, generative AI, data analytics, automation, and secure intelligent systems.",
    fr: "Je suis étudiant en master Data Science et Sécurité des Systèmes d'Information, passionné par l'intelligence artificielle, le machine learning, l'IA générative, l'analyse de données, l'automatisation et les systèmes intelligents sécurisés.",
  },
  value: {
    en: "I have practical foundations in data science, Python development, machine learning, data visualization, cybersecurity, and project-based software development.",
    fr: "J'ai des bases pratiques en data science, développement Python, machine learning, visualisation de données, cybersécurité et développement logiciel par projets.",
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
    year: "2026",
    title: {
      en: "Master's student in Data Science and Information Systems Security",
      fr: "Master Data Science et Sécurité des Systèmes d'Information",
    },
    institution: profile.institution,
    details: {
      en: "Graduate studies focused on data science, artificial intelligence, cybersecurity, and secure information systems.",
      fr: "Formation de master axée sur la data science, l'intelligence artificielle, la cybersécurité et les systèmes d'information sécurisés.",
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
      en: "Coursework includes data science, AI, database systems, network security, cybersecurity, cryptography, machine learning fundamentals, information systems security, Python, SQL, C, and HTML5.",
      fr: "Cours en data science, IA, bases de données, sécurité réseau, cybersécurité, cryptographie, bases du machine learning, sécurité des systèmes d'information, Python, SQL, C et HTML5.",
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
      fr: "Cours suivis : algèbre linéaire, calcul, probabilités et statistiques, mathématiques discrètes, CMS, bases de données, algorithmes et systèmes informatiques.",
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
      en: "Academic machine-learning project work",
      fr: "Projets académiques en machine learning",
    },
    context: {
      en: "I completed these academic and personal projects as practical engineering work, not as employment experience.",
      fr: "J'ai réalisé ces projets académiques et personnels comme travaux pratiques d'ingénierie, sans les présenter comme une expérience salariée.",
    },
    bullets: [
      {
        en: "I built a car price prediction system using data cleaning, feature engineering, EDA, and regression model evaluation.",
        fr: "J'ai développé un système de prédiction des prix de voitures avec nettoyage de données, feature engineering, EDA et évaluation de modèles de régression.",
      },
      {
        en: "I built and tested an image-classification model with PyTorch and labeled image datasets.",
        fr: "J'ai développé et testé un modèle de classification d'images avec PyTorch et des jeux de données étiquetés.",
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
      en: "I worked in a controlled, ethical security testing environment.",
      fr: "J'ai travaillé dans un environnement de test contrôlé et éthique.",
    },
    bullets: [
      {
        en: "I studied Android device security testing with Kali Linux and Metasploit and proposed mitigation techniques.",
        fr: "J'ai étudié les tests de sécurité Android avec Kali Linux et Metasploit et proposé des techniques de mitigation.",
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
      en: "Web development project",
      fr: "Projet de développement web",
    },
    context: {
      en: "I completed this academic information-system project to practice database-backed web development.",
      fr: "J'ai réalisé ce projet académique de système d'information pour pratiquer le développement web avec base de données.",
    },
    bullets: [
      {
        en: "I developed a PHP hotel management system with room management, reservations, user handling, and database persistence.",
        fr: "J'ai développé un système de gestion d'hôtel en PHP avec gestion des chambres, réservations, utilisateurs et persistance en base de données.",
      },
    ],
  },
];
