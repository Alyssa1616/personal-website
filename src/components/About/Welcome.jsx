import React, { useEffect, useState } from "react";
import "../../styles/Welcome.css";

const DESCRIPTION = "I'm a rising senior at Brown University studying Computer Science.";

const Welcome = () => {
  const hasSeenSplash = sessionStorage.getItem("splashSeen");

  const [splashHidden, setSplashHidden] = useState(!!hasSeenSplash);
  const [animate, setAnimate] = useState(!!hasSeenSplash);
  const [typed, setTyped] = useState(hasSeenSplash ? DESCRIPTION : "");
  const [showCursor, setShowCursor] = useState(false);
  const [showButtons, setShowButtons] = useState(!!hasSeenSplash);

  useEffect(() => {
    const circles = document.querySelectorAll(".hero-circle[data-speed]");
    const onScroll = () => {
      const scrollY = window.scrollY;
      circles.forEach((circle) => {
        const speed = parseFloat(circle.dataset.speed);
        circle.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (hasSeenSplash) return () => window.removeEventListener("scroll", onScroll);

    sessionStorage.setItem("splashSeen", "true");
    const splashTimer = setTimeout(() => {
      setSplashHidden(true);
      setTimeout(() => {
        setAnimate(true);
        setTimeout(() => {
          setShowCursor(true);
          let i = 0;
          const iv = setInterval(() => {
            i++;
            setTyped(DESCRIPTION.slice(0, i));
            if (i >= DESCRIPTION.length) {
              clearInterval(iv);
              setTimeout(() => setShowButtons(true), 200);
            }
          }, 38);
        }, 700);
      }, 600);
    }, 2200);

    return () => {
      clearTimeout(splashTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {!hasSeenSplash && (
        <div className={`splash ${splashHidden ? "splash-hidden" : ""}`}>
          <div className="splash-name">Alyssa Feinberg</div>
          <div className="splash-sub">welcome to my portfolio</div>
          <div className="splash-bar-wrap">
            <div className="splash-bar" />
          </div>
        </div>
      )}

      <section className="hero-section">
        <div className="hero-circle hc1" data-speed="0.15" />
        <div className="hero-circle hc2" data-speed="0.08" />
        <div className={`hero-inner anim ${animate ? "go" : ""}`}>
          <h1 className="hero-name">Alyssa Feinberg</h1>
          <p className="hero-desc">
            {typed}
            {showCursor && <span className="welcome-cursor" />}
          </p>
          <div className={`hero-btns ${showButtons ? "visible" : ""}`}>
            <a
              href="https://www.linkedin.com/in/alyssa-feinberg-23a38b2a8"
              className="hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:alyssa_feinberg@brown.edu" className="hero-btn">
              Email Me
            </a>
            <a href="/Alyssa_Feinberg_Resume_2025.pdf" className="hero-btn" download>
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
