import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Certification from "./components/Certification/Certification";
import BlurBlob from "./BlurBlob";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="bg-[#050414] cursor-none">
      <ModernCursor />
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
const ModernCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    const hoverables = document.querySelectorAll("a, button");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* OUTER MOST RING (slow + subtle) */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full 
                   border border-purple-500/30"
        animate={{
          x: position.x - (hover ? 40 : 32),
          y: position.y - (hover ? 40 : 32),
          width: hover ? 80 : 64,
          height: hover ? 80 : 64,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
        }}
      />

      {/* MIDDLE RING (main interactive ring) */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full 
                   border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        animate={{
          x: position.x - (hover ? 25 : 18),
          y: position.y - (hover ? 25 : 18),
          width: hover ? 50 : 36,
          height: hover ? 50 : 36,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* INNER DOT */}
      <motion.div
        className="fixed z-[10000] pointer-events-none rounded-full 
                   bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.6)]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        style={{ width: 8, height: 8 }}
      />
    </>
  );
};
