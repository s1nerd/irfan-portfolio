import PROJECT_CATEGORY from "@/constants/projectCategory";
import PROJECT_STATUS from "@/constants/projectStatus";

import aksaraOpsCover from "@/assets/images/projects/aksaraops/cover.png";
import recruitmentCover from "@/assets/images/projects/recruitment/cover.png";

import aksaraArchitecture from "@/assets/images/projects/aksaraops/architecture.png";
import recruitmentArchitecture from "@/assets/images/projects/recruitment/architecture.png";

import aksaraDatabase from "@/assets/images/projects/aksaraops/database.png";
import recruitmentDatabase from "@/assets/images/projects/recruitment/database.png";

import dashboard from "@/assets/images/projects/aksaraops/dashboard.png";
import helpdesk from "@/assets/images/projects/aksaraops/helpdesk.png";
import inventory from "@/assets/images/projects/aksaraops/inventory.png";
import devices from "@/assets/images/projects/aksaraops/devices.png";
import procurement from "@/assets/images/projects/aksaraops/procurement.png";
import audit from "@/assets/images/projects/aksaraops/audit.png";

import recruitmentDashboard from "@/assets/images/projects/recruitment/dashboard.png";
import candidatePortal from "@/assets/images/projects/recruitment/candidate-portal.png";
import psychotest from "@/assets/images/projects/recruitment/psychotest.png";
import bigFive from "@/assets/images/projects/recruitment/big-five.png";
import recruitmentMonitoring from "@/assets/images/projects/recruitment/recruitment-dashboard.png";

