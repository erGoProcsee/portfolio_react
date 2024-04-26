import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    mysql,
    cplusplus,
    java,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    drink,
    target,
    greenwatch,
    inventory,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cybersecurity focused",
      icon: mobile,
    },
    {
      title: "Full stack developer",
      icon: backend,
    },
    {
      title: "Excellent communication skills",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "mySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "c++",
      icon: cplusplus,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "co-owner",
      company_name: "Pulque Express",
      icon: drink,
      iconBg: "#383E56",
      date: "March 2007 - April 2023",
      points: [
        "16 years of retail sales experience",
        "small bussiness management",
        "Preparation and sales to restaurants of aguas frescas",
      ],
    },
    {
      title: "Assets Protection",
      company_name: "Target",
      icon: target,
      iconBg: "#E6DEDD",
      date: "June 2008 - December 2008",
      points: [
        "Performed surveillance of areas susceptible to loss to reduce financial losses.",
        "Investigated know or suspected theft and collaborated with law enforcement.",
        "Inspected building to determine security risks.",
      ],
    },
    
    
  ];
  
  
  const projects = [
    {
      name: "Greenwatch",
      description:
        "Web-based platform using machine learning that allows users to get updates regarding their current lawn health.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "red-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "postgresSQL",
          color: "pink-text-gradient",
        },
      ],
      image: greenwatch,
      source_code_link: "https://github.com/COMP490-Greenwatch-Org/greenwatch",
    },
    {
      name: "Inventory Manager",
      description:
        "Inventory management database for multiple users with a review system",
      tags: [
        {
          name: "chatGPT",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
      ],
      image: inventory,
      source_code_link: "https://github.com/erGoProcsee/COMP440-projects",
    },
    
  ];
  
  export { services, technologies, experiences, projects };