import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Portfolio component
const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <h2 className="text-hacker-green text-center text-xl md:text-2xl lg:text-3xl">
        🌟 Mera Portfolio Content Yahan Hai 🌟
      </h2>
      {/* Tumhara portfolio ka actual content yahan add karo */}
    </div>
  );
};

// Main component
const LoadingSpinner: React.FC = () => {
  const [step, setStep] = useState<"loading" | "welcome" | "portfolio">("loading");

  useEffect(() => {
    // Step 1: Please Wait (1 second)
    const timer1 = setTimeout(() => setStep("welcome"), 1000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (step === "welcome") {
      // Step 2: Welcome message (2 second)
      const timer2 = setTimeout(() => setStep("portfolio"), 2000);
      return () => clearTimeout(timer2);
    }
  }, [step]);

  if (step === "loading") {
    return (
      <div className="min-h-screen bg-hacker-dark flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-hacker-green/30 border-t-hacker-green rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-hacker-green font-mono text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {">"} Please Wait......
          </motion.p>
        </div>
      </div>
    );
  }

  if (step === "welcome") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-hacker-green text-center">
          {">"} Welcome to my Portfolio.....
        </h1>
      </div>
    );
  }

  // Step 3: Portfolio content
  return <Portfolio />;
};

export default LoadingSpinner;
