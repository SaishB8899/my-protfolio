import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionIds = ["home", "about", "skills", "projects", "contact"];

const canUseDOM = typeof window !== "undefined" && typeof document !== "undefined";

function getMediaQueryMatch(query) {
  if (!canUseDOM || typeof window.matchMedia !== "function") {
    return false;
  }

  return window.matchMedia(query).matches;
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" }
    ],
    []
  );

  useEffect(() => {
    if (!canUseDOM || typeof IntersectionObserver !== "function") {
      return undefined;
    }

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -35% 0px"
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canUseDOM) {
      return undefined;
    }

    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const canTiltCards =
      getMediaQueryMatch("(prefers-reduced-motion: no-preference)") &&
      getMediaQueryMatch("(hover: hover)") &&
      getMediaQueryMatch("(pointer: fine)");

    if (!canTiltCards) {
      return undefined;
    }

    const cards = document.querySelectorAll(".tilt-card");
    const cleanups = [];

    cards.forEach((card) => {
      const handleMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = (0.5 - y / rect.height) * 10;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      };

      const handleLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    if (!canUseDOM || !document.body) {
      return undefined;
    }

    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigate = (sectionId) => {
    if (!canUseDOM) {
      setIsMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        onNavigate={handleNavigate}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
      />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects onNavigate={handleNavigate} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