const projects = [
  {
    //----------------------------------
    // IDENTITAS
    //----------------------------------

    id: 1,

    slug: "aksaraops",

    featured: true,

    sortOrder: 1,

    //----------------------------------
    // BASIC INFORMATION
    //----------------------------------

    title: "AksaraOps",

    subtitle: "Enterprise IT Asset & Service Management System",

    company: "PT Mensana Aneka Satwa",

    role: "Full Stack Developer",

    category: PROJECT_CATEGORY.ENTERPRISE,

    status: PROJECT_STATUS.PRODUCTION,

    //----------------------------------
    // TIMELINE
    //----------------------------------

    startDate: "2026-01",

    endDate: null,

    timeline: [
      {
        id: 1,
        title: "Project Initiation",
        date: "January 2026",
        description:
          "Started planning the overall architecture, database schema, and development roadmap.",
      },

      {
        id: 2,
        title: "Core Development",
        date: "February 2026",
        description:
          "Implemented authentication, backend architecture, and core business modules.",
      },

      {
        id: 3,
        title: "Feature Expansion",
        date: "March 2026",
        description:
          "Added inventory management, procurement workflow, notifications, and reporting.",
      },

      {
        id: 4,
        title: "Production Deployment",
        date: "Present",
        description:
          "Continuously maintaining and improving the platform with new enterprise features.",
      },
    ],

    //----------------------------------
    // CONTENT
    //----------------------------------

    shortDescription:
      "Integrated internal platform for IT Helpdesk, Inventory, Asset Management, Procurement, and Enterprise Operations.",

    // Dipertahankan sementara agar ProjectCard & ProjectModal tidak rusak
    description:
      "AksaraOps is an enterprise internal web application developed to streamline IT operations by integrating ticketing, inventory management, device management, procurement, audit trails, and real-time notifications into a single platform.",

    overview:
      "AksaraOps is an enterprise internal web application developed to centralize IT operational activities into one integrated platform. It combines IT Helpdesk, Inventory, Device Management, Procurement, Notifications, Dashboard, and Audit Trail to improve operational efficiency.",

    businessProblem: {
      context:
        "PT Mensana Aneka Satwa is a holding company overseeing 8 subsidiary companies and 32 branches across Indonesia. Before AksaraOps, all IT operational activities were handled manually without an integrated internal system.",

      workflow: [
        "IT support requests managed through WhatsApp.",
        "Inventory recorded manually using Microsoft Excel.",
        "Procurement submitted via Google Docs with printed approvals.",
        "Device ownership and maintenance tracked manually.",
        "Operational documents scattered across multiple folders and platforms.",
      ],

      challenges: [
        "No centralized IT operation platform.",
        "Manual inventory and asset management.",
        "Difficult ticket monitoring across all branches.",
        "High risk of human error and inconsistent records.",
        "Time-consuming reporting and audit preparation.",
      ],

      impacts: [
        "Slower response to IT issues.",
        "Reduced operational visibility.",
        "Inefficient administrative workflows.",
        "Limited asset traceability.",
        "Increasing workload as the organization expanded.",
      ],
    },

    //----------------------------------
    // LINKS
    //----------------------------------

    github: null,

    demo: null,

    //----------------------------------
    // MEDIA
    //----------------------------------

    cover: aksaraOpsCover,

    gallery: [
      {
        id: 1,
        title: "Dashboard",
        description:
          "Enterprise operational dashboard displaying IT ticket statistics, inventory summaries, workload monitoring, and real-time business insights.",
        image: dashboard,
      },
      {
        id: 2,
        title: "IT Helpdesk",
        description:
          "Centralized ticket management system for handling incidents, service requests, priorities, SLA monitoring, and technician assignments.",
        image: helpdesk,
      },
      {
        id: 3,
        title: "Inventory Management",
        description:
          "Inventory control module for managing stock movements, warehouses, item transactions, and inventory history.",
        image: inventory,
      },
      {
        id: 4,
        title: "Device Management",
        description:
          "Manage enterprise devices, specifications, ownership history, warranties, lifecycle, and asset tracking.",
        image: devices,
      },
      {
        id: 5,
        title: "Procurement",
        description:
          "Digital procurement workflow including purchase requests, approvals, vendor management, and purchasing status.",
        image: procurement,
      },
      {
        id: 6,
        title: "Audit Trail",
        description:
          "Complete activity history that records every important action across all enterprise modules.",
        image: audit,
      },
    ],

    //----------------------------------
    // PROJECT METRICS
    //----------------------------------

    metrics: [
      {
        id: 1,
        label: "Enterprise Modules",
        value: "7",
        color: "blue",
      },

      {
        id: 2,
        label: "REST APIs",
        value: "60+",
        color: "cyan",
      },

      {
        id: 3,
        label: "Database Tables",
        value: "20+",
        color: "emerald",
      },

      {
        id: 4,
        label: "Reusable UI Components",
        value: "250+",
        color: "violet",
      },

      {
        id: 5,
        label: "Core Business Domains",
        value: "5",
        color: "amber",
      },

      {
        id: 6,
        label: "Socket.IO Events",
        value: "Realtime",
        color: "pink",
      },
    ],

    //----------------------------------
    // TECHNOLOGY STACK
    //----------------------------------

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "SQLite",
      "Socket.IO",
      "JWT Authentication",
      "Multer",
      "XLSX",
      "REST API",
    ],

    //----------------------------------
    // ARCHITECTURE
    //----------------------------------

    architecture: [
      {
        id: 1,
        layer: "Frontend",
        technologies: ["React", "Vite", "Tailwind CSS"],
      },
      {
        id: 2,
        layer: "Backend",
        technologies: ["Node.js", "Express.js"],
      },
      {
        id: 3,
        layer: "Database",
        technologies: ["SQLite"],
      },
      {
        id: 4,
        layer: "Communication",
        technologies: ["RESTful API", "Socket.IO"],
      },
    ],

    architectureDiagram: {
      image: aksaraArchitecture,

      overview:
        "AksaraOps adopts a layered architecture that separates the presentation layer, business logic, data access, and database. This separation improves maintainability, scalability, and simplifies future feature development.",

      principles: [
        {
          id: 1,
          title: "Layered Architecture",
          description:
            "Separate presentation, business logic, and data access layers.",
        },
        {
          id: 2,
          title: "RESTful API",
          description: "Frontend communicates securely with backend services.",
        },
        {
          id: 3,
          title: "Controller-Service-Repository",
          description:
            "Clear separation of responsibilities for maintainability.",
        },
        {
          id: 4,
          title: "JWT Authentication",
          description:
            "Secure authentication and authorization for protected resources.",
        },
        {
          id: 5,
          title: "Socket.IO Events",
          description: "Realtime communication for notifications and updates.",
        },
        {
          id: 6,
          title: "Scalable Design",
          description:
            "Modular architecture that supports future business expansion.",
        },
      ],

      flow: [
        {
          id: 1,
          title: "React Frontend",
        },
        {
          id: 2,
          title: "REST API",
        },
        {
          id: 3,
          title: "Express.js Backend",
        },
        {
          id: 4,
          title: "Controller Layer",
        },
        {
          id: 5,
          title: "Service Layer",
        },
        {
          id: 6,
          title: "Repository Layer",
        },
        {
          id: 7,
          title: "SQLite Database",
        },
      ],
    },

    database: {
      image: aksaraDatabase,

      tables: [
        {
          id: 1,
          title: "Users",
        },
        {
          id: 2,
          title: "Roles",
        },
        {
          id: 3,
          title: "Companies",
        },
        {
          id: 4,
          title: "Departments",
        },
        {
          id: 5,
          title: "Branches",
        },
        {
          id: 6,
          title: "Locations",
        },
        {
          id: 7,
          title: "Tickets",
        },
        {
          id: 8,
          title: "Devices",
        },
        {
          id: 9,
          title: "Items",
        },
        {
          id: 10,
          title: "Transactions",
        },
        {
          id: 11,
          title: "Procurement",
        },
        {
          id: 12,
          title: "Notifications",
        },
        {
          id: 13,
          title: "Audit Logs",
        },
      ],

      relationships: [
        {
          id: 1,
          title: "Users → Roles",
        },
        {
          id: 2,
          title: "Companies → Branches",
        },
        {
          id: 3,
          title: "Branches → Departments",
        },
        {
          id: 4,
          title: "Departments → Users",
        },
        {
          id: 5,
          title: "Users → Tickets",
        },
        {
          id: 6,
          title: "Users → Devices",
        },
        {
          id: 7,
          title: "Items → Transactions",
        },
        {
          id: 8,
          title: "Procurement → Items",
        },
      ],
    },

    //----------------------------------
    // MODULES
    //----------------------------------

    modules: [
      {
        id: 1,
        title: "IT Helpdesk",
        description:
          "Manage incident reports, service requests, ticket assignments, priorities, and SLA monitoring.",
      },

      {
        id: 2,
        title: "Inventory",
        description:
          "Manage stock movement, warehouse inventory, and item transactions.",
      },

      {
        id: 3,
        title: "Device Management",
        description:
          "Track company devices, ownership history, lifecycle, and specifications.",
      },

      {
        id: 4,
        title: "Procurement",
        description:
          "Handle purchase requests, approvals, and procurement workflows.",
      },

      {
        id: 5,
        title: "Realtime Notification",
        description:
          "Deliver real-time notifications across all enterprise modules using Socket.IO.",
      },

      {
        id: 6,
        title: "Dashboard",
        description:
          "Provide operational summaries, KPIs, and real-time statistics.",
      },

      {
        id: 7,
        title: "Audit Trail",
        description:
          "Maintain complete activity history for accountability and compliance.",
      },
    ],

    //----------------------------------
    // FEATURES
    //----------------------------------

    features: [
      {
        id: 1,
        title: "IT Helpdesk",
        description:
          "Manage incident reports, service requests, ticket assignments, priorities, and status tracking.",
      },
      {
        id: 2,
        title: "Inventory Management",
        description:
          "Monitor inventory movement, stock levels, and warehouse assets in one centralized module.",
      },
      {
        id: 3,
        title: "Device Management",
        description:
          "Track company devices, ownership history, specifications, and lifecycle.",
      },
      {
        id: 4,
        title: "Procurement Workflow",
        description:
          "Handle purchase requests, approvals, procurement tracking, and vendor management.",
      },
      {
        id: 5,
        title: "Realtime Notification System",
        description:
          "Receive instant updates across multiple modules using Socket.IO.",
      },
    ],

    //----------------------------------
    // CHALLENGES
    //----------------------------------

    challenges: [
      {
        id: 1,
        title: "Asset Visibility",
        description:
          "Maintaining accurate ownership and lifecycle records for enterprise devices.",
      },
      {
        id: 2,
        title: "Workflow Integration",
        description:
          "Connecting inventory, procurement, and helpdesk into one unified workflow.",
      },
      {
        id: 3,
        title: "Auditability",
        description:
          "Providing complete operational history for accountability and compliance.",
      },
    ],

    //----------------------------------
    // SOLUTIONS
    //----------------------------------

    solutions: [
      {
        id: 1,
        title: "Manual IT Helpdesk",
        description:
          "Implemented a centralized ticket management system with structured workflows, priorities, assignments, status tracking, and operational monitoring.",
      },

      {
        id: 2,
        title: "Spreadsheet-Based Inventory",
        description:
          "Developed an integrated inventory management module with stock transactions, movement history, warehouse tracking, and centralized reporting.",
      },

      {
        id: 3,
        title: "Manual Device Administration",
        description:
          "Built a complete device lifecycle management module to manage company assets, ownership history, specifications, warranties, and maintenance records.",
      },

      {
        id: 4,
        title: "Disconnected Procurement Process",
        description:
          "Digitalized procurement requests with structured workflows, approval tracking, status monitoring, and centralized documentation.",
      },

      {
        id: 5,
        title: "Scattered Operational Data",
        description:
          "Unified helpdesk, inventory, procurement, notifications, dashboard, and audit trail into a single enterprise platform.",
      },
    ],

    //----------------------------------
    // EXPERIENCE
    //----------------------------------

    lessonsLearned: [
      {
        id: 1,
        title: "Reusable Components",
        description:
          "Reusable React components significantly accelerated development.",
      },

      {
        id: 2,
        title: "Service Layer",
        description: "Separating business logic improved maintainability.",
      },

      {
        id: 3,
        title: "Modular Architecture",
        description: "A modular architecture simplified future scalability.",
      },
    ],

    futureImprovements: [
      {
        id: 1,
        title: "Email Notification",
        description: "Automatic email notifications for important events.",
      },

      {
        id: 2,
        title: "Mobile Application",
        description: "Provide mobile access for IT staff.",
      },

      {
        id: 3,
        title: "Multi Company Support",
        description: "Support multiple organizations within one platform.",
      },

      {
        id: 4,
        title: "Docker Containerization",
        description: "Containerize the application for easier deployment.",
      },

      {
        id: 5,
        title: "CI/CD Pipeline",
        description: "Automate build, testing, and deployment.",
      },

      {
        id: 6,
        title: "Multi-Tenant Architecture",
        description: "Support multiple tenants with isolated data.",
      },
    ],
  },

  {
    //----------------------------------
    // IDENTITAS
    //----------------------------------

    id: 2,

    slug: "recruitment-system",

    featured: true,

    sortOrder: 2,

    //----------------------------------
    // BASIC INFORMATION
    //----------------------------------

    title: "Recruitment System",

    subtitle: "Recruitment & Online Psychotest Engine",

    company: "Independent",

    role: "Full Stack Developer",

    category: PROJECT_CATEGORY.HR_PLATFORM,

    status: PROJECT_STATUS.PRODUCTION,

    //----------------------------------
    // TIMELINE
    //----------------------------------

    startDate: "2026-01",

    endDate: null,

    timeline: [
      {
        id: 1,
        title: "Project Initiation",
        date: "January 2026",
        description:
          "Designed recruitment workflow and psychotest architecture.",
      },

      {
        id: 2,
        title: "Authentication & Recruitment",
        date: "February 2026",
        description:
          "Implemented authentication, recruitment management, and candidate portal.",
      },

      {
        id: 3,
        title: "Psychotest Engine",
        date: "March 2026",
        description:
          "Developed configurable psychotest engine and automatic scoring.",
      },

      {
        id: 4,
        title: "Production",
        date: "Present",
        description:
          "Project is actively maintained and expanded with additional HR features.",
      },
    ],

    //----------------------------------
    // CONTENT
    //----------------------------------

    shortDescription:
      "End-to-end recruitment platform featuring dynamic online psychotests and Big Five Personality Assessment.",

    description:
      "An enterprise recruitment platform designed to streamline recruitment workflows from job posting and candidate applications to online psychotests, automated scoring, personality assessment, and HR evaluation through one integrated system.",

    overview:
      "An enterprise recruitment platform that centralizes job vacancies, candidate applications, online psychotests, personality assessments, automatic scoring, and recruitment monitoring into one integrated system.",

    businessProblem:
      "Recruitment activities were handled using disconnected spreadsheets and manual assessments, making candidate evaluation inconsistent, difficult to monitor, and time-consuming.",

    //----------------------------------
    // LINKS
    //----------------------------------

    github: null,

    demo: null,

    //----------------------------------
    // MEDIA
    //----------------------------------

    cover: recruitmentCover,

    gallery: [
      {
        id: 1,
        title: "Dashboard",
        description:
          "Executive recruitment dashboard providing hiring statistics, application progress, candidate pipeline, and recruitment performance overview.",
        image: recruitmentDashboard,
      },

      {
        id: 2,
        title: "Candidate Portal",
        description:
          "Self-service candidate portal for job applications, profile management, application tracking, and recruitment progress.",
        image: candidatePortal,
      },

      {
        id: 3,
        title: "Online Psychotest",
        description:
          "Integrated online psychotest platform featuring timer, autosave, anti-cheat mechanisms, and automatic scoring.",
        image: psychotest,
      },

      {
        id: 4,
        title: "Big Five Assessment",
        description:
          "Comprehensive Big Five personality assessment with automated scoring, interpretation, and candidate personality reports.",
        image: bigFive,
      },

      {
        id: 5,
        title: "Recruitment Dashboard",
        description:
          "Administrative dashboard for HR to monitor vacancies, candidate progress, interview stages, psychotest results, and hiring activities.",
        image: recruitmentMonitoring,
      },
    ],

    //----------------------------------
    // PROJECT METRICS
    //----------------------------------

    metrics: [
      {
        id: 1,
        label: "Modules",
        value: "14+",
      },

      {
        id: 2,
        label: "Psychotest Types",
        value: "Multiple",
      },

      {
        id: 3,
        label: "Authentication",
        value: "JWT",
      },

      {
        id: 4,
        label: "Architecture",
        value: "CSR",
      },

      {
        id: 5,
        label: "Database",
        value: "SQLite",
      },

      {
        id: 6,
        label: "REST APIs",
        value: "50+",
      },
    ],

    //----------------------------------
    // TECHNOLOGY STACK
    //----------------------------------

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "SQLite",
      "JWT",
      "Axios",
      "Zustand",
    ],

    //----------------------------------
    // ARCHITECTURE
    //----------------------------------

    architecture: [
      {
        id: 1,
        layer: "Frontend",
        technologies: ["React", "Vite", "Tailwind CSS", "Zustand"],
      },

      {
        id: 2,
        layer: "Backend",
        technologies: ["Node.js", "Express.js"],
      },

      {
        id: 3,
        layer: "Database",
        technologies: ["SQLite"],
      },

      {
        id: 4,
        layer: "Authentication",
        technologies: ["JWT"],
      },

      {
        id: 5,
        layer: "Communication",
        technologies: ["REST API", "Axios"],
      },
    ],

    architectureDiagram: {
      image: recruitmentArchitecture,

      overview:
        "The Recruitment System follows a layered architecture consisting of frontend presentation, REST API communication, business services, repository layer, and database persistence to support scalable recruitment workflows and psychotest processing.",

      principles: [
        {
          id: 1,
          title: "Layered Architecture",
          description:
            "Separate presentation, business logic, and data persistence into dedicated layers.",
        },
        {
          id: 2,
          title: "RESTful API",
          description:
            "Frontend communicates securely with backend services through REST APIs.",
        },
        {
          id: 3,
          title: "Psychotest Engine",
          description:
            "Dedicated assessment engine for configurable psychotests and automated scoring.",
        },
        {
          id: 4,
          title: "JWT Authentication",
          description:
            "Role-based authentication secures HR, recruiters, and candidate access.",
        },
        {
          id: 5,
          title: "Repository Pattern",
          description:
            "Separate data access from business logic to improve maintainability.",
        },
        {
          id: 6,
          title: "Scalable Recruitment Workflow",
          description:
            "Designed to support recruitment pipelines, candidate evaluations, and future HR modules.",
        },
      ],

      flow: [
        {
          id: 1,
          title: "React Frontend",
        },
        {
          id: 2,
          title: "REST API",
        },
        {
          id: 3,
          title: "Express.js Backend",
        },
        {
          id: 4,
          title: "Psychotest Engine",
        },
        {
          id: 5,
          title: "Repository Layer",
        },
        {
          id: 6,
          title: "SQLite Database",
        },
      ],
    },

    database: {
      image: recruitmentDatabase,

      tables: [
        {
          id: 1,
          title: "Users",
        },
        {
          id: 2,
          title: "Job Vacancies",
        },
        {
          id: 3,
          title: "Applications",
        },
        {
          id: 4,
          title: "Psychotests",
        },
        {
          id: 5,
          title: "Questions",
        },
        {
          id: 6,
          title: "Answers",
        },
        {
          id: 7,
          title: "Results",
        },
      ],

      relationships: [
        {
          id: 1,
          title: "Users → Applications",
        },
        {
          id: 2,
          title: "Job Vacancies → Applications",
        },
        {
          id: 3,
          title: "Psychotests → Questions",
        },
        {
          id: 4,
          title: "Questions → Answers",
        },
        {
          id: 5,
          title: "Applications → Results",
        },
      ],
    },

    //----------------------------------
    // MODULES
    //----------------------------------

    modules: [
      {
        id: 1,
        title: "Authentication",
        description: "Secure login and role-based access control.",
      },

      {
        id: 2,
        title: "Recruitment",
        description:
          "Manage job vacancies, applications, and recruitment workflow.",
      },

      {
        id: 3,
        title: "Candidate Portal",
        description:
          "Portal for applicants to submit applications and monitor progress.",
      },

      {
        id: 4,
        title: "Psychotest Engine",
        description:
          "Dynamic online psychotest engine with configurable questions.",
      },

      {
        id: 5,
        title: "Big Five Assessment",
        description:
          "Automatic personality assessment using the Big Five model.",
      },

      {
        id: 6,
        title: "Dashboard",
        description: "Recruitment statistics and monitoring dashboard.",
      },
    ],

    //----------------------------------
    // FEATURES
    //----------------------------------

    features: [
      {
        id: 1,
        title: "Dynamic Psychotest",
        description: "Create configurable online psychotests.",
      },

      {
        id: 2,
        title: "Automatic Scoring",
        description: "Automatically calculate candidate scores.",
      },

      {
        id: 3,
        title: "Big Five Personality",
        description: "Generate personality reports automatically.",
      },

      {
        id: 4,
        title: "Candidate Ranking",
        description: "Rank applicants based on configurable scoring.",
      },

      {
        id: 5,
        title: "Role Based Access",
        description: "Permission management for HR and Admin.",
      },

      {
        id: 6,
        title: "Resume Upload",
        description: "Upload candidate CV and supporting documents.",
      },

      {
        id: 7,
        title: "Progress Tracking",
        description: "Track recruitment progress for every candidate.",
      },
    ],

    //----------------------------------
    // CHALLENGES
    //----------------------------------

    challenges: [
      {
        id: 1,
        title: "Dynamic Psychotest",
        description:
          "Designing configurable psychotest templates with reusable sections.",
      },

      {
        id: 2,
        title: "Automatic Evaluation",
        description:
          "Building a flexible scoring engine for different assessment types.",
      },

      {
        id: 3,
        title: "Recruitment Workflow",
        description:
          "Creating scalable recruitment workflows for multiple positions.",
      },
    ],

    //----------------------------------
    // SOLUTIONS
    //----------------------------------

    solutions: [
      {
        id: 1,
        title: "Configurable Engine",
        description:
          "Implemented reusable psychotest templates and configurable sections.",
      },

      {
        id: 2,
        title: "Automatic Scoring",
        description: "Developed automatic scoring and candidate ranking.",
      },

      {
        id: 3,
        title: "Modular Architecture",
        description: "Separated frontend and backend into reusable modules.",
      },
    ],

    //----------------------------------
    // EXPERIENCE
    //----------------------------------

    lessonsLearned: [
      {
        id: 1,
        title: "Configurable Architecture",
        description:
          "Building configurable psychotest templates significantly improved feature scalability.",
      },

      {
        id: 2,
        title: "Business Logic Separation",
        description:
          "Separating business logic simplified maintenance and future enhancements.",
      },

      {
        id: 3,
        title: "Reusable Components",
        description:
          "Reusable frontend architecture reduced development time across multiple modules.",
      },
    ],

    futureImprovements: [
      {
        id: 1,
        title: "Video Interview",
        description:
          "Integrate online video interviews directly into the recruitment process.",
      },

      {
        id: 2,
        title: "AI Candidate Screening",
        description:
          "Leverage AI to assist in candidate matching and initial screening.",
      },

      {
        id: 3,
        title: "Email Automation",
        description:
          "Automatically send recruitment notifications and interview invitations.",
      },

      {
        id: 4,
        title: "Multi Company",
        description: "Support recruitment processes across multiple companies.",
      },

      {
        id: 5,
        title: "Docker Deployment",
        description: "Simplify deployment using Docker containerization.",
      },
    ],
  },
];

export default projects;
