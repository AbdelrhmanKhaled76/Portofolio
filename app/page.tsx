"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBoxOpen,
  faCode,
  faCodeBranch,
  faDatabase,
  faFont,
  faGlobe,
  faGraduationCap,
  faLaptopCode,
  faLightbulb,
  faMobile,
  faPenNib,
  faRocket,
  faServer,
  faTasks,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { Skills } from "./shared/types/interfaces/Skills";
import { inter, poppins } from "./shared/fonts/fonts";
import shape from "./public/images/shape.svg";
import myPic from "./public/images/my-Pic.png";
import { Project } from "./shared/types/interfaces/Projects";
import itLegendTask from "./public/images/it-legend-task.png";
import controlledForm from "./public/images/controlled-form.png";
import estoreProject from "./public/images/estore.png";
import enginiticProject from "./public/images/engenitic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { BasicSkill } from "./shared/types/interfaces/BasicSkill";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  const skillRef = useRef(null);
  const [inView, setInView] = useState<boolean>(false);
  const timelineItems = [
    {
      year: "2021",
      title: "Started Web Development",
      icon: faLightbulb,
      description: "Began with HTML, CSS, and JavaScript fundamentals",
      color: "bg-blue-500",
    },
    {
      year: "2022",
      title: "Mastered React",
      icon: faCode,
      description: "Built multiple projects and learned advanced concepts",
      color: "bg-green-500",
    },
    {
      year: "2023",
      title: "Full Stack Journey",
      icon: faRocket,
      description: "Expanded to backend development with Node.js and MongoDB",
      color: "bg-purple-500",
    },
    {
      year: "2024",
      title: "Advanced Frontend",
      icon: faGraduationCap,
      description: "Specialized in Next.js and modern web technologies",
      color: "bg-orange-500",
    },
  ];
  const [basicSkills] = useState<BasicSkill[]>([
    {
      icon: faTasks,
      title: "Programming Steps",
      description:
        "Data Structures, Algorithms, OOP Standards, API requests , Advanced JavaScript",
    },
    {
      icon: faCode,
      title: "HTML5 & Semantics",
      description:
        "Creating accessible, SEO-friendly markup with proper document structure",
    },
    {
      icon: faLaptopCode,
      title: "CSS Fundamentals",
      description:
        "Expertise in layouts, animations, transitions, and responsive design principles",
    },
    {
      icon: faGlobe,
      title: "Core JavaScript",
      description:
        "Strong foundation in ES6+, asynchronous programming, DOM manipulation, and event handling",
    },
    {
      icon: faMobile,
      title: "Responsive Design",
      description:
        "Mobile-first approach with fluid layouts and media queries for all device types",
    },
    {
      icon: faCodeBranch,
      title: "Git & Version Control",
      description:
        "Experienced with collaborative workflows, branching strategies, and CI/CD integration",
    },
    {
      icon: faBoxOpen,
      title: "Package Management",
      description:
        "Proficient with npm/yarn, dependency management, and project configuration",
    },
    {
      icon: faToolbox,
      title: "Development Tools",
      description:
        "VS Code, Chrome DevTools, webpack, Babel, and other essential development utilities",
    },
  ]);
  const [experiences] = useState<Experience[]>([
    {
      progress: 80,
      skill: "Next js",
    },
    {
      progress: 100,
      skill: "React js",
    },
    {
      progress: 100,
      skill: "Type script",
    },
    {
      progress: 100,
      skill: "Java Script",
    },
    {
      progress: 100,
      skill: "Tailwind Css",
    },
    {
      progress: 100,
      skill: "Css",
    },
  ]);
  const [skills] = useState<Skills[]>([
    {
      icon: faFont,
      description:
        "I built several Angular projects and explored advanced core concepts, which deepened my overall understanding of web development.",
      header: "Angular",
    },
    {
      icon: faServer,
      description:
        "To complete my web development journey, I learned back-end development and built several projects using Express and MongoDB (MERN stack).",
      header: "Back End",
    },
    {
      icon: faDatabase,
      header: "Data base",
      description:
        "Proficient in both relational (PostgreSQL, SQL, pysql) and non-relational (MongoDB) databases, with solid experience in writing efficient queries and managing data structures.",
    },
    {
      icon: faPenNib,
      header: "UI / UX",
      description:
        "i'm adapted to figma as i did multiple designs with it, i took alot of courses online to study figma right,and this helped me alot as a front end developer",
    },
  ]);
  const [projects] = useState<Project[]>([
    {
      src: estoreProject,
      header: "Handmade Leather Store (React)",
      description: `Developed a fully responsive UI using Tailwind CSS with dynamic image sliders and smooth routing via React Router.
Implemented robust form handling and validation using Formik and Yup, ensuring accurate user input.
Enhanced user experience through efficient API integration with Axios, real-time feedback via React Toastify, and smooth loading states using React Loader Spinner`,
      link: "https://github.com/AbdelrhmanKhaled76/EStore",
    },
    {
      src: enginiticProject,
      header: "enginitic project (Angular)",
      description: `As the Front-End Developer for Engenitic, I built a responsive UI using Angular, Tailwind CSS, and SCSS with a modern design.
I integrated ngx libraries for loaders, toasters, charts, and carousels, and implemented secure JWT-based authentication and media handling via FormData.
I also developed interfaces for AI features including grammar correction, Q&A, and text-to-speech functionalities.`,
      link: "https://github.com/AbdelrhmanKhaled76/Engenitic",
    },
    {
      src: itLegendTask,
      header: "IT Legend Task (next js)",
      description:
        "Developed a performance-optimized task for IT Legend using Next.js and Tailwind CSS. Implemented lazy loading for images and videos to enhance load times, utilized React.memo to prevent unnecessary re-renders, and reduced bundle size by minimizing JavaScript packages through custom Next.js configuration, the website is fully responsive using tailwind utilities.",
      link: "https://it-legend-task-ox3o.vercel.app/",
    },
    {
      src: controlledForm,
      header: "controlled compoent (next js)",
      description:
        "this is a small project using react, it's a controlled component form made with pure react states,i even did a backend for it using mongodb and express,this project was made in two days for testing my skills with react, it's made with tailwind Css (my favourite css framework)",
      link: "https://react-form-iota-one.vercel.app/",
    },
  ]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="py-10 flex justify-center items-center max-w-7xl mx-auto gap-20 px-10 flex-col">
      <Image
        src={shape}
        loading="lazy"
        alt="shape"
        className={`absolute top-5 right-0 -z-10 not-dark:hidden`}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1000"
      />

      {/* introduction section  */}
      
      <section
        id="introduction"
        className={`flex justify-between items-center flex-col gap-10 ${poppins.className}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <figure className="rounded-full w-50 h-50 p-4 bg-[RGB(26,26,26)] flex justify-center items-center overflow-hidden">
          <Image
            width={200}
            height={200}
            src={myPic}
            alt="this is my picture"
            className="object-contain"
          />
        </figure>
        <figcaption className="flex justify-between items-center flex-col ">
          <h1 className="font-bold xl:text-6xl text-3xl text-nowrap">
            Abdelrhman Khaled!
          </h1>
          <h3 className="text-center py-4 font-semibold xl:text-2xl text-xl ">
            i'm a <span className="text-gradient">Frontend</span> Developer 💻
          </h3>
          <p className="text-center py-3 xl:text-lg text-sm font-medium capitalize">
            am currently a student at Helwan University, majoring in Artificial
            Intelligence. I developed a strong interest in web development three
            years ago and have been actively pursuing it ever since.
          </p>
        </figcaption>
        <button
          onClick={() => {
            navigator.clipboard.writeText("bodi.khaled24@gmail.com");
            toast.success("Email is copied successfully");
          }}
          type="button"
          title={`contact me`}
          className={`border rounded-xl ${poppins.className} font-medium transition-colors duration-500 px-3 py-2 cursor-pointer text-sm lg:text-base 
              dark:text-white dark:bg-black dark:hover:text-black dark:hover:bg-white
              text-black bg-white hover:text-white hover:bg-black
        `}
        >
          contact me
        </button>
      </section>

      {/* Journey Section */}

      <section id="journey" className={`w-full ${inter.className}`}>
        <h2 className="text-[45px] font-extrabold uppercase text-center mb-4">
          My Journey
        </h2>
        <p className="text-gradient text-xs text-center uppercase expand-text pb-7 font-medium">
          explore my path
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          {/* Timeline items */}
          <div className="md:space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
                data-aos-delay={index * 200}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-primary hidden md:block"></div>

                {/* Content */}
                <div
                  className={`w-full py-5 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg shadow-sm bg-card hover:shadow-none dark:shadow-white transition-shadow duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-3 md:justify-end">
                      <span
                        className={`${item.color} text-white p-2 rounded-full`}
                      >
                        <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                      </span>
                      <span className="text-2xl font-bold">{item.year}</span>
                    </div>
                    <h3
                      className={`${poppins.className} text-xl font-semibold mb-2`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* basics i know */}

      <section
        id="basics-i-know"
        className={`flex justify-between items-center flex-col ${inter.className} w-full`}
      >
        <h2 className="text-[45px] font-extrabold uppercase text-nowrap">
          basics i know
        </h2>
        <p className="text-gradient text-xs text-center uppercase expand-text pb-7 font-medium">
          explore now
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {basicSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6  rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md dark:shadow-white"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-md mr-3">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-lg text-primary"
                  />
                </div>
                <h3 className={`${poppins.className} font-semibold`}>
                  {skill.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience section  */}

      <section
        id="experience"
        className={`flex justify-between items-start flex-col ${inter.className} w-full`}
      >
        <h2
          className={`text-[45px] font-extrabold uppercase text-center w-full text-nowrap`}
        >
          Experience
        </h2>
        <p className="text-gradient text-xs text-center uppercase expand-text pb-7 font-medium mx-auto">
          explore now
        </p>
        <div className="flex justify-between items-center flex-col md:flex-row w-full">
          <h3 className="text-lg">
            <span className="font-extrabold">prestened</span> / JavaScript
            Course
          </h3>
          <span className="opacity-70">For IT Legend Company</span>
        </div>
        <p className="py-7 text-sm">
          I’m currently focused on building more projects to further enhance my
          frontend skills, with a strong interest in learning unit testing and
          advanced SEO optimization techniques. Additionally, I aim to deepen my
          backend expertise with Node.js by developing more complex full-stack
          applications. My goal is to explore advanced architectural patterns,
          particularly using Next.js, to become a more well-rounded and
          efficient developer.
        </p>
        <p className="py-7 text-sm">
          I am currently open to frontend development opportunities, with strong
          expertise in React and Next.js. I also have a solid background in
          Angular, having explored its core deeply and enjoyed its powerful
          architecture. I’m eager to contribute to impactful projects and grow
          within a collaborative development team.
        </p>

        {/* skills section  */}

        <div className="grid md:grid-cols-2 gap-10 w-full" ref={skillRef}>
          {experiences.map((experience, idx) => (
            <div key={idx} className="w-full">
              <div className="w-full flex justify-between items-center">
                <p>{experience.skill}</p>
                <p className="text-sm">{experience.progress}%</p>
              </div>
              <div className="relative mt-3 w-full h-2 rounded border overflow-hidden">
                <span
                  className={`absolute top-0 left-0 dark:bg-white bg-black h-2 `}
                  style={{
                    width: inView ? `${experience.progress}%` : "0%",
                    transition: "width 1s ease-in-out",
                  }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* other skill  */}

      <section
        id="other-skills"
        className="flex justify-between items-center flex-col font-[var(--font-inter)]"
      >
        <h2 className="text-[45px] font-extrabold uppercase text-nowrap">
          other skills
        </h2>
        <p className="text-gradient text-xs text-center uppercase expand-text pb-7 font-medium">
          explore now
        </p>
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-5">
          {skills.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between items-center flex-col gap-7"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={`${(idx + 1) * 500}`}
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-2xl border border-[#1A1A1A] rounded-full w-[30px] h-[30px] p-7 bg-[#1A1A1A] text-white transition-all duration-500 hover:rotate-y-180 hover:bg-white hover:text-black "
                />
                <h4 className={`${poppins.className} text-center`}>
                  {skill.header}
                </h4>
                <p
                  className={`${inter.className} text-center text-sm opacity-70`}
                >
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* projects  */}

      <section
        id="other-skills"
        className="flex justify-between items-center flex-col font-[var(--font-inter)]"
      >
        <h2 className="text-[45px] font-extrabold uppercase text-nowrap">
          Projects
        </h2>
        <p className="text-gradient text-xs text-center uppercase expand-text pb-7 font-medium">
          explore now
        </p>
        <div className="grid lg:grid-cols-2 items-start gap-10">
          {projects.map((project, idx) => (
            <div className="grid grid-cols-1 gap-5 items-start" key={idx}>
              <figure className="relative overflow-hidden rounded group">
                <Image src={project.src} alt={project.header} />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] text-white flex justify-center items-center -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <a
                    className={`${poppins.className}`}
                    title="it-legend-task"
                    href={project.link}
                    target="_blank"
                  >
                    view project
                  </a>
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    shake
                    className="ms-2"
                  />
                </div>
              </figure>
              <article className={`${inter.className}`}>
                <h5 className={`${poppins.className} font-bold`}>
                  {project.header}
                </h5>
                <p className="text-xs py-3">{project.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
      
      <Toaster />
    </main>
  );
}
