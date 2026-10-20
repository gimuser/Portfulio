"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

export function KiteaCv() {
  const [printing, setPrinting] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  function savePdf() {
    setPrinting(true);
    window.setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 100);
  }

  const contactRows = [
    [
      { key: "location", text: language === "fr" ? "Béni Mellal, Maroc" : "Beni Mellal, Morocco", href: profile.locationMapHref },
      { key: "email", text: profile.email, href: "mailto:" + profile.email },
      { key: "phone", text: profile.phone, href: "tel:" + profile.phone.replace(/\s+/g, "") },
    ],
    [
      { key: "portfolio", text: "oualid-ait-alla.vercel.app", href: profile.links.website.href },
      { key: "linkedin", text: "LinkedIn", href: profile.links.linkedin.href },
      { key: "github", text: "GitHub", href: profile.links.github.href },
    ],
  ];

  return (
    <div className="cv-page kitea-cv-page" id="content">
      <div className="cv-controls no-print kitea-controls">
        <span className="eyebrow" style={{ alignSelf: "center", margin: 0 }}>
          {language === "fr" ? "KITEA · Candidature spontanée" : "KITEA · Spontaneous application"}
        </span>
        <div className="kitea-actions"><div className="segmented" aria-label="CV language"><button type="button" className={language === "fr" ? "active" : ""} aria-pressed={language === "fr"} onClick={() => setLanguage("fr")}>FR</button><button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button></div><button className="button" type="button" onClick={savePdf}>
          <Download size={18} />
          {printing ? (language === "fr" ? "Préparation…" : "Preparing…") : (language === "fr" ? "Imprimer / Enregistrer en PDF" : "Print / Save as PDF")}
        </button></div>
      </div>

      <article className="cv-sheet kitea-cv-sheet" lang={language}>
        <header className="cv-header">
          <Image
            className="cv-photo"
            src="/images/oualid-ait-alla.jpg"
            alt={language === "fr" ? "Portrait de Oualid Ait Alla" : "Portrait of Oualid Ait Alla"}
            width={110}
            height={138}
            priority
          />
          <div className="cv-heading">
            <h1>{profile.cvName}</h1>
            <p className="cv-role">
              {language === "fr" ? "Data Science · Intelligence artificielle · Systèmes d’information" : "Data Science · Artificial Intelligence · Information Systems"}
            </p>
            <address className="cv-contact">
              {contactRows.map((row, rowIndex) => (
                <span className="cv-contact-row" key={rowIndex}>
                  {row.map((item) => (
                    <a key={item.key} href={item.href}>
                      {item.text}
                    </a>
                  ))}
                </span>
              ))}
            </address>
          </div>
        </header>

        <section>
          <h2>{language === "fr" ? "Profil professionnel" : "Professional Summary"}</h2>
          <p>
            {language === "fr" ? "Étudiant en dernière année de Master Data Science et Sécurité des Systèmes d’Information à l’Université Sultan Moulay Slimane, avec une expérience de stage en ingénierie IA et des projets en analyse de données, machine learning et applications numériques. Profil analytique, rigoureux et curieux, souhaitant contribuer aux équipes informatique, systèmes d’information, digitales ou support de KITEA." : "Final-year Master’s student in Data Science and Information Systems Security at Sultan Moulay Slimane University, with AI engineering internship experience and projects in data analysis, machine learning, and digital applications. Analytical, detail-oriented, and curious, seeking to contribute to KITEA’s IT, information systems, digital, or support teams."}
          </p>
        </section>

        <section>
          <h2>{language === "fr" ? "Formation" : "Education"}</h2>
          <div className="cv-list">
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>{language === "fr" ? "Master Data Science et Sécurité des Systèmes d’Information" : "Master’s in Data Science and Information Systems Security"}</h3>
                <strong>{language === "fr" ? "2025–2027 (prévu)" : "2025–2027 (expected)"}</strong>
              </div>
              <p className="cv-muted">{language === "fr" ? "Université Sultan Moulay Slimane · Faculté Polydisciplinaire de Béni Mellal" : "Sultan Moulay Slimane University · Polydisciplinary Faculty of Beni Mellal"}</p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>{language === "fr" ? "Licence en Data Science et Sécurité des Systèmes d’Information" : "Bachelor’s in Data Science and Information Systems Security"}</h3>
                <strong>2025</strong>
              </div>
              <p className="cv-muted">{language === "fr" ? "Université Sultan Moulay Slimane · Faculté Polydisciplinaire de Béni Mellal" : "Sultan Moulay Slimane University · Polydisciplinary Faculty of Beni Mellal"}</p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>{language === "fr" ? "DEUG Mathématiques et Informatique" : "DEUG in Mathematics and Computer Science"}</h3>
                <strong>2024</strong>
              </div>
              <p className="cv-muted">{language === "fr" ? "Université Sultan Moulay Slimane" : "Sultan Moulay Slimane University"}</p>
            </div>
          </div>
        </section>

        <section>
          <h2>{language === "fr" ? "Expérience professionnelle" : "Professional Experience"}</h2>
          <div className="cv-entry">
            <div className="cv-entry-heading">
              <h3>{language === "fr" ? "Stagiaire ingénieur en intelligence artificielle · SPORTScore SAS" : "AI Engineering Intern · SPORTScore SAS"}</h3>
              <strong>{language === "fr" ? "Août–oct. 2026" : "Aug–Oct 2026"}</strong>
            </div>
            <p className="cv-muted">{language === "fr" ? "Paris, France · 2 mois" : "Paris, France · 2 months"}</p>
            <p>
              {language === "fr" ? "Participation à des travaux et projets en intelligence artificielle, mobilisant l’analyse, la résolution de problèmes et des compétences techniques dans un environnement professionnel." : "Contributed to AI-related technical work and projects, applying analytical thinking, problem-solving, and technical skills in a professional environment."}
            </p>
          </div>
        </section>

        <section>
          <h2>{language === "fr" ? "Compétences techniques" : "Technical Skills"}</h2>
          <div className="cv-skill-grid">
            <p>
              <strong>{language === "fr" ? "Analyse & données" : "Data Analysis"}:</strong> {language === "fr" ? "Python, SQL, nettoyage de données, analyse exploratoire, préparation des variables, régression, évaluation de modèles et visualisation." : "Python, SQL, data cleaning, exploratory data analysis, feature preparation, regression, model evaluation, and visualization."}
            </p>
            <p>
              <strong>{language === "fr" ? "Systèmes d’information" : "Information Systems"}:</strong> {language === "fr" ? "Bases de données (MongoDB, SQLite), API REST, données structurées et validation de schémas JSON." : "Databases (MongoDB, SQLite), REST APIs, structured data, and JSON schema validation."}
            </p>
            <p>
              <strong>{language === "fr" ? "IA & automatisation" : "AI & Automation"}:</strong> {language === "fr" ? "Machine learning, PyTorch, intégration de LLM, RAG, prompt engineering, traitement de documents, quantification de modèles et validation structurée des sorties." : "Machine learning, PyTorch, LLM integration, RAG, prompt engineering, document processing, model quantization, and structured output validation."}
            </p>
            <p>
              <strong>{language === "fr" ? "Méthodes de travail" : "Research & Collaboration"}:</strong> recherche scientifique, lecture
              d’articles techniques, documentation, résolution de problèmes et
              collaboration sur des projets.
            </p>
          </div>
        </section>

        <section>
          <h2>{language === "fr" ? "Projets sélectionnés" : "Selected Projects"}</h2>
          <div className="cv-list">
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>Car Price Prediction System</h3>
                <strong>2025</strong>
              </div>
              <p>
                {language === "fr" ? "Workflow de régression pour estimer des prix à partir de données structurées : nettoyage, analyse exploratoire, préparation des variables et évaluation de modèles." : "Regression workflow for estimating prices from structured data, covering data cleaning, exploratory analysis, feature preparation, and model evaluation."}
              </p>
              <small><strong>{language === "fr" ? "Technologies" : "Technologies"}:</strong> Python, pandas, machine learning</small>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>BachelorAI Tutor</h3>
                <strong>2026</strong>
              </div>
              <p>
                {language === "fr" ? "Assistant éducatif qui retrouve des passages pertinents dans des supports de cours et génère des réponses fondées sur les documents fournis." : "Educational assistant that retrieves relevant passages from course materials and generates answers grounded in the provided documents."}
              </p>
              <small><strong>{language === "fr" ? "Technologies" : "Technologies"}:</strong> TypeScript, React, Node.js, MongoDB, RAG, Ollama</small>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>SOAR RL Agent</h3>
                <strong>2026</strong>
              </div>
              <p>
                {language === "fr" ? "Projet collaboratif d’apprentissage par renforcement visant à soutenir le triage d’alertes et la répartition des décisions dans un workflow SOC." : "Collaborative reinforcement-learning project designed to support security alert triage and decision allocation in a SOC workflow."}
              </p>
              <small><strong>{language === "fr" ? "Technologies" : "Technologies"}:</strong> Python, FastAPI, TypeScript, {language === "fr" ? "apprentissage par renforcement" : "reinforcement learning"}</small>
            </div>
          </div>
        </section>

        <section>
          <h2>{language === "fr" ? "Langues" : "Languages"}</h2>
          <p>
            {language === "fr" ? <><strong>Arabe :</strong> langue maternelle · <strong>Français :</strong> intermédiaire · <strong>Anglais :</strong> intermédiaire · <strong>Espagnol :</strong> débutant</> : <><strong>Arabic:</strong> Native · <strong>French:</strong> Intermediate · <strong>English:</strong> Intermediate · <strong>Spanish:</strong> Beginner</>}
          </p>
        </section>
      </article>
      <style jsx global>{`
        .kitea-cv-page { padding: 1rem 0 2rem; }
        .kitea-controls { width:min(900px,calc(100% - 2rem)); margin:0 auto .8rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; flex-wrap:wrap; }
        .kitea-actions { display:flex; align-items:center; gap:.65rem; flex-wrap:wrap; }
        .kitea-cv-sheet { width:min(900px,calc(100% - 2rem)); padding:1.15rem 1.5rem; font-size:.8rem; line-height:1.28; }
        .kitea-cv-sheet .cv-header { gap:1rem; padding-bottom:.55rem; margin-bottom:.55rem; }
        .kitea-cv-sheet .cv-header h1 { font-size:1.85rem; }
        .kitea-cv-sheet .cv-contact { margin-top:.3rem; gap:.12rem; font-size:.62rem; }
        .kitea-cv-sheet section { margin-top:.48rem; break-inside:auto; }
        .kitea-cv-sheet h2 { margin-bottom:.28rem; padding-bottom:.12rem; font-size:.78rem; }
        .kitea-cv-sheet h3,.kitea-cv-sheet p { margin-bottom:.12rem; }
        .kitea-cv-sheet h3 { font-size:.82rem; line-height:1.2; }
        .kitea-cv-sheet p,.kitea-cv-sheet small { line-height:1.25; }
        .kitea-cv-sheet .cv-list { gap:.28rem; }
        .kitea-cv-sheet .cv-entry-heading { gap:.5rem; }
        .kitea-cv-sheet .cv-entry-heading>strong:last-child { font-size:.72rem; }
        .kitea-cv-sheet .cv-contact-row a,.kitea-cv-sheet a { color:#175a9b; text-decoration:underline; text-underline-offset:1px; }
        @media(max-width:680px) {
          .kitea-cv-sheet { width:calc(100% - 1rem); padding:1rem; font-size:.82rem; }
          .kitea-cv-sheet .cv-header { grid-template-columns:76px minmax(0,1fr); gap:.65rem; }
          .kitea-cv-sheet .cv-photo { width:76px; height:96px; }
          .kitea-cv-sheet .cv-header h1 { font-size:1.4rem; }
          .kitea-cv-sheet .cv-contact-row { flex-wrap:wrap; }
          .kitea-cv-sheet .cv-contact-row>* { white-space:normal; overflow-wrap:anywhere; }
        }
        @page { size:A4; margin:8mm; }
        @media print {
          html,body { background:#fff!important; color:#111!important; }
          .kitea-cv-page { padding:0!important; margin:0!important; }
          .kitea-controls,.cv-controls,.cv-floating-actions,.site-header,.footer { display:none!important; }
          .kitea-cv-sheet { width:100%!important; max-width:none!important; min-height:281mm!important; box-sizing:border-box!important; display:flex!important; flex-direction:column!important; justify-content:flex-start!important; margin:0!important; padding:0!important; box-shadow:none!important; border:0!important; font-size:8.3pt!important; line-height:1.23!important; }
          .kitea-cv-sheet > section:last-child { margin-top:auto!important; padding-top:2.2mm!important; }
          .kitea-cv-sheet .cv-header { gap:7mm!important; margin-bottom:2.5mm!important; padding-bottom:2.5mm!important; }
          .kitea-cv-sheet .cv-photo { width:25mm!important; height:31mm!important; }
          .kitea-cv-sheet .cv-header h1 { font-size:18pt!important; }
          .kitea-cv-sheet .cv-contact { font-size:6.8pt!important; }
          .kitea-cv-sheet section { margin-top:2.2mm!important; }
          .kitea-cv-sheet h2 { font-size:8.8pt!important; margin-bottom:1.2mm!important; padding-bottom:.6mm!important; }
          .kitea-cv-sheet h3 { font-size:8.1pt!important; line-height:1.2!important; }
          .kitea-cv-sheet p,.kitea-cv-sheet small { line-height:1.22!important; }
          .kitea-cv-sheet .cv-list { gap:1.3mm!important; }
          .kitea-cv-sheet section,.kitea-cv-sheet .cv-entry { break-inside:avoid; }
          .kitea-cv-sheet a { color:#175a9b!important; text-decoration:underline!important; }
        }
      `}</style>
    </div>
  );
}
