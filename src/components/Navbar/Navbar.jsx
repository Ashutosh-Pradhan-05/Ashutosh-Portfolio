import { motion } from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaLessThan, FaGreaterThan } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "work", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
  ];
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 md:px-10 lg:px-[10vw] xl:px-[20vw] ${isScrolled ? "bg-[#0d6efd]/30 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="py-4 flex items-center justify-between gap-x-6 flex-nowrap">

        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className={`inline-flex items-center gap-1 font-semibold cursor-default ${isScrolled ? "text-[#0d6efd]" : ""
            }`}
        >
          <FaLessThan className="text-base" />
          <span className="text-sm sm:text-md">AshutoshPradhan</span>
          <RxSlash className="text-base" style={{ strokeWidth: 0.7 }} />
          <FaGreaterThan className="ms-[-6px]" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center">
          <ul className="flex gap-x-6 whitespace-nowrap">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleMenuItemClick(item.id)} className={`font-bold cursor-pointer hover:scale-110 transition-transform hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>


        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://www.linkedin.com/in/ashutosh-pradhan05" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] sm:hover:scale-125 transition-transform">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ashutosh-Pradhan-05" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] sm:hover:scale-125 transition-transform">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/Ashutoshtwitind" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] sm:hover:scale-125 transition-transform">
            <FaXTwitter size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className={`text-3xl cursor-pointer ${isScrolled ? "text-[#0d6efd]" : ""}`}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className={`text-3xl cursor-pointer ${isScrolled ? "text-[#0d6efd]" : ""}`}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#050414]/90 backdrop-blur-lg rounded-lg shadow-lg md:hidden z-40">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/in/ashutosh-pradhan05" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Ashutosh-Pradhan-05" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/Ashutoshtwitind" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                <FaXTwitter size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar;