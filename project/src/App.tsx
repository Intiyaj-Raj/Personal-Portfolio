import { Suspense, lazy, useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "./components/SEOHead";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import MatrixRain from "./components/MatrixRain";
import ParticleEffect from "./components/ParticleEffect";

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
          <ParticleEffect x={0} y={0} />

          <div className="relative z-10">
            <Navbar />

            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
              </Suspense>
            </main>

            <Suspense fallback={<div className="h-20" />}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
