import React from "react";
import { motion } from "framer-motion";
import { RxSlash } from "react-icons/rx";
import { GiSelfLove } from "react-icons/gi";
import { SiMessenger } from "react-icons/si";
import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter, FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 px-[6vw] md:px-[5vw] lg:px-[12vw] bg-white">
      <div className="w-full max-w-full flex flex-col items-center justify-center text-center">

        {/* Name / Logo */}
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex items-center text-xl font-semibold text-[#0d6efd] cursor-default"
        >
          <span className="me-[-0.5px]">
            <FaLessThan />
          </span>
          <span>AshutoshPradhan</span>
          <span>
            <RxSlash className="me-[-5px]" style={{ strokeWidth: 0.7 }} />
          </span>
          <span>
            <FaGreaterThan />
          </span>
        </motion.span>

        {/* Gradient Divider */}
        <div className="w-80 h-1 bg-gradient-to-r from-[#8245ec] to-[#ff7f50] mx-auto mt-1"></div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "ABOUT", id: "about" },
            { name: "SKILLS", id: "skills" },
            { name: "EXPERIENCE", id: "experience" },
            { name: "PROJECTS", id: "work" },
            { name: "EDUCATION", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-600 hover:cursor-pointer md:hover:scale-110 transition-transform text-md sm:text-base my-1 font-bold"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6 md:scale-125">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ashutosh-pradhan05" },
            { icon: <FaGithub />, link: "https://github.com/Ashutosh-Pradhan-05" },
            { icon: <FaXTwitter />, link: "https://x.com/Ashutoshtwitind" },
            { icon: <BiLogoTelegram />, link: "https://t.me/ashutosh_pradhan" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/ashutosh.pradhan.ind" },
            { icon: <SiMessenger />, link: "https://m.me/ashutosh.pradhan.ind" },
            { icon: <FaFacebookSquare />, link: "https://www.facebook.com/ashutosh.pradhan.ind" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              aria-label={`Link to ${item.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform md:hover:scale-150"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        {/* Copyright + Scroll to Top */}
        <div className="text-base sm:text-lg md:text-[18px] mt-4 w-full text-center">
          <p className="m-0 flex flex-wrap items-center justify-center gap-2">
            Designed with <GiSelfLove className="text-red-600" size={24} /> by
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="font-bold bg-gradient-to-r from-[#fc466b] to-[#3f5efb] bg-clip-text text-transparent bg-[length:200%_200%]"
              style={{
                backgroundImage: 'linear-gradient(to right, #fc466b, #3f5efb)',
                display: 'inline-block',
              }}
            >
              Ashutosh Pradhan
            </motion.span>
            &copy; 2025 All rights reserved.

            {/* Email + Arrow side-by-side */}
            <span className="flex items-center gap-2">
              <a
                href="mailto:contactwithashuind@gmail.com"
                title="Send email to Ashutosh Pradhan"
                className="hover:underline text-blue-600"
              >
                contactwithashuind@gmail.com
              </a>

              {/* Scroll to Top Icon */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="p-2 rounded-full hover:bg-purple-600 text-white bg-pink-500 transition duration-300 shadow-md hover:scale-110"
                title="Back to Top"
              >
                <FaArrowUp size={14} />
              </button>
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
