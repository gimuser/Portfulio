import type { EducationItem, ExperienceItem, ProfileLink } from "@/types/content";

export const profile = {
  name: "Oualid Ait Alla",
  displayRole: {
    en: "Master's Student in Data Science & Information Systems Security",
    fr: "Etudiant en master Data Science & Securite des Systemes d'Information",
  },
  shortProfile: {
    en: "Master's student in Data Science and Information Systems Security, passionate about artificial intelligence, machine learning, generative AI, data analytics, automation, and secure intelligent systems.",
    fr: "Etudiant en master Data Science et Securite des Systemes d'Information, passionne par l'intelligence artificielle, le machine learning, l'IA generative, l'analyse de donnees, l'automatisation et les systemes intelligents securises.",
  },
  value: {
    en: "I combine data science, Python development, machine learning fundamentals, data visualization thinking, cybersecurity awareness, and practical project-based learning.",
    fr: "Je combine la data science, le developpement Python, les bases du machine learning, l'analyse visuelle des donnees, la sensibilite cybersecurite et l'apprentissage par projets pratiques.",
  },
  institution: {
    en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
    fr: "Universite Sultan Moulay Slimane, Faculte Polydisciplinaire de Beni Mellal",
  },
  email: "oualidaitalla18@gmail.com",
  location: "Beni Mellal, Morocco",
  preciseLocationFromCv: "Mghila, Beni Mellal, Morocco",
  phone: "+212 609 831 277",
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/212609831277",
    status: "available",
  } satisfies ProfileLink,
  availability: {
    en: "Open to internships, academic research projects, collaborations, and suitable junior opportunities.",
    fr: "Ouvert aux stages, projets de recherche academiques, collaborations et opportunites junior adaptees.",
  },
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
      fr: "Master Data Science et Securite des Systemes d'Information",
    },
    institution: profile.institution,
    details: {
      en: "Graduate studies focused on data science, artificial intelligence, cybersecurity, and secure information systems.",
      fr: "Formation de master axee sur la data science, l'intelligence artificielle, la cybersecurite et les systemes d'information securises.",
    },
    source: "User-provided profile",
  },
  {
    year: "2025",
    title: {
      en: "Bachelor's in Data Science & Information Systems Security",
      fr: "Licence en Data Science et Securite des Systemes d'Information",
    },
    institution: {
      en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
      fr: "Universite Sultan Moulay Slimane, Faculte Polydisciplinaire de Beni Mellal",
    },
    details: {
      en: "Coursework includes data science, AI, database systems, network security, cybersecurity, cryptography, machine learning fundamentals, information systems security, Python, SQL, C, and HTML5.",
      fr: "Cours en data science, IA, bases de donnees, securite reseau, cybersecurite, cryptographie, bases du machine learning, securite des systemes d'information, Python, SQL, C et HTML5.",
    },
    source: "User-provided profile",
  },
  {
    year: "2024",
    title: {
      en: "Undergraduate Diploma in Mathematics & Computer Science (DEUG)",
      fr: "DEUG en Mathematiques et Informatique",
    },
    institution: {
      en: "Sultan Moulay Slimane University, Polydisciplinary Faculty of Beni Mellal",
      fr: "Universite Sultan Moulay Slimane, Faculte Polydisciplinaire de Beni Mellal",
    },
    details: {
      en: "Coursework included linear algebra, calculus, probability and statistics, discrete mathematics, CMS, database fundamentals, algorithms, and computer systems.",
      fr: "Cours suivis: algebre lineaire, calcul, probabilites et statistiques, mathematiques discretes, CMS, bases de donnees, algorithmes et systemes informatiques.",
    },
    source: "User-provided profile",
  },
  {
    year: "2023",
    title: {
      en: "High School Diploma, Mathematical Sciences",
      fr: "Baccalaureat, Sciences Mathematiques",
    },
    institution: {
      en: "Al Massira, Azilal",
      fr: "Al Massira, Azilal",
    },
    details: {
      en: "Mathematics, physics, computer science basics, and statistics.",
      fr: "Mathematiques, physique, bases de l'informatique et statistiques.",
    },
    source: "CV",
  },
  {
    year: "2022",
    title: {
      en: "High School Diploma, Physical Sciences",
      fr: "Baccalaureat, Sciences Physiques",
    },
    institution: {
      en: "Al Massira, Azilal",
      fr: "Al Massira, Azilal",
    },
    details: {
      en: "Mathematics, mechanics, electricity, and scientific fundamentals.",
      fr: "Mathematiques, mecanique, electricite et bases scientifiques.",
    },
    source: "CV",
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2025",
    title: {
      en: "Academic machine-learning project work",
      fr: "Projets academiques en machine learning",
    },
    context: {
      en: "Academic and personal projects, not employment experience.",
      fr: "Projets academiques et personnels, non presentes comme experience professionnelle.",
    },
    bullets: [
      {
        en: "Built a car price prediction system using data cleaning, feature engineering, EDA, and regression model evaluation.",
        fr: "Developpement d'un systeme de prediction des prix de voitures avec nettoyage de donnees, feature engineering, EDA et evaluation de modeles de regression.",
      },
      {
        en: "Built and tested an image-classification model with PyTorch and labeled image datasets.",
        fr: "Developpement et test d'un modele de classification d'images avec PyTorch et des jeux de donnees etiquetes.",
      },
    ],
  },
  {
    year: "2024",
    title: {
      en: "Cybersecurity learning project",
      fr: "Projet d'apprentissage en cybersecurite",
    },
    context: {
      en: "Controlled, ethical security testing environment.",
      fr: "Environnement de test controle et ethique.",
    },
    bullets: [
      {
        en: "Studied Android device security testing with Kali Linux and Metasploit and proposed mitigation techniques.",
        fr: "Etude de tests de securite Android avec Kali Linux et Metasploit, avec proposition de techniques de mitigation.",
      },
    ],
  },
  {
    year: "2023",
    title: {
      en: "Web development project",
      fr: "Projet de developpement web",
    },
    context: {
      en: "Academic information-system project.",
      fr: "Projet academique de systeme d'information.",
    },
    bullets: [
      {
        en: "Developed a PHP hotel management system with room management, reservations, user handling, and database persistence.",
        fr: "Developpement d'un systeme de gestion d'hotel en PHP avec gestion des chambres, reservations, utilisateurs et persistance en base de donnees.",
      },
    ],
  },
];
