// actual values

// image files
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
    entertain_partners,
    greenwatch,
    inventory,
    inkborn,
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
      title: "Excellent communication skills",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full stack developer",
      icon: backend,
    },
    
    {
      title: "Cybersecurity focused",
      icon: mobile,
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
      title: "Service Desk Intern",
      company_name: "Entertainment Partners",
      icon: entertain_partners,
      iconBg: "#E6DEDD",
      date: "July 2024 - August 2024",
      points: [
        "Worked as part of a team to help users troubleshoot software and hardware issues in person and over the web.",
        " Managed a global company’s tech stack and its nuances.",
        
      ],
    },
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
      name: "Inkborn (In progress)",
      description:
        "E-commerce site for the Lorcana TCG.",
      tags: [
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
      ],
      image: inkborn,
      source_code_link: "https://github.com/erGoProcsee/COMP440-projects",
      project_link: "https://www.tcgplayer.com/",
    },

    {
      name: "Inventory Manager",
      description:
        "Desktop app database for multiple users with a review system",
      tags: [
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
      project_link: "https://www.youtube.com/watch?v=-rDM3dCH87E",
    },
    
    {
      name: "Greenwatch",
      description:
        "Web-based platform using machine learning that allows users to get updates regarding their current lawn health.",
      tags: [
        
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "postgresSQL",
          color: "",
        },
        {
          name: "django",
          color: "blue-text-gradient",
        },
      ],
      image: greenwatch,
      source_code_link: "https://github.com/COMP490-Greenwatch-Org/greenwatch",
      project_link: "https://www.youtube.com/watch?v=q8THbULXqI4",
    },
    
    
    
  ];
  
  export { services, technologies, experiences, projects };