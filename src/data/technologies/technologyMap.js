import {
  SiAxios,
  SiExpress,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
  SiMikrotik,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSocketdotio,
  SiSqlite,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const technologyMap = {
  React: {
    icon: SiReact,
    color: "text-sky-400",
    category: "Frontend Library",
    description: "Build interactive user interfaces.",
  },

  Vite: {
    icon: SiVite,
    color: "text-violet-400",
    category: "Build Tool",
    description: "Fast frontend tooling.",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "text-cyan-400",
    category: "CSS Framework",
    description: "Utility-first CSS framework.",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "text-yellow-400",
    category: "Programming Language",
    description: "Application development language.",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "text-green-500",
    category: "Runtime",
    description: "Backend JavaScript runtime.",
  },

  "Express.js": {
    icon: SiExpress,
    color: "text-slate-300",
    category: "Backend Framework",
    description: "REST API framework.",
  },

  SQLite: {
    icon: SiSqlite,
    color: "text-blue-400",
    category: "Database",
    description: "Lightweight SQL database.",
  },

  MySQL: {
    icon: SiMysql,
    color: "text-sky-500",
    category: "Database",
    description: "Relational database.",
  },

  MongoDB: {
    icon: SiMongodb,
    color: "text-green-400",
    category: "Database",
    description: "NoSQL database.",
  },

  "Socket.IO": {
    icon: SiSocketdotio,
    color: "text-white",
    category: "Realtime Communication",
    description: "Real-time bidirectional communication.",
  },

  JWT: {
    icon: SiJsonwebtokens,
    color: "text-pink-400",
    category: "Authentication",
    description: "Secure authentication using JSON Web Token.",
  },

  Axios: {
    icon: SiAxios,
    color: "text-violet-400",
    category: "HTTP Client",
    description: "Promise-based HTTP client.",
  },

  Git: {
    icon: SiGit,
    color: "text-orange-500",
    category: "Version Control",
    description: "Source code version control.",
  },

  Postman: {
    icon: SiPostman,
    color: "text-orange-400",
    category: "API Testing",
    description: "API development and testing.",
  },

  MikroTik: {
    icon: SiMikrotik,
    color: "text-red-400",
    category: "Networking",
    description: "Enterprise networking solution.",
  },
};

export default technologyMap;
