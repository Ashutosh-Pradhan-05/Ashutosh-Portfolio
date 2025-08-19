// Skills Section Logo's
//front-end
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import sassLogo from './assets/tech_logo/sass.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import angularLogo from './assets/tech_logo/angular.png';
import jQueryLogo from './assets/tech_logo/jQuery.png';
import jQUILogo from './assets/tech_logo/jQuery-UI.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
//back-end
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import restLogo from './assets/tech_logo/rest.png';
//languages
import javascriptLogo from './assets/tech_logo/javascript.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import sqlLogo from './assets/tech_logo/sql-logo.png';
import cLogo from './assets/tech_logo/c.png';
// tools
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/githublogo.png';
import postmanLogo from './assets/tech_logo/postman.png';
import emailjsLogo from './assets/tech_logo/emailjs.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vitelogo from './assets/tech_logo/vite.png';
import netlifyLogo from './assets/tech_logo/netlifylogo.png';
import vercellogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png';
import npmLogo from './assets/tech_logo/npm.png';

// Experience Section Logo's
import nitLogo from './assets/company_logo/nit_logo.png'; // Naresh i Technologies
import internLogo from './assets/company_logo/internship_studio_logo.png'; // Internship Studio
// Education Section Logo's
import tatLogo from './assets/education_logo/TAT.png';    //Trident
import ghssLogo from './assets/education_logo/GHSS.png';  //Gokarnika
import schlLogo from './assets/education_logo/schl.png';  //Hatibari

// Work/Project Section Logo's
import reactPortfolioLogo from './assets/work_logo/reactportfolio.png'; // React Portfolio
import ecomLogo from './assets/work_logo/ecom.png';                      // E-Commerce Website
import todoLogo from './assets/work_logo/todo.png';                      // To-Do List SPA
import portfolioLogo from './assets/work_logo/portfolio.png';            // Personal Portfolio Website
import emiLogo from './assets/work_logo/emi.png';                        // EMI Calculator
import bmiLogo from './assets/work_logo/bmi.png';                        // BMI Calculator
import cityLogo from './assets/work_logo/city.png';                      //City list unlist CRUD Operation
import clkLogo from './assets/work_logo/clock.png';                      //Real-Time Analog Clock

export const SkillsInfo = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'jQuery', logo: jQueryLogo },
      { name: 'jQuery UI', logo: jQUILogo },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'REST APIs', logo: restLogo }
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'C', logo: cLogo }
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'EmailJS', logo: emailjsLogo },
      { name: 'Vite', logo: vitelogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercellogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'NPM', logo: npmLogo },
    ],
  },
];

export const experiences = [

  {
    id: 0,
    img: nitLogo,
    role: "Trainee",
    certificate: "https://drive.google.com/file/d/182bAnyjym2Sw4e1x-Fd1HZ_DtT9clX32",
    company: "Naresh i Technologies",
    website: "https://nareshit.com",
    location: "Hyderabad, IN [On-site]",
    date: "Jul 2024 - Dec 2024",
    desc: "Completed an intensive six months offline training program in UI Full Stack Development, based in Hyderabad, India. This comprehensive program focused on hands-on learning and real-time project development, equipping me with the skills and confidence to build responsive websites and full-stack web applications from scratch.",
    skills: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "JavaScript",
      "Typescript",
      "Material UI",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "jQuery",
      "Postman",
      "NPM",
      "Vite"
    ],
  },
  {
    id: 1,
    img: internLogo,
    role: " AWS Intern",
    certificate: "https://drive.google.com/file/d/1cbFkZIpojlj10tR8qdRllXao_FCjDaDv",
    company: "Internship Studio",
    website: "https://internshipstudio.com/",
    location: "Pune, IN [Remote]",
    date: "Feb 2024 - May 2024",
    desc: "Completed a remote internship focused on AWS cloud architecture, deployment and infrastructure automation. Learned core AWS services like EC2, S3, IAM, Lambda and Cloud Formation to build scalable solutions.",
    skills: [
      "AWS",
      "S3",
      "EC2",
      "IAM",
      "CI/CD",
      "Lambda"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: tatLogo,
    degree: "B.Tech - CST",
    school: "Trident Academy of Technology",
    location: "Bhubaneswar, Odisha, India",
    date: "Sep 2020 - May 2024",
    grade: "8.23 CGPA",
    desc: "During my B.Tech at Trident Academy of Technology, I developed a strong academic foundation in core areas of computer science and software engineering. My coursework included Data Structures and Algorithms [DSA], Object-Oriented Programming [OOP], Database Management Systems [DBMS], Web Development and Software Engineering, which equipped me with both theoretical knowledge and practical problem-solving skills. Beyond academics, I actively engaged in co-curricular activities and technical communities, including the Cyber Security Club and Coding Club, where I participated in workshops, hackathons and collaborative projects. These experiences significantly enhanced my technical capabilities, team collaboration and adaptability to real-world challenges. Overall, my time at Trident Academy played a pivotal role in shaping my technical proficiency and professional mindset, preparing me for a dynamic career in the tech industry.",
  },
  {
    id: 1,
    img: ghssLogo,
    degree: "12th [CHSE] - Science",
    school: "Gokarnika Higher Secondary School",
    location: "Jajpur, Odisha, India",
    date: "Jun 2018 - Mar 2020",
    grade: "64.83%",
    desc: "I have completed my Higher Secondary Education [Both Class 11th and 12th] at Gokarnika Higher Secondary School, Jajpur, under the Council of Higher Secondary Education [CHSE], Odisha board, specializing in Physics, Chemistry, Mathematics and Biology [PCMB]. This academic curriculum provided me with a balanced and in-depth understanding of both mathematical reasoning and life sciences. Throughout the course, I actively engaged in comprehensive laboratory work in Physics, Chemistry and Biology, which strengthened my conceptual knowledge through hands-on experiments. These included electrical circuit analysis, mechanics demonstrations, chemical titrations, qualitative analysis and biological specimen examination under microscopy enhancing my analytical thinking and practical skills. Beyond academics, I participated in extracurricular activities such as volleyball and badminton, which played a vital role in developing my leadership, team collaboration and time management abilities. These activities enriched my overall school experience and contributed to my personal growth. My education at Gokarnika Higher Secondary School laid a solid foundation for my technical and interpersonal development, both of which have been instrumental in my academic and professional journey.",
  },
  {
    id: 2,
    img: schlLogo,
    school: "Hatibari Nodal High School",
    location: "Jajpur, Odisha, India",
    date: "Jun 2008 - Mar 2018",
    grade: "67.33%",
    desc: "I have completed my primary and secondary education at Hatibari Nodal High School, Jajpur, under the Board of Secondary Education [BSE], Odisha. My academic journey began here as a young student in Class 1 and over the course of nearly a decade, I progressed through every stage of foundational education, ultimately completing my Class 10. This long-standing association with the school played a crucial role in shaping my academic discipline, curiosity and work ethic from the grassroots level. The structured curriculum, along with the values instilled during these formative years, laid a strong foundation for my future studies and personal development. Hatibari Nodal High School was not just the starting point of my educational path it was where my aspirations began to take shape and where I developed the core habits that continue to guide me today.",
    degree: "10th [BSE] - Schooling",
  },
];

