import React, { useEffect, useRef } from "react";
import { perks } from "../constants/index";
import "./Services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* ─── Services Section ─── */
const Serveces = () => {
  const sectionRef = useRef(null);
  const pinnedRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const dotsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || !pinned || !cards.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Set initial states — all cards invisible except first
    gsap.set(cards, { opacity: 0, y: 60, scale: 0.94 });
    gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 });

    // Header fade-in
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      }
    );

    // Pin the entire section and scrub through cards
    const totalCards = cards.length;

    // Create a timeline that transitions between cards
    const tl = gsap.timeline({ paused: true });

    cards.forEach((card, i) => {
      if (i === 0) return; // first card is already visible

      // Outgoing card (i-1): slide + fade out
      tl.to(
        cards[i - 1],
        { opacity: 0, y: -50, scale: 0.92, duration: 1, ease: "power2.inOut" },
        i - 1
      );

      // Incoming card (i): slide + fade in
      tl.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.inOut" },
        i - 1
      );
    });

    // Update the active dot
    const updateDot = (index) => {
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        dot.classList.toggle("active", i === index);
      });
    };

    updateDot(0);

    // ScrollTrigger to pin and scrub the timeline
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${(totalCards - 1) * 100}%`,
      pin: pinned,
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress;
        tl.progress(progress);

        // Active dot
        const activeIndex = Math.round(progress * (totalCards - 1));
        updateDot(activeIndex);

        // Progress bar
        if (progressRef.current) {
          progressRef.current.style.width = `${progress * 100}%`;
        }
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="services-section" id="Services">
      <div className="services-grid-overlay" aria-hidden="true" />

      {/* Pinned viewport */}
      <div ref={pinnedRef} className="services-pinned">
        {/* Section header */}
        <div className="services-header" ref={headerRef}>
          <span className="services-eyebrow">What I Do</span>
          <h2 className="services-title">
            My <span className="services-title-accent">Services</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="services-progress-track" aria-hidden="true">
          <div className="services-progress-fill" ref={progressRef} />
        </div>

        {/* Cards stage — one visible at a time */}
        <div className="services-stage">
          {perks.map((perk, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card"
              style={{ "--card-index": index }}
            >
              <div className="service-card-glow" aria-hidden="true" />

              <div className="service-card-inner">
                {/* Left: icon */}
                <div className="service-card-left">
                  <div className="service-icon-wrap">
                    <img src={perk.img} alt={perk.title} className="service-icon" />
                    <div className="service-icon-ring" aria-hidden="true" />
                  </div>
                  <span className="service-num">{perk.num}</span>
                </div>

                {/* Right: text */}
                <div className="service-card-right">
                  <h3 className="service-card-title">{perk.title.replace("\\n", " ")}</h3>
                  <p className="service-card-desc">{perk.desc}</p>
                  <div className="service-card-bar">
                    <span
                      className="service-card-bar-fill"
                      style={{ "--fill": `${75 + (index * 5) % 25}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="service-card-corner" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="services-dots" aria-hidden="true">
          {perks.map((_, i) => (
            <div
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              className="services-dot"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serveces;
