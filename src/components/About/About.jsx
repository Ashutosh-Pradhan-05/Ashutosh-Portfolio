import React from 'react'
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import profileImage from '../../assets/profile.jpg'
const About = () => {
  return (
    <section id='about' className="px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-20">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-2 leading-tight">Hi, I am</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#0d6efd]">Ashutosh Pradhan</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span>I am a </span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(100) // Initial delay
                  .typeString('MERN Stack Developer')
                  .pauseFor(1000)
                  .deleteAll(20) // Delete speed = 20ms per character
                  .typeString('Full Stack Developer')
                  .pauseFor(1000)
                  .deleteAll(20)
                  .typeString('React Developer')
                  .pauseFor(1000)
                  .deleteAll(20)
                  .typeString('Programmer')
                  .pauseFor(1000)
                  .deleteAll(20)
                  .start();
              }}
              options={{
                delay: 100, // Typing speed = 100ms per char
                loop: true,
                cursor: '<span class="text-[#8245ec]">|</span>', // Custom cursor
                wrapperClassName: 'inline',
              }}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base text-justify sm:text-lg md:text-lg text-gray-600 mb-10 mt-4 leading-relaxed indent-14">Versatile and technically proficient Computer Science graduate with hands-on experience building responsive web applications using React.js, Node.js, Express.js, Tailwind CSS, and Bootstrap. Skilled in full-stack development, RESTful API integration and modern JavaScript frameworks. Committed to delivering clean, maintainable code in Agile environments and collaborating effectively within engineering teams to build scalable, user-centric solutions.</p>

        </div>

        {/* Right Side */}
        <div>
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700  rounded-full"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ashutosh Pradhan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>

          {/* CV Button & Contact Me Button */}
          <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start md:gap-4 lg:ms-16 md:mt-14'>
            <a
              href="https://drive.google.com/file/d/1NbA_T6HHqTeuHbMWn_oSbUF7SpNwgSE4/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-semibold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-[#fc466b] to-[#3f5efb] hover:from-[#6f3de0] hover:to-[#9333ea]"
            >
              DOWNLOAD CV
            </a>
            <a
              href="#contact"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-semibold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-[#3f5efb] to-[#fc466b] hover:from-[#6f3de0] hover:to-[#9333ea]"
            >
              CONTACT ME
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}
export default About  