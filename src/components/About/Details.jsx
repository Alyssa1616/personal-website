import React, { useState } from "react";
import "../../styles/Details.css";

const experiences = [
    {
    role: "Google · Software Engineering Intern",
    org: "Cambridge, MA",
    year: "May 2026 - Present",
    tag: "Industry",
    tagClass: "tag-i",
    desc: "Work on the YouTube Music Podcasts Team to improve podcast chapter viewing on the iOS app using C++.",
    chips: ["iOS", "C++"],
  },
  {
    role: "Google · Associate Software Developer Intern",
    org: "Sunnyvale, CA",
    year: "May 2025 - Aug 2025",
    tag: "Industry",
    tagClass: "tag-i",
    desc: "Integrated shared code layer into Gmail iOS to display security warning banners using Objective-C, Swift, and Java, improving consistency and maintainability for 50+ banner types and removing 800+ lines of code.",
    chips: ["iOS", "Swift", "Objective-C", "SwiftUI", "Java", "Testing"],
  },
  {
    role: "Brown University Women in Computer Science · Co-President",
    org: "Providence, RI",
    year: "Sep 2023 - Present",
    tag: "Community",
    tagClass: "tag-c",
    desc: "Partner with technology companies and faculty to host technical workshops and career panels for 400+ club members, as well as organize bonding events and mentorship programs to foster a tight-knit community.",
    chips: ["Leadership", "Mentorship"],
  },
  {
    role: "Computer Science Department at Brown University · Teaching Assistant",
    org: "Providence, RI",
    year: "Jan 2026 - May 2026",
    tag: "Teaching",
    tagClass: "tag-t",
    desc: "Support 200+ students in developing coding skills for the Program Design with Data Structures and Algorithms course by holding office hours and lab sections, grading assignments, and conducting code reviews.",
    chips: ["Java", "Python", "Teaching", "Mentorship"],
  },
  {
    role: "Computer Graphics Lab at Brown University · Research Assistant and Intern",
    org: "Providence, RI",
    year: "Feb 2024 - Jun 2025",
    tag: "Research",
    tagClass: "tag-r",
    desc: "Developed AI-powered educational tools with Professor Andy van Dam's graphics research group for Dash, a web-based application sponsored by Adobe for interacting with multimedia documents.",
    chips: ["React", "TypeScript", "Flask", "Python", "REST APIs", "Django", "MobX", "HTML", "CSS", "Node.js", "MongoDB","Github"],
  },
  {
    role: "Department of Computer Science and Linguistics at Boston University · Research Assistant",
    org: "Boston, MA",
    year: "Apr 2024 - Oct 2025",
    tag: "Research",
    tagClass: "tag-r",
    desc: "Worked as a research assistant in the Department of Computer Science and the Department of Linguistics to analyze the ability of large language models to track and update information as they move between locations, change state, and interact across a series of described events.",
    chips: ["Python", "Pandas", "TensorFlow", "LLMs", "Shell Scripting"],
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