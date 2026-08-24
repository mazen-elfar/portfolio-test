import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../components/Projects.css";

const projectsData = [
  {
    id: "warm-touch",
    title: "Warm Touch E-Commerce",
    category: "E-Commerce",
    image: "images/warm.png",
    description:
      "A fully functional e-commerce platform designed for handcrafted products. Includes product browsing, category management, shopping cart functionality, secure checkout, and an intuitive store administration system.",
    link: "https://www.warmtotuch.store/",
    tech: ["Full-Stack", "E-Commerce", "Admin Dashboard", "REST API"],
    featured: true,
  },
  {
    id: "focus",
    title: "Focus Power Generation",
    category: "Corporate",
    image: "images/focus.png",
    description:
      "A premium corporate web platform built for a leading power generation company, featuring modern UI/UX, responsive layouts, advanced performance optimization, SEO best practices, and a professional showcase of generators and industrial energy solutions.",
    link: "https://focus-five-gamma.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vite", "SEO Optimized", "Performance"],
    featured: false,
  },
  {
    id: "al-hurriya",
    title: "Al-Hurriya Corporate",
    category: "Corporate",
    image: "media/Al-Hurriya.png",
    description:
      "A modern corporate website developed with a strong focus on high speed performance, responsive design, and intuitive user navigation across desktop and mobile devices.",
    link: "https://al-horria.com/home",
    tech: ["React", "HTML5/CSS3", "JavaScript", "Responsive Design"],
    featured: false,
  },
  {
    id: "coffee-shop",
    title: "Artisanal Coffee Shop",
    category: "Web App",
    image: "/images/project3.png",
    description:
      "An interactive landing page and menu application for an artisanal coffee roastery, featuring dynamic beverage ordering showcases and rich visual aesthetics.",
    link: "https://mazen-elfar.github.io/coffee/",
    tech: ["HTML5", "CSS3", "JavaScript", "UI Animations"],
    featured: false,
  },
  {
    id: "shoes-store",
    title: "Footwear Storefront",
    category: "E-Commerce",
    image: "/images/project2.png",
    description:
      "A dynamic footwear e-commerce storefront with interactive product filtering, gallery previews, cart state management, and modern responsive styling.",
    link: "https://mazen-elfar.github.io/shoes-store/",
    tech: ["JavaScript", "CSS Grid", "E-Commerce UI", "Responsive"],
    featured: false,
  },
  {
  id: "bundle-builder",
  title: "Bundle Builder",
  category: "E-Commerce",
  image: "/images/bundelbulder.png",
  description:
    "A production-style bundle builder recreated from Figma using React and TypeScript, with reusable components, interactive product selection, variant and quantity controls, multi-step configuration, and responsive Tailwind CSS layouts.",
  link: "https://bundle-builder-three.vercel.app/",
  tech: ["React", "TypeScript", "Tailwind CSS", "Figma", "Responsive UI"],
  featured: true,
},
  {
    id: "gym-website",
    title: "Fitness & Training Hub",
    category: "Web App",
    image: "/images/project1.png",
    description:
      "A high-energy fitness platform showcasing class schedules, personal training packages, interactive membership calculators, and workout highlights.",
    link: "https://mazen-elfar.github.io/gym2/",
    tech: ["JavaScript", "HTML5/CSS3", "Interactive UI", "Flexbox"],
    featured: false,
  },
  {
    id: "restaurant",
    title: "Gourmet Restaurant Platform",
    category: "Web App",
    image: "/images/project4.png",
    description:
      "An elegant culinary dining website featuring interactive food menus, online table booking layout, chef specials, and location information.",
    link: "https://mazen-elfar.github.io/restaurant/",
    tech: ["JavaScript", "CSS3", "Responsive UI", "Web UX"],
    featured: false,
  },
  {
    id: "gym-pro",
    title: "Power Gym Center",
    category: "Web App",
    image: "/images/project5.png",
    description:
      "A modern fitness & bodybuilding center website engineered with responsive layouts, workout tracking previews, and interactive membership plans.",
    link: "https://mazen-elfar.github.io/GYM/",
    tech: ["JavaScript", "CSS3", "Mobile First", "UI/UX"],
    featured: false,
  }
];

const categories = ["All", "Corporate", "E-Commerce", "Web App"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  // Filter projects by active tab
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Featured project for spotlight
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <section className="projects-section" id="project">
      <div className="projects-bg-glow" aria-hidden="true" />

      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="projects-eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            SELECTED WORK
          </span>
          <h2 className="projects-title">
            Interactive <span className="projects-title-accent">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Explore real-world web applications and corporate digital platforms crafted with high technical precision and modern visual aesthetics.
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Spotlight (Shown when 'All' or 'Corporate' is selected) */}
        {(activeCategory === "All" || activeCategory === featuredProject.category) && (
          <motion.div
            className="projects-spotlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="spotlight-img-wrap">
              <span className="spotlight-badge">FEATURED SPOTLIGHT</span>
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="spotlight-img"
              />
            </div>
            <div className="spotlight-content">
              <span className="spotlight-category">{featuredProject.category}</span>
              <h3 className="spotlight-title">{featuredProject.title}</h3>
              <p className="spotlight-desc">{featuredProject.description}</p>

              <div className="spotlight-tech-stack">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Live Site
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-card-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img"
                  />
                  <div className="project-card-overlay" />
                </div>

                <div className="project-card-content">
                  <div>
                    <span className="project-card-category">{project.category}</span>
                    <h4 className="project-card-title">{project.title}</h4>
                    <p className="project-card-desc">{project.description}</p>
                  </div>

                  <div className="project-card-footer">
                    <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                      {project.tech.slice(0, 2).map((t) => (
                        <span key={t} className="text-[0.7rem] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-visit-link"
                    >
                      Visit →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <div className="view-all-container">
          <button className="view-all-btn" onClick={() => setShowModal(true)}>
            View All {projectsData.length} Projects Showcase →
          </button>
        </div>

        {/* Glass Modal Dialog */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="projects-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="projects-modal-content"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-btn"
                  onClick={() => setShowModal(false)}
                  aria-label="Close modal"
                >
                  &times;
                </button>

                <div className="modal-header">
                  <h3 className="modal-title">All Project Highlights</h3>
                  <p className="modal-subtitle">
                    Complete portfolio showcase across corporate systems, e-commerce stores, and web applications.
                  </p>
                </div>

                <div className="modal-grid">
                  {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                      <div className="project-card-img-wrap">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-card-img"
                        />
                        <div className="project-card-overlay" />
                      </div>
                      <div className="project-card-content">
                        <div>
                          <span className="project-card-category">{project.category}</span>
                          <h4 className="project-card-title">{project.title}</h4>
                        </div>
                        <div className="project-card-footer">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-visit-link"
                          >
                            Live Demo →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;

