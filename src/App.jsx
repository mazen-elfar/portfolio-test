import Hero from "./sections/Hero";
import AnimatedCanvas from "./components/AnimationCanvas";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import ExperienceSection from "./sections/ExperienceSection";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Serveces from "./sections/Serveces";
import Footer from "./sections/Footer";
import ContactExperience from "./components/Models/ContactExperience";
import GlobalLoader from "./components/GlobalLoader";

function App() {
  // Render only the 3D ContactExperience when navigating directly to /contact-scene
  if (typeof window !== "undefined" && window.location.pathname === "/contact-scene") {
    return (
      <div style={{ width: "100vw", height: "100vh", background: "#0b0b0b" }}>
        <ContactExperience />
      </div>
    );
  }

  return (
    <>
      <GlobalLoader />
      <ParticleBackground />
      <AnimatedCanvas />
      <Navbar />
      <Hero />
      <About />
      <Serveces />
      <ExperienceSection />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