export const projects = [
  {
    id: 0,
    title: "My Portfolio Website",
    description: "This project is a fully responsive personal portfolio website developed using React and Vite, designed to provide a seamless experience across both mobile and desktop devices. It features a modern, clean UI built with Tailwind CSS and incorporates interactive animations using libraries like react-parallax-tilt and react-typing-effect. The application is structured with reusable components validated using prop-types and implements client-side routing through react-router-dom for smooth navigation. Additional functionalities include dynamic typewriter effects using typewriter-effect, real-time contact form integration powered by EmailJS, and toast notifications via react-toastify. The portfolio is optimized for performance and scalability, making it an ideal platform to showcase my skills, education, projects, and professional journey in a visually engaging manner.",
    image: reactPortfolioLogo,
    tags: ["React", "React-Router", "React-Icons", "React-Toastify", "Typewriter-Effect", "React-Tilt", "Framer-Motion", "HTML", "CSS", "Tailwind CSS", "JavaScript", "EmailJS"],
    github: "https://github.com/Ashutosh-Pradhan-05/Ashutosh-Portfolio"
  },
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Developed a scalable full-stack e-commerce web application with React, Node.js, Express.js, and MongoDB, integrating secure authentication and state management using JWT and Redux, and leveraging Vite as a buildtool for fast development and optimized performance.",
    image: ecomLogo,
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React", "React-Router", "Redux", "Cors", "Nodemon", "JWT", "API", "Tailwind CSS", "Vite", "Cookie-Parser",],
    github: "https://github.com/Ashutosh-Pradhan-05/E-Commerce_Web_App/tree/my-new-branch"
  },
  {
    id: 2,
    title: "To-DO List [SPA]",
    description:
      "A dynamic, single-page To-Do web application for managing tasks and appointments. Features include user registration, login, personalized dashboards, and CRUD operations for appointments. Built with responsive design for seamless user experience, leveraging modern web technologies for efficient task management.",
    image: todoLogo,
    tags: ["Node.js", "MongoDB", "Express.js", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "API", "Tailwind CSS"],
    github: "https://github.com/Ashutosh-Pradhan-05/To-Do/tree/new-branch"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This personal portfolio website, built with HTML, CSS, Tailwind CSS, Bootstrap, and JavaScript, showcases my expertise in front-end development through a modern, fully responsive design. It highlights my skills, projects, and professional experience with an intuitive interface, smooth animations, and optimized performance.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/Ashu_Portfolio"
  },
  {
    id: 4,
    title: "EMI Calculator",
    description:
      "This EMI Calculator is a responsive and user-friendly web app developed using HTML, CSS, JavaScript, and Bootstrap, offering precise calculations of equated monthly installments with seamless functionality.",
    image: emiLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/EMI_Calculator"
  },
  {
    id: 5,
    title: "BMI Calculator",
    description:
      "Developed a dynamic and responsive BMI Calculator web app leveraging HTML, CSS, and Bootstrap for an intuitive user interface, and JavaScript for efficient real-time BMI computation and validation.",
    image: bmiLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/BMI_Calculator"
  },
  {
    id: 6,
    title: "City List & Unlist",
    description:
      "This web app efficiently manages city lists with a modern tech stack [HTML, CSS, JavaScript, Bootstrap]. It supports adding, editing, sorting, and deleting cities, enhanced by dynamic interactions. A user-friendly modal popup enables seamless city edits, and the responsive design ensures usability across devices.",
    image: cityLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/Add_City"
  },
  {
    id: 7,
    title: "Real-Time Analog Clock",
    description:
      "This project is a real-time Indian Standard Time [IST] analog clock built using HTML, CSS, and JavaScript. The clock updates every second with smooth rotations for the hour, minute, and second hands. It features a custom-designed clock face with a background image, showcasing CSS styling and JavaScript for real-time functionality.",
    image: clkLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/Realtime_analog_wall_clock"
  }
];  