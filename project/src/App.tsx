import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "./components/SEOHead";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import MatrixRain from "./components/MatrixRain";
import CursorTrail from "./components/CursorTrail";
import SimpleClickPopup from "./components/SimpleClickPopup";
import ParticleEffect from "./components/ParticleEffect";
import FireBurstClick from "./components/FireBurstClick";
import Experiences from "./components/Experiences";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="relative min-h-screen bg-black text-green-400 overflow-x-hidden">
          <SEOHead />
          <MatrixRain />
          <CursorTrail />
          <ParticleEffect x={0} y={0} />
          <SimpleClickPopup />
          <FireBurstClick />
          <motion.div
            className="relative z-10"
            animate={
              isShaking
                ? {
                    x: [0, -15, 15, -8, 8, -4, 0],
                    y: [0, 10, -10, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }
                : {}
            }
            onAnimationComplete={() => setIsShaking(false)}
          >
            <Navbar />

            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Experiences />
                <Projects />
                <Contact />
              </Suspense>
            </main>

            <Suspense fallback={<div className="h-20" />}>
              <Footer />
            </Suspense>
          </motion.div>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
