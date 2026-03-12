import { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import MatrixRain from './components/MatrixRain';
import CursorTrail from './components/CursorTrail';
import ClickEffect from './components/ClickEffect';
import ParticleEffect from './components/ParticleEffect';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleShake = useCallback(() => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
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

                    <motion.div
                        className="relative z-10"
                        animate={isShaking ? {
                            x: [0, -12, 12, -6, 6, -3, 0],
                            y: [0, 8, -8, 4, -4, 0],
                            transition: { duration: 0.4 }
                        } : {}}
                        onAnimationComplete={() => setIsShaking(false)}
                    >
                        <ClickEffect onClick={handleShake} />
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
                    </motion.div>
                </div>
            </ErrorBoundary>
        </HelmetProvider>
    );
}

export default App;
