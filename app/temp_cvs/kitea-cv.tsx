"use client";

import { useState } from "react";

export function KiteaCv() {
  const [printing, setPrinting] = useState(false);

  function savePdf() {
    setPrinting(true);
    window.setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 100);
  }

  return (
    <main className="kitea-page">
      <div className="kitea-toolbar">
        <span className="kitea-label">KITEA · Candidature spontanée</span>
        <button className="kitea-print" onClick={savePdf} type="button">
          {printing ? "Préparation…" : "Télécharger le CV · PDF"}
        </button>
      </div>

      <article className="kitea-sheet">
        <header className="kitea-header">
          <div>
            <p className="kitea-eyebrow">DATA SCIENCE · INTELLIGENCE ARTIFICIELLE · SYSTÈMES D’INFORMATION</p>
            <h1>Oualid Ait Alla</h1>
            <p className="kitea-subtitle">Candidature spontanée KITEA — Informatique, tech, digital & fonctions support</p>
          </div>
          <div className="kitea-contact">
            <span>Béni Mellal, Maroc</span>
            <a href="tel:+212609831277">+212 609 831 277</a>
            <a href="mailto:oualidaitalla18@gmail.com">oualidaitalla18@gmail.com</a>
            <a href="https://oualid-ait-alla.vercel.app">Portfolio</a>
            <a href="https://www.linkedin.com/in/aitalla-oualid-9797132bb/">LinkedIn</a>
            <a href="https://github.com/gimuser">GitHub</a>
          </div>
        </header>

        <section>
          <h2>Profil</h2>
          <p>Étudiant en dernière année de Master Data Science et Sécurité des Systèmes d’Information à l’Université Sultan Moulay Slimane, avec une expérience de stage en ingénierie IA et des projets en analyse de données, machine learning et applications numériques. Profil analytique, rigoureux et curieux, à l’aise avec la structuration de l’information et la résolution de problèmes. Souhaite contribuer aux équipes support, informatique/tech, systèmes d’information ou digitales de KITEA, en apportant ses compétences numériques et sa capacité à apprendre.</p>
        </section>

        <section>
          <h2>Formation</h2>
          <div className="kitea-entry">
            <div><strong>Master Data Science et Sécurité des Systèmes d’Information</strong><span>Université Sultan Moulay Slimane · Faculté Polydisciplinaire de Béni Mellal</span></div>
            <time>2025–2027 (prévu)</time>
          </div>
          <div className="kitea-entry">
            <div><strong>Licence en Data Science et Sécurité des Systèmes d’Information</strong><span>Université Sultan Moulay Slimane · Faculté Polydisciplinaire de Béni Mellal</span></div>
            <time>2025</time>
          </div>
          <div className="kitea-entry">
            <div><strong>DEUG Mathématiques et Informatique</strong><span>Université Sultan Moulay Slimane</span></div>
            <time>2024</time>
          </div>
        </section>

        <section>
          <h2>Expérience</h2>
          <div className="kitea-entry">
            <div><strong>Stagiaire ingénieur en intelligence artificielle · SPORTScore SAS</strong><span>Paris, France</span></div>
            <time>Août–oct. 2026 · 2 mois</time>
          </div>
          <p>Participation à des travaux et projets en intelligence artificielle, mobilisant l’analyse, la résolution de problèmes et des compétences de développement dans un environnement professionnel.</p>
        </section>

        <section>
          <h2>Compétences clés</h2>
          <ul className="kitea-skills">
            <li><strong>Analyse & données :</strong> Python, SQL, nettoyage de données, analyse exploratoire, préparation des variables, régression, évaluation de modèles et visualisation.</li>
            <li><strong>Systèmes et outils numériques :</strong> bases de données (MongoDB, SQLite), API REST, applications numériques et données structurées.</li>
            <li><strong>IA & automatisation :</strong> machine learning, PyTorch, intégration de LLM, RAG et traitement de documents.</li>
            <li><strong>Méthodes de travail :</strong> recherche scientifique, lecture d’articles techniques, documentation, résolution de problèmes et collaboration sur des projets.</li>
          </ul>
        </section>

        <section>
          <h2>Projets sélectionnés</h2>
          <div className="kitea-project">
            <div><strong>Car Price Prediction System</strong><span>Workflow de régression pour estimer des prix à partir de données structurées : nettoyage, analyse exploratoire, préparation des variables et évaluation de modèles.</span><em>Python · pandas · machine learning</em></div>
            <time>2025</time>
          </div>
          <div className="kitea-project">
            <div><strong>BachelorAI Tutor</strong><span>Assistant éducatif qui retrouve des passages pertinents dans des supports de cours et génère des réponses fondées sur les documents fournis.</span><em>TypeScript · React · Node.js · MongoDB · RAG · Ollama</em></div>
            <time>2026</time>
          </div>
          <div className="kitea-project">
            <div><strong>SOAR RL Agent</strong><span>Projet collaboratif d’apprentissage par renforcement visant à soutenir le triage d’alertes et la répartition des décisions dans un workflow SOC.</span><em>Python · FastAPI · TypeScript · apprentissage par renforcement</em></div>
            <time>2026</time>
          </div>
        </section>

        <section className="kitea-languages">
          <h2>Langues</h2>
          <p><strong>Arabe :</strong> langue maternelle <span>·</span> <strong>Français :</strong> intermédiaire <span>·</span> <strong>Anglais :</strong> intermédiaire <span>·</span> <strong>Espagnol :</strong> débutant</p>
        </section>
      </article>

      <style jsx global>{`
        .kitea-page { min-height: 100vh; background: #f3f4f6; color: #20252d; padding: 28px 16px 48px; font-family: Arial, Helvetica, sans-serif; }
        .kitea-toolbar { max-width: 900px; margin: 0 auto 18px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
        .kitea-label { color:#535d6b; font-size:12px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; }
        .kitea-print { border:0; border-radius:7px; padding:12px 17px; background:#20252d; color:white; font-weight:700; font-size:13px; cursor:pointer; }
        .kitea-print:hover { background:#3b4654; }
        .kitea-sheet { max-width:900px; margin:0 auto; background:white; padding:42px 48px; box-shadow:0 8px 35px rgba(20,30,45,.09); }
        .kitea-header { display:grid; grid-template-columns:1fr auto; gap:28px; padding-bottom:22px; border-bottom:2px solid #252b34; }
        .kitea-eyebrow { font-size:9px; line-height:1.5; font-weight:700; letter-spacing:.1em; color:#586678; margin:0 0 10px; }
        .kitea-header h1 { font-size:34px; line-height:1.05; margin:0 0 9px; letter-spacing:-.04em; color:#171c23; }
        .kitea-subtitle { margin:0; font-size:12px; line-height:1.5; color:#515b69; max-width:470px; }
        .kitea-contact { display:flex; flex-direction:column; align-items:flex-end; gap:5px; font-size:10px; line-height:1.3; color:#444d59; }
        .kitea-contact a { color:#2b6ca3; text-decoration:none; }
        .kitea-sheet section { margin-top:19px; }
        .kitea-sheet h2 { font-size:11px; letter-spacing:.11em; text-transform:uppercase; color:#26384b; border-bottom:1px solid #cfd5dc; padding-bottom:6px; margin:0 0 10px; }
        .kitea-sheet p { font-size:11px; line-height:1.55; margin:0; color:#343b45; }
        .kitea-entry,.kitea-project { display:flex; justify-content:space-between; gap:18px; margin:0 0 10px; font-size:11px; }
        .kitea-entry div,.kitea-project div { min-width:0; display:flex; flex-direction:column; gap:3px; }
        .kitea-entry strong,.kitea-project strong { font-size:11px; line-height:1.35; color:#20252d; }
        .kitea-entry span,.kitea-project span { font-size:10.5px; line-height:1.45; color:#454e59; }
        .kitea-entry time,.kitea-project time { white-space:nowrap; text-align:right; font-size:10px; color:#5c6673; }
        .kitea-project em { font-style:normal; color:#526b82; font-size:10px; line-height:1.4; }
        .kitea-skills { list-style:none; margin:0; padding:0; display:grid; gap:6px; }
        .kitea-skills li { font-size:10.5px; line-height:1.45; color:#343b45; }
        .kitea-skills strong { color:#20252d; }
        .kitea-languages p { font-size:10.5px; }
        .kitea-languages span { color:#9aa2ad; padding:0 4px; }
        @media (max-width:650px) {
          .kitea-page { padding:14px 8px 28px; }
          .kitea-toolbar { align-items:flex-start; }
          .kitea-label { padding-top:10px; font-size:10px; }
          .kitea-print { padding:10px 12px; font-size:11px; }
          .kitea-sheet { padding:25px 22px; }
          .kitea-header { grid-template-columns:1fr; gap:16px; }
          .kitea-contact { align-items:flex-start; }
          .kitea-header h1 { font-size:30px; }
          .kitea-entry,.kitea-project { gap:8px; }
        }
        @media print {
          @page { size:A4; margin:10mm; }
          body { background:white !important; }
          .kitea-page { min-height:0 !important; background:white !important; padding:0 !important; }
          .kitea-toolbar { display:none !important; }
          .kitea-sheet { width:100% !important; max-width:none !important; margin:0 !important; padding:0 !important; box-shadow:none !important; }
          .kitea-sheet section { break-inside:avoid; margin-top:13px; }
          .kitea-header { padding-bottom:15px; }
          .kitea-header h1 { font-size:29px; }
          .kitea-sheet p { font-size:10px; line-height:1.4; }
          .kitea-entry,.kitea-project { margin-bottom:7px; }
          .kitea-skills { gap:4px; }
          a { color:#2b6ca3 !important; text-decoration:none !important; }
        }
      `}</style>
    </main>
  );
}
