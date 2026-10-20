"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

export function KiteaCv() {
  const [printing, setPrinting] = useState(false);

  function savePdf() {
    setPrinting(true);
    window.setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 100);
  }

  const contactRows = [
    [
      { key: "location", text: "Béni Mellal, Maroc", href: profile.locationMapHref },
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
    <div className="cv-page" id="content">
      <div className="cv-controls no-print">
        <span className="eyebrow" style={{ alignSelf: "center", margin: 0 }}>
          KITEA · Candidature spontanée
        </span>
        <button className="button" type="button" onClick={savePdf}>
          <Download size={18} />
          {printing ? "Préparation…" : "Imprimer / Enregistrer en PDF"}
        </button>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <Image
            className="cv-photo"
            src="/images/oualid-ait-alla.jpg"
            alt="Portrait de Oualid Ait Alla"
            width={110}
            height={138}
            priority
          />
          <div className="cv-heading">
            <h1>{profile.cvName}</h1>
            <p className="cv-role">
              Data Science · Intelligence artificielle · Systèmes d’information
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
          <h2>Profil professionnel</h2>
          <p>
            Étudiant en dernière année de Master Data Science et Sécurité des Systèmes
            d’Information à l’Université Sultan Moulay Slimane, avec une expérience de
            stage en ingénierie IA et des projets en analyse de données, machine learning
            et applications numériques. Profil analytique, rigoureux et curieux, à l’aise
            avec la structuration de l’information et la résolution de problèmes. Souhaite
            contribuer aux équipes informatique, systèmes d’information, digitales ou
            support de KITEA.
          </p>
        </section>

        <section>
          <h2>Formation</h2>
          <div className="cv-list">
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>Master Data Science et Sécurité des Systèmes d’Information</h3>
                <strong>2025–2027 (prévu)</strong>
              </div>
              <p className="cv-muted">
                Université Sultan Moulay Slimane · Faculté Polydisciplinaire de Béni Mellal
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>Licence en Data Science et Sécurité des Systèmes d’Information</h3>
                <strong>2025</strong>
              </div>
              <p className="cv-muted">
                Université Sultan Moulay Slimane · Faculté Polydisciplinaire de Béni Mellal
              </p>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>DEUG Mathématiques et Informatique</h3>
                <strong>2024</strong>
              </div>
              <p className="cv-muted">Université Sultan Moulay Slimane</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Expérience professionnelle</h2>
          <div className="cv-entry">
            <div className="cv-entry-heading">
              <h3>Stagiaire ingénieur en intelligence artificielle · SPORTScore SAS</h3>
              <strong>Août–oct. 2026</strong>
            </div>
            <p className="cv-muted">Paris, France · 2 mois</p>
            <p>
              Participation à des travaux et projets en intelligence artificielle,
              mobilisant l’analyse, la résolution de problèmes et des compétences
              techniques dans un environnement professionnel.
            </p>
          </div>
        </section>

        <section>
          <h2>Compétences techniques</h2>
          <div className="cv-skill-grid">
            <p>
              <strong>Analyse & données :</strong> Python, SQL, nettoyage de données,
              analyse exploratoire, préparation des variables, régression, évaluation de
              modèles et visualisation.
            </p>
            <p>
              <strong>Systèmes d’information :</strong> bases de données (MongoDB,
              SQLite), API REST, données structurées et validation de schémas JSON.
            </p>
            <p>
              <strong>IA & automatisation :</strong> machine learning, PyTorch,
              intégration de LLM, RAG, prompt engineering, traitement de documents,
              quantification de modèles et validation structurée des sorties.
            </p>
            <p>
              <strong>Méthodes de travail :</strong> recherche scientifique, lecture
              d’articles techniques, documentation, résolution de problèmes et
              collaboration sur des projets.
            </p>
          </div>
        </section>

        <section>
          <h2>Projets sélectionnés</h2>
          <div className="cv-list">
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>Car Price Prediction System</h3>
                <strong>2025</strong>
              </div>
              <p>
                Workflow de régression pour estimer des prix à partir de données
                structurées : nettoyage, analyse exploratoire, préparation des variables
                et évaluation de modèles.
              </p>
              <small><strong>Technologies :</strong> Python, pandas, machine learning</small>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>BachelorAI Tutor</h3>
                <strong>2026</strong>
              </div>
              <p>
                Assistant éducatif qui retrouve des passages pertinents dans des supports
                de cours et génère des réponses fondées sur les documents fournis.
              </p>
              <small><strong>Technologies :</strong> TypeScript, React, Node.js, MongoDB, RAG, Ollama</small>
            </div>
            <div className="cv-entry">
              <div className="cv-entry-heading">
                <h3>SOAR RL Agent</h3>
                <strong>2026</strong>
              </div>
              <p>
                Projet collaboratif d’apprentissage par renforcement visant à soutenir le
                triage d’alertes et la répartition des décisions dans un workflow SOC.
              </p>
              <small><strong>Technologies :</strong> Python, FastAPI, TypeScript, apprentissage par renforcement</small>
            </div>
          </div>
        </section>

        <section>
          <h2>Langues</h2>
          <p>
            <strong>Arabe :</strong> langue maternelle · <strong>Français :</strong>{" "}
            intermédiaire · <strong>Anglais :</strong> intermédiaire ·{" "}
            <strong>Espagnol :</strong> débutant
          </p>
        </section>
      </article>
    </div>
  );
}
