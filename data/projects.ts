import type { Project, ProjectCategory } from "@/types/content";

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "RAG",
  "Generative AI",
  "Full Stack",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Web Development",
];

export const projects: Project[] = [
  {
    slug: "soar-rl-agent",
    title: "SOAR RL Agent",
    year: "2026",
    category: "Cybersecurity",
    status: { en: "Collaborative public GitHub project", fr: "Projet GitHub public collaboratif" },
    summary: {
      en: "Reinforcement-learning SOAR project for autonomous alert triage, human-in-the-loop SOC operations, and analyst-workload optimization.",
      fr: "Projet SOAR d'apprentissage par renforcement pour le triage autonome des alertes, les opérations SOC avec intervention humaine et l'optimisation de la charge des analystes.",
    },
    cvSummary: {
      en: "Contributed to a collaborative SOAR reinforcement-learning project for alert triage and human-in-the-loop SOC operations. The system combines a FastAPI backend, data pipeline, RL environment, reward system, SOC simulation, web interface, training and test data, documentation, automation scripts, and tests.",
      fr: "Contribution à un projet SOAR collaboratif d'apprentissage par renforcement pour le triage des alertes et les opérations SOC avec intervention humaine. Le système associe un backend FastAPI, un pipeline de données, un environnement RL, un système de récompense, une simulation SOC, une interface web, des données d'entraînement et de test, de la documentation, des scripts d'automatisation et des tests.",
    },
    atsSummary: {
      en: "Contributed to a collaborative SOAR reinforcement-learning project with a FastAPI backend, data pipeline, RL environment, reward system, SOC simulation, web interface, and automated tests.",
      fr: "Contribution à un projet SOAR collaboratif d'apprentissage par renforcement avec backend FastAPI, pipeline de données, environnement RL, système de récompense, simulation SOC, interface web et tests automatisés.",
    },
    problem: {
      en: "SOC teams need a structured way to triage alerts while retaining human oversight for sensitive decisions and analyst-workload management.",
      fr: "Les équipes SOC ont besoin d'un moyen structuré de trier les alertes tout en conservant une supervision humaine pour les décisions sensibles et la gestion de la charge des analystes.",
    },
    objectives: [
      { en: "Model alert-triage decisions in a reinforcement-learning environment.", fr: "Modéliser les décisions de triage des alertes dans un environnement d'apprentissage par renforcement." },
      { en: "Support SOC simulation, reward design, data preparation, and human-in-the-loop workflows.", fr: "Prendre en charge la simulation SOC, la conception du système de récompense, la préparation des données et les workflows avec intervention humaine." },
      { en: "Expose operational status, alerts, and metrics through a web interface and API.", fr: "Exposer l'état opérationnel, les alertes et les métriques via une interface web et une API." },
    ],
    role: {
      en: "PM and reinforcement-learning contributor in a seven-person collaborative project, with work organized across dedicated agent, data-pipeline, environment, reward-system, API, database/monitoring, and frontend streams.",
      fr: "Contributeur PM et apprentissage par renforcement dans un projet collaboratif de sept personnes, organisé autour de volets dédiés à l'agent, au pipeline de données, à l'environnement, au système de récompense, à l'API, à la base de données/au monitoring et au frontend.",
    },
    technologies: ["Python", "FastAPI", "TypeScript", "Reinforcement Learning", "SOAR", "SOC simulation", "Docker Compose", "Automated testing"],
    dataset: {
      en: "Repository training and test data, including alert-oriented data files used by the project pipeline.",
      fr: "Données d'entraînement et de test du dépôt, y compris des fichiers orientés alertes utilisés par le pipeline du projet.",
    },
    workflow: [
      { en: "Alert data preparation", fr: "Préparation des données d'alertes" },
      { en: "SOC environment simulation", fr: "Simulation de l'environnement SOC" },
      { en: "RL decision and reward loop", fr: "Boucle de décision et de récompense RL" },
      { en: "API and web-interface monitoring", fr: "Monitoring via l'API et l'interface web" },
    ],
    features: [
      { en: "FastAPI backend, data pipeline, RL environment, reward system, and SOC simulation structure.", fr: "Structure comprenant backend FastAPI, pipeline de données, environnement RL, système de récompense et simulation SOC." },
      { en: "Web interface for alert, metric, and system-status visibility.", fr: "Interface web de visualisation des alertes, des métriques et de l'état du système." },
      { en: "Docker-based local setup, technical documentation, automation helpers, and automated tests.", fr: "Configuration locale avec Docker, documentation technique, helpers d'automatisation et tests automatisés." },
    ],
    approach: {
      en: "Collaborative SOAR architecture that combines an RL agent and reward loop with data preparation, SOC simulation, backend services, monitoring, and a human-in-the-loop operating model.",
      fr: "Architecture SOAR collaborative associant agent RL et boucle de récompense à la préparation des données, à la simulation SOC, aux services backend, au monitoring et à un modèle d'intervention humaine.",
    },
    results: {
      en: "Established a documented, modular project structure for autonomous alert triage and SOC operations. Repository materials do not provide validated production-performance metrics.",
      fr: "Mise en place d'une structure de projet documentée et modulaire pour le triage autonome des alertes et les opérations SOC. Les éléments du dépôt ne fournissent pas de métriques de performance validées en production.",
    },
    challenges: [
      { en: "Balancing automation with analyst oversight in security operations.", fr: "Équilibrer l'automatisation et la supervision des analystes dans les opérations de sécurité." },
      { en: "Coordinating data, environment, reward, backend, monitoring, and frontend responsibilities across a team.", fr: "Coordonner les responsabilités liées aux données, à l'environnement, au système de récompense, au backend, au monitoring et au frontend au sein d'une équipe." },
    ],
    solutions: [
      { en: "Separated work into focused streams with shared documentation, automation helpers, and test coverage.", fr: "Séparation du travail en volets ciblés avec documentation partagée, helpers d'automatisation et couverture de tests." },
      { en: "Framed the system around human-in-the-loop SOC operations instead of fully unsupervised security decisions.", fr: "Conception du système autour d'opérations SOC avec intervention humaine plutôt que de décisions de sécurité entièrement non supervisées." },
    ],
    lessons: [
      { en: "Security automation benefits from modular architecture, traceable workflows, and explicit human review points.", fr: "L'automatisation de la sécurité bénéficie d'une architecture modulaire, de workflows traçables et de points de revue humaine explicites." },
    ],
    github: { label: "GitHub", href: "https://github.com/gimuser/RL_Agent", status: "available" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: {
      en: "Based on the public project README, repository structure, language breakdown, and Docker-based local-run documentation.",
      fr: "Basé sur le README public, la structure du dépôt, la répartition des langages et la documentation d'exécution locale avec Docker.",
    },
    visualTone: "green",
  },
  {
    slug: "bachelor-ai-tutor",
    title: "BachelorAI Tutor",
    year: "2026",
    category: "RAG",
    status: { en: "Private GitHub project", fr: "Projet GitHub privé" },
    summary: {
      en: "Full-stack educational RAG assistant for bachelor/licence students, with course-grounded answers, semester/module selection, uploads, saved answers, and admin workflows.",
      fr: "Assistant éducatif RAG full-stack pour étudiants de licence, avec réponses ancrées dans les cours, sélection semestre/module, uploads, réponses sauvegardées et workflows admin.",
    },
    cvSummary: {
      en: "Built a full-stack educational RAG assistant that gives bachelor's students a conversational way to consult course material. The application ingests course and user-uploaded documents, retrieves relevant content by semester and module, and uses Ollama to produce answers grounded in the retrieved sources. It combines a React/Vite frontend, an Express API, MongoDB, embeddings, and a local vector store to make course information easier to access while limiting unsupported answers.",
      fr: "Développé un assistant éducatif RAG full-stack qui permet aux étudiants en licence de consulter leurs supports de cours par conversation. L'application ingère les documents des cours et les fichiers importés par les utilisateurs, retrouve le contenu pertinent selon le semestre et le module, puis utilise Ollama pour produire des réponses fondées sur les sources récupérées. Elle associe un frontend React/Vite, une API Express, MongoDB, des embeddings et un vector store local afin de faciliter l'accès aux informations de cours tout en limitant les réponses non étayées.",
    },
    atsSummary: {
      en: "Built a RAG educational assistant that indexes course and uploaded documents by semester and module, retrieves relevant sources, and returns course-grounded answers.",
      fr: "Développé un assistant éducatif RAG qui indexe les documents de cours et les fichiers importés par semestre et module, retrouve les sources pertinentes et fournit des réponses fondées sur les cours.",
    },
    problem: {
      en: "Students need help understanding course material without receiving hallucinated answers that drift away from their actual modules and files.",
      fr: "Les etudiants ont besoin d'aide pour comprendre les cours sans recevoir de reponses hallucinees ou deconnectees de leurs modules et fichiers reels.",
    },
    objectives: [
      { en: "Let students log in, choose a semester and module, and ask questions against indexed course resources.", fr: "Permettre aux etudiants de se connecter, choisir un semestre/module et poser des questions sur des ressources de cours indexees." },
      { en: "Parse PDF, DOCX, TXT, and Markdown files, then chunk and embed the content for retrieval.", fr: "Parser des fichiers PDF, DOCX, TXT et Markdown, puis segmenter et vectoriser le contenu pour la recherche." },
      { en: "Return structured safe HTML answers with source references and guardrails against unsupported answers.", fr: "Retourner des reponses HTML structurees et securisees avec sources et garde-fous contre les reponses non fondees." },
    ],
    role: {
      en: "Full-stack developer building the React/Vite frontend, Express API, MongoDB models, local vector store, ingestion scripts, and RAG answer pipeline.",
      fr: "Developpeur full-stack du frontend React/Vite, de l'API Express, des modeles MongoDB, du vector store local, des scripts d'ingestion et du pipeline RAG.",
    },
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "Ollama", "RAG", "Embeddings", "Docker"],
    dataset: {
      en: "Course folders under `backend/data/courses` or a configured `COURSES_DIR`, organized by S1-S6, module, and resource type such as TDS, TPS, OLDEXAMS, and PREPARATION.",
      fr: "Dossiers de cours sous `backend/data/courses` ou `COURSES_DIR`, organises par S1-S6, module et type de ressource comme TDS, TPS, OLDEXAMS et PREPARATION.",
    },
    workflow: [
      { en: "Course files are scanned from semester/module folders.", fr: "Les fichiers de cours sont scannes depuis les dossiers semestre/module." },
      { en: "Documents are parsed, chunked, embedded with Ollama, and stored in a persistent JSON vector store.", fr: "Les documents sont parses, decoupes, vectorises avec Ollama et stockes dans un vector store JSON persistant." },
      { en: "Questions are embedded and filtered by semester, module, and optional user resources.", fr: "Les questions sont vectorisees et filtrees par semestre, module et ressources utilisateur optionnelles." },
      { en: "Relevant chunks are injected into a strict course-grounded prompt and sanitized before display.", fr: "Les chunks pertinents sont injectes dans un prompt strictement fonde sur le cours puis sanitizes avant affichage." },
    ],
    features: [
      { en: "Student authentication with JWT HTTP-only cookies and bcrypt password hashing.", fr: "Authentification etudiant avec cookies JWT HTTP-only et hash bcrypt." },
      { en: "Semester, module, file upload, saved answer, conversation, and admin routes.", fr: "Routes semestre, module, upload de fichiers, reponses sauvegardees, conversations et administration." },
      { en: "Role checks, upload validation, rate limiting, Helmet, CORS, Zod validation, and safe HTML sanitization.", fr: "Controle des roles, validation des uploads, rate limiting, Helmet, CORS, validation Zod et sanitization HTML." },
      { en: "Local Ollama chat and embedding models with configurable model names.", fr: "Modeles locaux Ollama pour chat et embeddings, configurables." },
    ],
    approach: {
      en: "Retrieval-Augmented Generation: parse documents, chunk text, generate embeddings, run cosine-similarity search over a local vector store, and answer only from retrieved course context.",
      fr: "Retrieval-Augmented Generation : parsing, chunking, embeddings, recherche par similarite cosinus dans un vector store local et reponse uniquement depuis le contexte recupere.",
    },
    results: {
      en: "Implemented a working RAG-oriented educational platform with ingestion, retrieval, admin, upload, and conversation features. No benchmark metrics or deployed demo were found.",
      fr: "Plateforme educative orientee RAG implementee avec ingestion, retrieval, admin, upload et conversations. Aucun benchmark ou demo deployee n'a ete trouve.",
    },
    challenges: [
      { en: "Preventing course-answer hallucinations and prompt-injection attempts.", fr: "Eviter les hallucinations hors cours et les tentatives de prompt injection." },
      { en: "Supporting different document formats and a semester/module course tree.", fr: "Supporter plusieurs formats de documents et une arborescence semestre/module." },
      { en: "Combining shared course resources with user-uploaded resources.", fr: "Combiner ressources de cours partagees et ressources uploadees par l'utilisateur." },
    ],
    solutions: [
      { en: "Added strict prompt rules requiring answers only from retrieved course context.", fr: "Ajout de regles de prompt strictes imposant de repondre uniquement avec le contexte de cours recupere." },
      { en: "Built document parsers, ingestion scripts, category detection, and a persistent JSON vector store.", fr: "Construction de parsers, scripts d'ingestion, detection de categorie et vector store JSON persistant." },
      { en: "Sanitized model output and included source metadata in answers.", fr: "Sanitization des sorties modele et ajout des metadonnees de sources." },
    ],
    lessons: [
      { en: "RAG systems need clear data organization, retrieval filters, explicit uncertainty behavior, and source visibility.", fr: "Les systemes RAG demandent une organisation claire des donnees, des filtres de retrieval, une gestion explicite de l'incertitude et des sources visibles." },
    ],
    github: { label: "GitHub private repo", href: "https://github.com/gimuser/bachlor-ai-tutor", status: "available" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: {
      en: "Based on the private GitHub repository README, package manifests, Express route registration, RAG service, vector store service, and ingestion script.",
      fr: "Base sur le README du depot GitHub prive, les manifests package, les routes Express, le service RAG, le vector store et le script d'ingestion.",
    },
    visualTone: "blue",
  },
  {
    slug: "islamic-ai-chat",
    title: "Islamic AI Chat",
    year: "2026",
    category: "Generative AI",
    status: { en: "Public GitHub project", fr: "Projet GitHub public" },
    summary: {
      en: "Full-stack protected AI chat application for thoughtful questions about Islam, with conversation history, model selection, and safety-oriented prompt guards.",
      fr: "Application full-stack de chat IA protégé pour questions sur l'Islam, avec historique, sélection de modèle et garde-fous de prompt.",
    },
    cvSummary: {
      en: "Built a full-stack AI chat application for questions about Islam, with safeguards appropriate to a sensitive subject. The application combines a React/Vite frontend, an Express API, MongoDB conversation storage, configurable OpenAI, OpenRouter, and Ollama providers, and JWT authentication. It preserves conversation history and applies prompt-injection checks and safe HTML handling before responses are displayed.",
      fr: "Développé une application full-stack de chat IA pour les questions relatives à l'islam, avec des garde-fous adaptés à la sensibilité du sujet. L'application associe un frontend React/Vite, une API Express, le stockage des conversations dans MongoDB, des fournisseurs configurables OpenAI, OpenRouter et Ollama, ainsi qu'une authentification JWT. Elle conserve l'historique des échanges et applique des contrôles contre les injections de prompt ainsi qu'un traitement HTML sécurisé avant l'affichage des réponses.",
    },
    atsSummary: {
      en: "Built a full-stack AI chat application with authentication, stored conversation history, configurable AI providers, and prompt-injection checks for a sensitive question-and-answering context.",
      fr: "Développé une application full-stack de chat IA avec authentification, historique des conversations, fournisseurs IA configurables et contrôles contre les injections de prompt pour un contexte de questions-réponses sensible.",
    },
    problem: {
      en: "Religious question-answering needs careful boundaries, transparent uncertainty, and protection against invented references or unsafe personal guidance.",
      fr: "Le question-reponse religieux demande des limites claires, une incertitude transparente et une protection contre les references inventees ou conseils personnels dangereux.",
    },
    objectives: [
      { en: "Create a protected chat UI with registration, login, conversation history, and model selection.", fr: "Creer une interface de chat protegee avec inscription, connexion, historique et selection de modele." },
      { en: "Support OpenAI, OpenRouter, and local Ollama providers.", fr: "Supporter OpenAI, OpenRouter et Ollama local." },
      { en: "Add prompt guidance and injection checks for safer answers.", fr: "Ajouter des consignes de prompt et controles d'injection pour des reponses plus sures." },
    ],
    role: {
      en: "Full-stack developer implementing the React/Vite frontend, Express backend, MongoDB conversation storage, provider abstraction, and chat safety logic.",
      fr: "Developpeur full-stack du frontend React/Vite, backend Express, stockage MongoDB des conversations, abstraction providers et logique de securite du chat.",
    },
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "OpenAI", "OpenRouter", "Ollama", "JWT"],
    dataset: {
      en: "No dataset. The app stores users, conversations, and messages in MongoDB and calls configurable AI providers at request time.",
      fr: "Aucun jeu de donnees. L'application stocke utilisateurs, conversations et messages dans MongoDB et appelle des providers IA configurables a la demande.",
    },
    workflow: [
      { en: "User authenticates through the protected frontend.", fr: "L'utilisateur s'authentifie via le frontend protege." },
      { en: "Question is normalized and checked against prompt-injection patterns.", fr: "La question est normalisee et verifiee contre des patterns de prompt injection." },
      { en: "Recent conversation context and system guidance are sent to the selected provider.", fr: "Le contexte recent et les consignes systeme sont envoyes au provider selectionne." },
      { en: "Assistant response is escaped to safe HTML and saved with the conversation.", fr: "La reponse assistant est echappee en HTML sur et sauvegardee dans la conversation." },
    ],
    features: [
      { en: "Email/password authentication with JWT stored in HTTP-only cookies.", fr: "Authentification email/mot de passe avec JWT en cookies HTTP-only." },
      { en: "Optional Google Sign-In configuration.", fr: "Configuration optionnelle Google Sign-In." },
      { en: "Model list route for OpenAI, OpenRouter, and local Ollama choices.", fr: "Route de liste des modeles pour OpenAI, OpenRouter et Ollama local." },
      { en: "Helmet, CORS, rate limiting, request validation, and protected API routes.", fr: "Helmet, CORS, rate limiting, validation des requetes et routes API protegees." },
    ],
    approach: {
      en: "Provider-agnostic generative AI chat: a TypeScript service routes prompts to OpenAI Responses API, OpenRouter chat completions, or Ollama, with low-temperature settings and prompt-injection checks.",
      fr: "Chat IA generative agnostique provider : un service TypeScript route les prompts vers OpenAI Responses API, OpenRouter chat completions ou Ollama, avec temperature basse et controles anti-injection.",
    },
    results: {
      en: "Implemented the protected chat flow, provider selection, conversation persistence, and safety guidance. No production deployment or model-evaluation metrics were found.",
      fr: "Flux de chat protege, selection provider, persistance conversations et consignes de securite implementes. Aucun deploiement production ou metrique d'evaluation trouve.",
    },
    challenges: [
      { en: "Handling sensitive religious questions responsibly.", fr: "Gerer les questions religieuses sensibles de maniere responsable." },
      { en: "Supporting local and cloud AI providers behind one interface.", fr: "Supporter des providers IA locaux et cloud derriere une interface commune." },
    ],
    solutions: [
      { en: "Added system guidance against invented Qur'an verses, hadith wording, scholars, and references.", fr: "Ajout de consignes systeme contre les versets, hadiths, savants et references inventes." },
      { en: "Built a provider abstraction with explicit availability checks and error handling.", fr: "Construction d'une abstraction provider avec verification de disponibilite et gestion d'erreurs." },
    ],
    lessons: [
      { en: "Domain-sensitive AI apps need carefully scoped prompts, human referral boundaries, and defensive input handling.", fr: "Les applications IA sensibles demandent des prompts limites, des frontieres de redirection humaine et une gestion defensive des entrees." },
    ],
    github: { label: "GitHub", href: "https://github.com/gimuser/repos-islamic_ai_chat", status: "available" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: {
      en: "Based on the public GitHub README, backend/frontend package manifests, Express routes, chat controller, provider service, and prompt guard utility.",
      fr: "Base sur le README public GitHub, les manifests backend/frontend, les routes Express, le controller chat, le service provider et l'utilitaire prompt guard.",
    },
    visualTone: "violet",
  },
  {
    slug: "maison-global-store",
    title: "Maison Global Store",
    year: "2026",
    category: "Full Stack",
    status: { en: "Public GitHub project", fr: "Projet GitHub public" },
    summary: {
      en: "Secure affiliate commerce starter built with Next.js, Prisma, Argon2id authentication, multilingual UI labels, checkout integration points, and local recommendation logic.",
      fr: "Starter e-commerce d'affiliation sécurisé avec Next.js, Prisma, authentification Argon2id, libellés multilingues, points d'intégration checkout et recommandations locales.",
    },
    cvSummary: {
      en: "Developed a secure affiliate-commerce starter for product discovery, authentication, local recommendations, and checkout extension points. Built with Next.js, TypeScript, Prisma, and SQLite, it validates server-side requests, uses Argon2id to protect passwords, and structures product, order, and session data. The project establishes a practical security and data-management foundation before live payment or affiliate integrations.",
      fr: "Développé un starter e-commerce d'affiliation sécurisé pour la découverte de produits, l'authentification, les recommandations locales et les points d'extension du checkout. Réalisé avec Next.js, TypeScript, Prisma et SQLite, il valide les requêtes côté serveur, utilise Argon2id pour protéger les mots de passe et structure les données de produits, de commandes et de sessions. Le projet établit une base concrète de sécurité et de gestion des données avant toute intégration de paiement ou d'affiliation en production.",
    },
    atsSummary: {
      en: "Developed a secure affiliate-commerce starter with product discovery, authentication, local recommendations, checkout extension points, and server-side validation.",
      fr: "Développé un starter e-commerce d'affiliation sécurisé avec découverte de produits, authentification, recommandations locales, points d'extension du checkout et validation côté serveur.",
    },
    problem: {
      en: "Affiliate storefronts need trustworthy authentication, compliant outbound tracking, product discovery, checkout extension points, and security basics before production launch.",
      fr: "Les boutiques d'affiliation ont besoin d'une authentification fiable, de tracking sortant conforme, decouverte produit, points d'extension checkout et bases securite avant production.",
    },
    objectives: [
      { en: "Build a responsive storefront with product catalog, filtering, and affiliate outbound links.", fr: "Construire une boutique responsive avec catalogue, filtres et liens d'affiliation sortants." },
      { en: "Implement secure registration, login, session cookies, OAuth extension points, and OTP verification routes.", fr: "Implementer inscription, connexion, cookies de session, extensions OAuth et routes OTP securisees." },
      { en: "Create checkout/order persistence with payment provider extension points.", fr: "Creer persistance commandes/checkout avec points d'extension providers de paiement." },
    ],
    role: {
      en: "Full-stack developer implementing the Next.js app, Prisma schema, auth/session logic, recommendation engine, checkout API, and security headers.",
      fr: "Developpeur full-stack de l'app Next.js, schema Prisma, logique auth/session, moteur de recommandations, API checkout et headers securite.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Argon2id", "Zod", "Stripe", "Docker"],
    dataset: {
      en: "Curated product catalog in `src/data/products.json`, persisted products/events/orders through a Prisma SQLite schema.",
      fr: "Catalogue produit curate dans `src/data/products.json`, produits/evenements/commandes persistes via un schema Prisma SQLite.",
    },
    workflow: [
      { en: "Catalog products are loaded and filtered by search, category, and price.", fr: "Les produits du catalogue sont charges et filtres par recherche, categorie et prix." },
      { en: "User behavior and commerce events feed local recommendation scoring.", fr: "Les evenements comportementaux et commerce alimentent le scoring de recommandation local." },
      { en: "Checkout requests are validated, rate-limited, persisted as orders, and passed to payment session creation.", fr: "Les requetes checkout sont validees, rate-limited, persistees comme commandes et transmises a la creation de session paiement." },
      { en: "Security middleware and headers protect app routes and sensitive flows.", fr: "Middleware et headers de securite protegent routes et flux sensibles." },
    ],
    features: [
      { en: "Light/dark storefront with browser language detection for English, French, Arabic, Spanish, and German labels.", fr: "Storefront clair/sombre avec detection de langue navigateur pour libelles anglais, francais, arabe, espagnol et allemand." },
      { en: "Local recommendations using behavior, commerce, interest, price, quality, and exploration signals.", fr: "Recommandations locales utilisant signaux comportement, commerce, interet, prix, qualite et exploration." },
      { en: "Prisma models for users, OAuth accounts, sessions, verification codes, products, events, orders, order items, and payment attempts.", fr: "Modeles Prisma pour utilisateurs, comptes OAuth, sessions, codes de verification, produits, evenements, commandes, items et tentatives de paiement." },
      { en: "Stripe Checkout integration points plus demo/extension routes for other payment methods.", fr: "Points d'integration Stripe Checkout et routes demo/extension pour autres methodes de paiement." },
    ],
    approach: {
      en: "Production-oriented full-stack architecture with server-side validation, Argon2id password hashing, hashed sessions/OTPs, Prisma persistence, rate limits, and deterministic recommendation scoring.",
      fr: "Architecture full-stack orientee production avec validation serveur, hash Argon2id, sessions/OTPs hashes, persistance Prisma, rate limits et scoring de recommandation deterministe.",
    },
    results: {
      en: "Implemented a complete commerce starter with product, auth, recommendation, checkout, admin, and security foundations. No public deployment was found.",
      fr: "Starter commerce complet implemente avec bases produit, auth, recommandation, checkout, admin et securite. Aucun deploiement public trouve.",
    },
    challenges: [
      { en: "Balancing affiliate-commerce features with secure authentication and payment boundaries.", fr: "Equilibrer fonctionnalites affiliation avec authentification securisee et limites paiement." },
      { en: "Adding recommendations without relying on external user-profiling services.", fr: "Ajouter des recommandations sans service externe de profiling utilisateur." },
    ],
    solutions: [
      { en: "Used integer money fields, server-side Zod validation, hashed secrets, and provider extension points.", fr: "Utilisation de montants entiers, validation Zod serveur, secrets hashes et points d'extension providers." },
      { en: "Built local content/behavior recommendation scoring from catalog and event signals.", fr: "Construction d'un scoring local contenu/comportement a partir du catalogue et des evenements." },
    ],
    lessons: [
      { en: "Commerce apps benefit from security and compliance foundations before adding real payment credentials or affiliate feeds.", fr: "Les apps commerce beneficient de bases securite/conformite avant l'ajout de vrais credentials paiement ou flux affiliation." },
    ],
    github: { label: "GitHub", href: "https://github.com/gimuser/global-affiliate-store", status: "available" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: {
      en: "Based on the public GitHub README, package manifest, Prisma schema, auth helper, recommendation service, checkout route, and recommendations route.",
      fr: "Base sur le README public GitHub, package manifest, schema Prisma, helper auth, service recommendation, route checkout et route recommendations.",
    },
    visualTone: "green",
  },
  {
    slug: "car-price-prediction-system",
    title: "Car Price Prediction System",
    year: "2025",
    category: "Data Science",
    status: { en: "Completed academic project", fr: "Projet académique terminé" },
    summary: {
      en: "Machine-learning regression project for estimating car prices from structured vehicle attributes.",
      fr: "Projet de régression en machine learning pour estimer les prix de voitures à partir d'attributs structurés.",
    },
    cvSummary: {
      en: "Developed a machine-learning regression workflow to estimate car prices from structured vehicle data, including brand, model, year, mileage, and engine specifications. Using Python, the project applies data cleaning, exploratory data analysis, feature engineering, and regression-model evaluation to prepare and model the data without unsupported performance claims.",
      fr: "Développé un workflow de régression en machine learning pour estimer les prix de voitures à partir de données véhicules structurées, notamment la marque, le modèle, l'année, le kilométrage et les caractéristiques moteur. Réalisé en Python, le projet applique le nettoyage des données, l'analyse exploratoire, le feature engineering et l'évaluation de modèles de régression afin de préparer et modéliser les données sans avancer de performances non vérifiées.",
    },
    atsSummary: {
      en: "Developed a Python regression workflow for estimating car prices from structured vehicle data through data cleaning, exploratory analysis, feature engineering, and model evaluation.",
      fr: "Développé un workflow de régression en Python pour estimer les prix de voitures à partir de données véhicules structurées, avec nettoyage des données, analyse exploratoire, feature engineering et évaluation de modèles.",
    },
    problem: {
      en: "Car prices depend on multiple interacting factors such as brand, model, year, mileage, and engine specifications. The project turns those factors into a predictive workflow.",
      fr: "Les prix des voitures dependent de plusieurs facteurs comme la marque, le modele, l'annee, le kilometrage et les caracteristiques moteur. Le projet transforme ces facteurs en workflow predictif.",
    },
    objectives: [
      { en: "Clean and prepare structured vehicle data for modeling.", fr: "Nettoyer et preparer des donnees vehicules structurees pour la modelisation." },
      { en: "Perform exploratory data analysis and feature engineering.", fr: "Realiser une analyse exploratoire et du feature engineering." },
      { en: "Train and evaluate regression models using Python libraries.", fr: "Entrainer et evaluer des modeles de regression avec des bibliotheques Python." },
    ],
    role: {
      en: "Student developer responsible for the end-to-end ML workflow.",
      fr: "Etudiant developpeur responsable du workflow ML de bout en bout.",
    },
    technologies: ["Python", "Data cleaning", "EDA", "Feature engineering", "Regression models"],
    dataset: {
      en: "Structured car data containing fields such as brand, model, year, mileage, and engine specifications. Exact dataset source was not present in the workspace.",
      fr: "Donnees structurees de voitures avec marque, modele, annee, kilometrage et specifications moteur. La source exacte du jeu de donnees n'etait pas presente dans le workspace.",
    },
    workflow: [
      { en: "Raw car attributes", fr: "Attributs bruts des voitures" },
      { en: "Cleaning and exploratory analysis", fr: "Nettoyage et analyse exploratoire" },
      { en: "Feature engineering", fr: "Feature engineering" },
      { en: "Regression training and evaluation", fr: "Entrainement et evaluation de regression" },
    ],
    features: [
      { en: "Structured preprocessing pipeline for tabular data.", fr: "Pipeline de pretraitement structure pour donnees tabulaires." },
      { en: "Exploratory analysis to understand price drivers.", fr: "Analyse exploratoire pour comprendre les facteurs du prix." },
      { en: "Regression model comparison described without unsupported metrics.", fr: "Comparaison de modeles de regression sans metriques non confirmees." },
    ],
    approach: {
      en: "Classical supervised machine learning regression approach. The project uses Python libraries without naming specific algorithms or performance values.",
      fr: "Approche de regression supervisee classique. Le projet utilise des bibliotheques Python sans preciser les algorithmes ni les performances.",
    },
    results: {
      en: "The project produced trained and evaluated regression models. Numerical result files were not present in the workspace.",
      fr: "Le projet a produit des modeles de regression entraines et evalues. Les fichiers de resultats numeriques n'etaient pas presents dans le workspace.",
    },
    challenges: [
      { en: "Handling multiple vehicle attributes with different data types.", fr: "Gerer plusieurs attributs vehicules avec des types de donnees differents." },
      { en: "Avoiding unsupported claims about accuracy or business impact.", fr: "Eviter les affirmations non appuyees sur la precision ou l'impact business." },
    ],
    solutions: [
      { en: "Used data cleaning, EDA, and feature engineering before model training.", fr: "Utilisation du nettoyage de donnees, de l'EDA et du feature engineering avant l'entrainement." },
      { en: "Presented results honestly as evaluated models without fabricated metrics.", fr: "Presentation honnete des resultats comme modeles evalues sans metriques inventees." },
    ],
    lessons: [
      { en: "Strong tabular ML work starts with data quality and feature understanding.", fr: "Un bon projet ML tabulaire commence par la qualite des donnees et la comprehension des variables." },
    ],
    github: { label: "GitHub", href: "[ADD GITHUB URL]", status: "missing" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: {
      en: "Repository, notebook, report, screenshots, and model metrics can be added when available.",
      fr: "Depot, notebook, rapport, captures et metriques modele peuvent etre ajoutes lorsqu'ils sont disponibles.",
    },
    visualTone: "blue",
  },
  {
    slug: "image-classification-pytorch",
    title: "Image Classification with PyTorch",
    year: "2025",
    category: "Machine Learning",
    status: { en: "Completed academic project", fr: "Projet académique terminé" },
    summary: {
      en: "Deep-learning image classification project built with PyTorch and labeled image datasets.",
      fr: "Projet de classification d'images en deep learning développé avec PyTorch et des données image étiquetées.",
    },
    cvSummary: {
      en: "Built and tested a PyTorch image-classification model using labeled image datasets and a neural-network training workflow.",
      fr: "Développé et testé un modèle de classification d'images avec PyTorch en utilisant des jeux de données étiquetés et un workflow d'entraînement de réseau neuronal.",
    },
    problem: {
      en: "Image classification requires learning patterns from labeled visual data and evaluating how well a neural network generalizes to unseen examples.",
      fr: "La classification d'images necessite l'apprentissage de motifs a partir d'images etiquetees et l'evaluation de la generalisation du reseau.",
    },
    objectives: [
      { en: "Build an image classification model using deep learning.", fr: "Construire un modele de classification d'images avec le deep learning." },
      { en: "Implement neural networks with PyTorch.", fr: "Implementer des reseaux de neurones avec PyTorch." },
      { en: "Train and test the model on labeled image datasets.", fr: "Entrainer et tester le modele sur des jeux d'images etiquetees." },
    ],
    role: {
      en: "Student developer implementing the neural network workflow.",
      fr: "Etudiant developpeur implementant le workflow de reseau neuronal.",
    },
    technologies: ["Python", "PyTorch", "Deep learning", "Neural networks", "Image datasets"],
    dataset: {
      en: "Labeled image datasets. The exact dataset name and source were not present in the workspace.",
      fr: "Jeux de donnees d'images etiquetees. Le nom exact et la source n'etaient pas presents dans le workspace.",
    },
    workflow: [
      { en: "Image dataset preparation", fr: "Preparation du jeu d'images" },
      { en: "Neural network implementation", fr: "Implementation du reseau neuronal" },
      { en: "Training and testing", fr: "Entrainement et test" },
      { en: "Evaluation review", fr: "Analyse de l'evaluation" },
    ],
    features: [
      { en: "PyTorch-based neural network implementation.", fr: "Implementation de reseau neuronal avec PyTorch." },
      { en: "Training and testing workflow on labeled images.", fr: "Workflow d'entrainement et de test sur images etiquetees." },
      { en: "Project summary stays metric-free until notebooks or reports are added.", fr: "La synthese du projet reste sans metriques tant que les notebooks ou rapports ne sont pas ajoutes." },
    ],
    approach: {
      en: "Deep-learning classification with PyTorch. Transfer learning, cloud platforms, and exact architectures were not confirmed by available files.",
      fr: "Classification deep learning avec PyTorch. Le transfer learning, les plateformes cloud et les architectures exactes ne sont pas confirmes par les fichiers disponibles.",
    },
    results: {
      en: "The model was trained and tested on labeled image datasets. Accuracy, loss curves, and confusion matrices can be added when available.",
      fr: "Le modele a ete entraine et teste sur des images etiquetees. L'accuracy, les courbes de perte et les matrices de confusion peuvent etre ajoutees lorsqu'elles sont disponibles.",
    },
    challenges: [
      { en: "Working from a project summary without notebook-level implementation details.", fr: "Travailler a partir d'un resume projet sans details de notebook." },
    ],
    solutions: [
      { en: "Documented the PyTorch and deep-learning scope, then left metrics and architecture as update targets.", fr: "Documentation du perimetre PyTorch/deep learning, puis conservation des metriques et architecture comme elements a ajouter." },
    ],
    lessons: [
      { en: "Image ML portfolios are stronger when they show sample inputs, evaluation plots, and model limitations.", fr: "Un portfolio de ML image est plus fort avec exemples d'entree, graphiques d'evaluation et limites du modele." },
    ],
    github: { label: "GitHub", href: "[ADD GITHUB URL]", status: "missing" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: { en: "Repository, notebook, and report can be added when available.", fr: "Depot, notebook et rapport peuvent etre ajoutes lorsqu'ils sont disponibles." },
    visualTone: "violet",
  },
  {
    slug: "android-device-security-testing",
    title: "Android Device Security Testing",
    year: "2024",
    category: "Cybersecurity",
    status: { en: "Controlled learning project", fr: "Projet d'apprentissage controle" },
    summary: {
      en: "Security-focused learning project studying Android device vulnerabilities and mitigation techniques in an ethical environment.",
      fr: "Projet d'apprentissage oriente securite: etude des vulnerabilites Android et des techniques de mitigation dans un cadre ethique.",
    },
    problem: {
      en: "Mobile devices can expose security weaknesses. The project focused on understanding attack vectors in a controlled setting and thinking through mitigations.",
      fr: "Les appareils mobiles peuvent exposer des faiblesses de securite. Le projet etudie les vecteurs d'attaque en cadre controle et les mitigations possibles.",
    },
    objectives: [
      { en: "Conduct security testing on an Android device in a controlled, ethical environment.", fr: "Mener des tests de securite sur un appareil Android dans un environnement controle et ethique." },
      { en: "Study vulnerabilities and attack vectors.", fr: "Etudier les vulnerabilites et vecteurs d'attaque." },
      { en: "Analyze weaknesses and propose mitigation techniques.", fr: "Analyser les faiblesses et proposer des techniques de mitigation." },
    ],
    role: {
      en: "Security learner documenting testing observations and mitigations.",
      fr: "Apprenant en securite documentant les observations et mitigations.",
    },
    technologies: ["Kali Linux", "Metasploit", "Android security", "Mitigation analysis"],
    dataset: {
      en: "No dataset. The project describes controlled device security testing.",
      fr: "Aucun jeu de donnees. Le projet decrit des tests de securite sur appareil controle.",
    },
    workflow: [
      { en: "Controlled lab setup", fr: "Mise en place controlee" },
      { en: "Vulnerability study", fr: "Etude des vulnerabilites" },
      { en: "Security weakness analysis", fr: "Analyse des faiblesses" },
      { en: "Mitigation recommendations", fr: "Recommandations de mitigation" },
    ],
    features: [
      { en: "Ethical, controlled security testing context.", fr: "Cadre de test ethique et controle." },
      { en: "Focus on defensive analysis and mitigation rather than exploit instructions.", fr: "Orientation defense et mitigation plutot qu'instructions d'exploitation." },
    ],
    approach: {
      en: "Cybersecurity awareness and information systems security practice using Kali Linux and Metasploit in a lab context.",
      fr: "Pratique de cybersecurite et securite des systemes d'information avec Kali Linux et Metasploit en contexte laboratoire.",
    },
    results: {
      en: "The project identified security weaknesses and proposed mitigation techniques. No report file was available to confirm detailed findings.",
      fr: "Le projet a identifie des faiblesses et propose des mitigations. Aucun rapport n'etait disponible pour confirmer les details.",
    },
    challenges: [
      { en: "Presenting cybersecurity work responsibly without operational attack steps.", fr: "Presenter un travail cybersecurite de maniere responsable sans etapes operationnelles d'attaque." },
    ],
    solutions: [
      { en: "Framed the project around ethical testing, weakness analysis, and mitigation.", fr: "Cadre le projet autour du test ethique, de l'analyse des faiblesses et de la mitigation." },
    ],
    lessons: [
      { en: "Security skill is strongest when paired with clear boundaries, documentation, and defensive recommendations.", fr: "La competence securite est plus solide avec des limites claires, de la documentation et des recommandations defensives." },
    ],
    github: { label: "Repository", href: "[ADD REPOSITORY OR REPORT URL]", status: "missing" },
    demo: { label: "Report", href: "[ADD REPORT LINK]", status: "missing" },
    evidence: { en: "Repository or report can be added when available.", fr: "Depot ou rapport peuvent etre ajoutes lorsqu'ils sont disponibles." },
    visualTone: "green",
  },
  {
    slug: "hotel-management-system-php",
    title: "Hotel Management System (PHP)",
    year: "2023",
    category: "Web Development",
    status: { en: "Completed academic project", fr: "Projet academique termine" },
    summary: {
      en: "Database-backed hotel management application built with PHP for rooms, reservations, and user handling.",
      fr: "Application de gestion d'hotel en PHP avec base de donnees pour chambres, reservations et utilisateurs.",
    },
    problem: {
      en: "Hotels need a structured system for managing rooms, reservations, and user data rather than relying on disconnected manual records.",
      fr: "Les hotels ont besoin d'un systeme structure pour gerer chambres, reservations et utilisateurs plutot que des enregistrements manuels disperses.",
    },
    objectives: [
      { en: "Develop a hotel management web application using PHP.", fr: "Developper une application web de gestion d'hotel avec PHP." },
      { en: "Implement room management, reservations, and user handling.", fr: "Implementer la gestion des chambres, reservations et utilisateurs." },
      { en: "Connect the system to a database for storage and retrieval.", fr: "Connecter le systeme a une base de donnees pour le stockage et la recuperation." },
    ],
    role: {
      en: "Student web developer building application features and database interactions.",
      fr: "Etudiant developpeur web responsable des fonctionnalites et interactions base de donnees.",
    },
    technologies: ["PHP", "Database", "HTML5", "Information systems"],
    dataset: {
      en: "Application data for rooms, reservations, and users. Database engine was not specified in the project material.",
      fr: "Donnees applicatives pour chambres, reservations et utilisateurs. Le moteur de base de donnees n'est pas precise dans les elements du projet.",
    },
    workflow: [
      { en: "User actions", fr: "Actions utilisateur" },
      { en: "PHP application logic", fr: "Logique applicative PHP" },
      { en: "Database persistence", fr: "Persistance en base de donnees" },
      { en: "Room and reservation views", fr: "Vues chambres et reservations" },
    ],
    features: [
      { en: "Room management.", fr: "Gestion des chambres." },
      { en: "Reservation handling.", fr: "Gestion des reservations." },
      { en: "User handling.", fr: "Gestion des utilisateurs." },
      { en: "Database storage and retrieval.", fr: "Stockage et recuperation en base de donnees." },
    ],
    approach: {
      en: "Traditional server-rendered PHP information-system application with database persistence.",
      fr: "Application de systeme d'information PHP classique avec persistance en base de donnees.",
    },
    results: {
      en: "Implemented the core management features in the project scope. No screenshots or deployment link were available.",
      fr: "Implementation des fonctionnalites principales du projet. Aucune capture ou URL de deploiement n'etait disponible.",
    },
    challenges: [
      { en: "Coordinating application state with persistent database records.", fr: "Coordonner l'etat applicatif avec les enregistrements persistants." },
    ],
    solutions: [
      { en: "Connected the PHP application to a database for reliable storage and retrieval.", fr: "Connexion de l'application PHP a une base de donnees pour un stockage et une recuperation fiables." },
    ],
    lessons: [
      { en: "Information systems need clear data models and predictable workflows before interface polish.", fr: "Les systemes d'information demandent des modeles de donnees clairs et des workflows previsibles avant le polish UI." },
    ],
    github: { label: "GitHub", href: "[ADD GITHUB URL]", status: "missing" },
    demo: { label: "Live demo", href: "[ADD LIVE DEMO URL]", status: "missing" },
    evidence: { en: "Repository or screenshots can be added when available.", fr: "Depot ou captures peuvent etre ajoutes lorsqu'ils sont disponibles." },
    visualTone: "amber",
  },
];

export const missingProjectMaterials = [
  "URL-Detect Pro malicious URL classifier",
  "Cyberattack data visualization dashboard",
  "Spam/ham, sentiment, or other ML notebooks",
  "Screenshots, notebooks, reports, model metrics, and live demos for older academic projects",
];
