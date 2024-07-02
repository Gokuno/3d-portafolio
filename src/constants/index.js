import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    up,
    tesla,
    shopify,
    nextjs,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre mi",
    },
    {
      id: "works",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Desarrollador Web",
      icon: web,
    },
    {
      title: "Desarrollador Fullstack",
      icon: mobile,
    },
    {
      title: "Diseñador UI/UX",
      icon: backend,
    },
    {
      title: "Marketing Digital",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Desarrollador Web FullStack",
      company_name: "1UP Web Designs",
      icon: up,
      iconBg: "#232426",
      date: "Marzo 2020 - A la fecha",
      points: [
        "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
        "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
        "Implementar diseño responsivo y asegurar la compatibilidad entre navegadores.",
        "Participar en revisiones de código y proporcionar comentarios constructivos a otros desarrolladores.",
      ],
    },
    {
      title: "Diseñador y Desarrollador Web",
      company_name: "Freelancer",
      icon: up,
      iconBg: "#232426",
      date: "Diciembre 2017 - A la fecha",
      points: [
        "Proyectos de diseño y desarrollo web usando Wordpress, Shopify y otros CMS.",
        "Proporcionando soluciones digitales a clientes, con un enfoque estratégico en el crecimiento digital.",
        "Diseño de logotipo y recursos de sitios web.",
        
      ],
    },
    {
      title: "Sistemas y Vinculacion",
      company_name: "ISEA",
      icon: figma,
      iconBg: "#232426",
      date: "Octubre 2015 - Diciembre 2019",
      points: [
        "Manejo de bases de datos MySQL y SQL.",
        "Mantenimiento a servidores y bases de datos",
        "Implementacion de nuevas section del sistema usando PHP.",
        
      ],
    },
    {
      title: "Tecnico en instalacion y programacion",
      company_name: "IGATEK",
      icon: figma,
      iconBg: "#232426",
      date: "Febrero 2011 - Septiembre 2015",
      points: [
        "Diseño e implementacion de UI/UX mediante diferentes tecnologias como C++, C y LabView.",
        "Instalacion electronica de proyectos desarrollados internamente.",
        "Instalacion de sistema repelente de aves en antenas de comunicacion celular.",
        "Desarrollo y mantenimiento de sitio web de la empresa.",
      ],
    },
  ];

  const webdesign = [
    {
      name: "1UP Web Designs",
      description:
        "Agencia de diseño, desarrollo y marketing digital",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://1upwebdesigns.com/",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, webdesign, projects };