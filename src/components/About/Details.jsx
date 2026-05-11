import React, { useState } from "react";
import "../../styles/Details.css";

const experiences = [
    {
    role: "Google · Software Engineering Intern",
    org: "Cambridge, MA",
    year: "May 2026 - Present",
    tag: "Industry",
    tagClass: "tag-i",
    desc: "Built security warning banners for the Gmail iOS app — a feature shipped to millions of users. Worked end-to-end from design through QA on a tight production timeline.",
    chips: ["iOS / Swift", "Security", "Production-scale"],
  },
  {
    role: "Google · Associate Software Developer Intern",
    org: "Sunnyvale, CA",
    year: "May 2025 - Aug 2025",
    tag: "Industry",
    tagClass: "tag-i",
    desc: "Built security warning banners for the Gmail iOS app — a feature shipped to millions of users. Worked end-to-end from design through QA on a tight production timeline.",
    chips: ["iOS / Swift", "Security", "Production-scale"],
  },
  {
    role: "Brown University Women in Computer Science · Co-President",
    org: "Providence, RI",
    year: "Sep 2023 - Present",
    tag: "Community",
    tagClass: "tag-c",
    desc: "Led teams of young women to design and build their own apps, organized coding workshops, and personally built two language-learning apps.",
    chips: ["Leadership", "App Dev", "Language Learning", "Mentorship"],
  },
  {
    role: "Computer Science Department at Brown University · Teaching Assistant",
    org: "Providence, RI",
    year: "Jan 2026 - May 2026",
    tag: "Teaching",
    tagClass: "tag-t",
    desc: "Supported students learning Java and CS fundamentals. Held office hours, graded assignments, and helped debug a truly heroic number of for-loops.",
    chips: ["Java", "OOP", "Mentorship"],
  },
  {
    role: "Computer Graphics Lab at Brown University · Research Assistant and Intern",
    org: "Providence, RI",
    year: "Feb 2024 - Jun 2025",
    tag: "Research",
    tagClass: "tag-r",
    desc: "Developed AI-driven learning tools for Dash, Adobe's platform for interacting with and analyzing multimedia documents.",
    chips: ["AI / ML", "Adobe Dash", "HCI", "Web Dev"],
  },
  {
    role: "Department of Computer Science and Linguistics at Boston University · Research Assistant",
    org: "Boston, MA",
    year: "Apr 2024 - Oct 2025",
    tag: "Research",
    tagClass: "tag-r",
    desc: "Evaluated LLMs' ability to track entity state changes across discourse — research at the intersection of NLP and linguistics.",
    chips: ["NLP", "LLMs", "Linguistics", "Evaluation"],
  },
  {
    role: "Computer Science Department at Brown University · Teaching Assistant",
    org: "Providence, RI",
    year: "Aug 2024 - Dec 2024",
    tag: "Teaching",
    tagClass: "tag-t",
    desc: "Supported students learning Java and CS fundamentals. Held office hours, graded assignments, and helped debug a truly heroic number of for-loops.",
    chips: ["Java", "OOP", "Mentorship"],
  },
  {
    role: "LEX Language Project · Coding & Language Intern",
    org: "Cambridge, MA",
    year: "Jun 2021 - Jun 2023",
    tag: "Industry",
    tagClass: "tag-i",
    desc: "Redesigned the organization's website to improve accessibility and inclusivity.",
    chips: ["Web Design", "Accessibility"],
  },
  {
    role: "Technovation Girls · National Ambassador, President Newton Chapter, Team Leader, and Competition Judge ",
    org: "Newton, MA",
    year: "Sep 2019 - Present",
    tag: "Community",
    tagClass: "tag-c",
    desc: "Led teams of young women to design and build their own apps, organized coding workshops, and personally built two language-learning apps.",
    chips: ["Leadership", "App Dev", "Language Learning", "Mentorship"],
  },
];

const Details = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div className="details-page">
      
      
      <div className="details-circle dc4" />
      <div className="details-circle dc2" />
      
      <div className="details-circle dc4" />
      <div className="details-circle dc2" />
      <div className="details-circle dc3" />

      <div className="details-header">
        <p className="details-eyebrow">What I've done</p>
        <h2 className="details-title">Experience</h2>
      </div>

      <div className="details-track">
        <div className="details-line" />
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`details-item ${activeIndex === i ? "active" : ""}`}
            onClick={() => toggle(i)}
          >
            <div className="details-dot" />
            <div className="details-card">
              <div className="details-card-top">
                <div className="details-role">{exp.role}</div>
                <div className="details-meta">
                  <span className="details-year">{exp.year}</span>
                  <span className={`details-tag ${exp.tagClass}`}>{exp.tag}</span>
                </div>
              </div>
              <div className="details-org">{exp.org}</div>
              {/* Always rendered, CSS controls visibility */}
              <div className="details-body">
                <p className="details-desc">{exp.desc}</p>
                <div className="details-chips">
                  {exp.chips.map((chip, j) => (
                    <span key={j} className="details-chip">{chip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="details-hint">click any role to expand</p>
    </div>
  );
};

export default Details;