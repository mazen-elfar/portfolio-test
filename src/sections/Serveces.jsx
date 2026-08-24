import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const servicesData = [
  {
    num: "01",
    title: "Client-First Architecture",
    desc: "Structured, highly organized component architecture built with clean code standards and scalable design systems.",
    img: "media/64558cfd1b66b2ab60e6cfc3_Muscle (1).svg",
    tags: ["Finsweet Methodology", "Clean Code", "Design Systems"],
  },
  {
    num: "02",
    title: "Fully Responsive Engineering",
    desc: "Flawless layout responsiveness crafted for all viewport sizes, from mobile devices to ultra-wide desktop displays.",
    img: "media/63ee78a84384ec4ca43b2634_Responsive (6).svg",
    tags: ["Mobile-First", "Cross-Browser", "Adaptive Layouts"],
  },
  {
    num: "03",
    title: "Flexible & Scalable Systems",
    desc: "Future-proof codebases using modular JavaScript, React, and CSS structures for seamless feature expansion.",
    img: "media/63ee51cdfcb0c0ff2e953331_Scalable.svg",
    tags: ["Modular Architecture", "React / Vite", "Scalable UI"],
  },
  {
    num: "04",
    title: "Fast Turnarounds & Delivery",
    desc: "Streamlined workflow and rapid development cycles delivering high-precision web apps without quality trade-offs.",
    img: "media/63ee51cde240699daca34c02_Interactions.svg",
    tags: ["Agile Workflow", "Rapid Delivery", "Production Ready"],
  },
  {
    num: "05",
    title: "Advanced Motion & 3D Web",
    desc: "Delightful micro-interactions, 3D Canvas elements, and smooth GSAP/Framer animations that enhance engagement.",
    img: "media/645542aef64eda193320b9fe_Interactions (2).svg",
    tags: ["GSAP / Motion", "Three.js 3D", "Micro-Interactions"],
  },
  {
    num: "06",
    title: "High Performance & SEO",
    desc: "Engineered for speed with 95+ PageSpeed scores, optimized asset pipelines, smooth 60fps, and SEO best practices.",
    img: "media/6455438dcd6e382e76049b14_Perfomance.svg",
    tags: ["PageSpeed 95+", "Core Web Vitals", "SEO Optimized"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Serveces = () => {
  return (
    <section className="services-section" id="Services">
      <div className="services-bg-glow" aria-hidden="true" />
      <div className="services-grid-overlay" aria-hidden="true" />

      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="services-eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            WHAT I OFFER
          </span>
          <h2 className="services-title">
            Services & <span className="services-title-accent">Expertise</span>
          </h2>
          <p className="services-subtitle">
            Crafting high-performance digital experiences with modern web technologies,
            responsive engineering, and fluid interactive design.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-card-glow" aria-hidden="true" />
              
              <div className="service-card-top">
                <div className="service-icon-box">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-icon-img"
                    onError={(e) => {
                      // Fallback if SVG fails to load
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <span className="service-num">{service.num}</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Serveces;

