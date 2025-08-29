import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";

export const navItems = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <IoMdInformationCircle /> },
  { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
  { name: "Projects", link: "#projects", icon: <GrProjects /> },
  { name: "Contact", link: "#contact", icon: <MdContacts /> },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on various projects",
    description: "Personal Projects",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HarshSharmaIN",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/harshsharmaasl/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/harshsharmaasl/",
  },
];

export const experiences = [
  {
    id: 1,
    img: "/pearl.jpeg",
    title: "Frontend Developer",
    company: "Pearl Thoughts",
    duration: "July - August 2024",
    description:
      "Built user interfaces for web applications, implemented responsive designs, and collaborated with backend developers to integrate APIs and create seamless user experiences.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    id: 2,
    img: "digi.png",
    title: "Frontend Developer Intern",
    company: "Digiglobe Solutions",
    duration: "June - July 2024",
    description:
      "Assisted in developing client websites, learned modern web development practices, and gained experience with version control and collaborative development workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    id: 3,
    img: "bcet.jpeg",
    title: "Computer Science Student",
    company: "University",
    duration: "2022 - Present",
    description:
      "Studying computer science fundamentals including algorithms, data structures, software engineering principles, and web development technologies.",
    technologies: ["Java", "Python", "C++", "Database Systems"],
  },
];

export const webProjects = [
  {
    id: 3,
    title: "Prescripto - Full Healthcare System",
    des: "A full Healthcare system, from appointments booking to consultation. Never worry about your health again.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/rzp.png", "/s.svg", "/tail.svg", "/mdb.svg"],
    link: "https://prescripto-griffin.netlify.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/s.svg", "/c.svg"],
    link: "https://next-video-taupe.vercel.app/",
  },
  {
    id: 1,
    title: "Keeper App - A Note taking App",
    des: "Take important notes with Keeper. Keeper app secures your notes, and removes the hustle of writing.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg", "/ex.svg", "/mdb.svg"],
    link: "https://keeper-app-xi-six.vercel.app",
  },
  {
    id: 4,
    title: "Store It - A Online Storage App",
    des: "StoreIt Drive is a cloud-based file storage and management app that lets users securely upload, access, and organize their files online. It offers a simple and responsive interface similar to Google Drive for seamless file handling.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/appw.svg", "/tail.svg", "/js.svg"],
    link: "https://storeit-drive.netlify.app/",
  },
];

export const appProjects = [
  {
    id: 1,
    title: "Shoppy - E-commerce App",
    des: "A modern e-commerce application with product catalog, cart, secure payments, and order tracking. Built for a smooth shopping experience.",
    img: "/p5.jpg",
    iconLists: ["/flutter.svg", "/rzp.png", "/firebase.svg", "/dart.svg"],
    link: "https://drive.google.com/file/d/1WoXvt3kdKevbfq_kuCaMqa1nkNo3KnrF/view?usp=sharing",
  },
  {
    id: 2,
    title: "ChatApp - Real-Time Chat",
    des: "A real-time chat application with Firebase backend, message notifications, and user authentication for seamless communication.",
    img: "/p7.jpg",
    iconLists: ["/flutter.svg", "/s.svg", "/firebase.svg", "/bloc.svg"],
    link: "https://drive.google.com/file/d/1OiBBWXfm69EZ3LNpDjKtAYdZ80uzu4d6/view?usp=sharing",
  },
  {
    id: 3,
    title: "WeatherApp",
    des: "A weather forecasting app that provides real-time weather updates, location-based forecasts, and intuitive UI for daily usage.",
    img: "/p8.jpg",
    iconLists: ["/flutter.svg", "/dart.svg", "/openw.png", "/hive.png"],
    link: "https://drive.google.com/file/d/1teBHIcGwHuaYYChFH2Vab1jdrlldyYzk/view?usp=sharing",
  },
  {
    id: 4,
    title: "Chatbot",
    des: "An AI-powered chatbot using Gemini to solve user queries with speech recognition and text-to-speech functionalities.",
    img: "/p6.jpg",
    iconLists: ["/flutter.svg", "/dart.svg", "/tts.svg", "/gemini.svg"],
    link: "https://drive.google.com/file/d/1IwXLlcBN9FHgBDf1kzS7AsfdZs9ZFFcH/view?usp=sharing",
  },
];
