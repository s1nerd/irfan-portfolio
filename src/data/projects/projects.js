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
      "Integrated enterprise platform for IT Helpdesk, Inventory, Asset Management, Procurement, and Operational Management.",

    // Dipertahankan sementara agar ProjectCard & ProjectModal tidak rusak
    description:
      "AksaraOps is an enterprise internal web application developed to centralize IT operations by integrating IT Helpdesk, Inventory, Device Management, Procurement, Operational Dashboard, Audit Trail, and Real-Time Notifications into a single platform.",

    overview:
      "AksaraOps is an enterprise internal platform designed to streamline IT operations and enterprise asset management across multiple business units. The system centralizes IT Helpdesk, Inventory, Device Lifecycle Management, Procurement, Operational Dashboard, Notifications, and Audit Trail to improve operational efficiency, increase data visibility, and simplify daily business processes.",

    businessProblem: {
      context:
        "PT Mensana Aneka Satwa operates multiple subsidiary companies and branch offices across Indonesia. As business operations expanded, IT support, inventory, asset management, and procurement were handled using separate manual processes. This fragmented approach reduced operational visibility, delayed response times, and made it increasingly difficult to maintain consistent records across the organization.",

      workflow: [
        "IT support requests were submitted and tracked through WhatsApp conversations without a centralized ticketing system.",
        "Inventory and asset records were maintained in multiple Microsoft Excel files, making synchronization difficult.",
        "Procurement requests relied on Google Forms, spreadsheets, and printed approval documents.",
        "Device ownership, warranties, and maintenance history were recorded manually without lifecycle tracking.",
        "Operational information was distributed across different documents, folders, and communication channels.",
      ],

      challenges: [
        "No centralized platform to manage enterprise IT operations.",
        "Inventory and asset information relied on manual record keeping.",
        "Limited visibility into ticket progress across multiple branches.",
        "High risk of duplicated data and inconsistent operational records.",
        "Generating operational reports and audit evidence required significant manual effort.",
      ],

      impacts: [
        "Longer response times for IT incidents and service requests.",
        "Limited visibility into daily operational activities.",
        "Administrative processes required unnecessary manual coordination.",
        "Difficulty tracking asset ownership and lifecycle history.",
        "Operational complexity increased as the organization continued to grow.",
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
          "Centralized service desk module for managing incidents, service requests, technician assignments, SLA monitoring, ticket priorities, and resolution tracking.",
      },

      {
        id: 2,
        title: "Inventory",
        description:
          "Manage inventory levels, warehouse stock, item movements, stock adjustments, and transaction history through a centralized inventory system.",
      },

      {
        id: 3,
        title: "Device Management",
        description:
          "Manage enterprise assets by tracking hardware specifications, ownership history, warranty information, maintenance schedules, and complete device lifecycle.",
      },

      {
        id: 4,
        title: "Procurement",
        description:
          "Digitize procurement activities with structured purchase requests, approval workflows, vendor coordination, and purchasing status monitoring.",
      },

      {
        id: 5,
        title: "Realtime Notification",
        description:
          "Provide instant system notifications across enterprise modules using Socket.IO to improve operational awareness and communication.",
      },

      {
        id: 6,
        title: "Operational Dashboard",
        description:
          "Present operational KPIs, ticket statistics, inventory summaries, procurement insights, and other real-time business information through a unified dashboard.",
      },

      {
        id: 7,
        title: "Audit Trail",
        description:
          "Record every important system activity to support operational transparency, accountability, security auditing, and compliance requirements.",
      },
    ],

    //----------------------------------
    // FEATURES
    //----------------------------------

    features: [
      {
        id: 1,
        title: "Centralized IT Helpdesk",
        description:
          "Provide a centralized service desk for incident reporting, service requests, ticket assignment, SLA monitoring, priority management, and complete ticket lifecycle tracking.",
      },
      {
        id: 2,
        title: "Inventory & Warehouse Management",
        description:
          "Manage inventory levels, warehouse locations, stock movements, item transactions, and inventory history through a centralized inventory management system.",
      },
      {
        id: 3,
        title: "Enterprise Device Lifecycle",
        description:
          "Track enterprise hardware throughout its lifecycle, including specifications, ownership, warranty information, maintenance records, and asset history.",
      },
      {
        id: 4,
        title: "Digital Procurement Workflow",
        description:
          "Digitize procurement requests with structured approval workflows, purchasing status tracking, vendor management, and centralized procurement records.",
      },
      {
        id: 5,
        title: "Real-Time Notification Center",
        description:
          "Deliver instant notifications across enterprise modules using Socket.IO, ensuring users receive immediate updates on operational activities and workflow changes.",
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
          "Replaced unstructured WhatsApp-based support with a centralized helpdesk system featuring ticket categorization, priority management, technician assignment, SLA tracking, and complete ticket lifecycle monitoring.",
      },

      {
        id: 2,
        title: "Spreadsheet-Based Inventory",
        description:
          "Replaced spreadsheet-based inventory records with a centralized inventory module supporting stock movement, warehouse management, transaction history, and real-time inventory visibility.",
      },

      {
        id: 3,
        title: "Manual Device Administration",
        description:
          "Introduced a centralized device management module to track hardware specifications, ownership history, warranty information, maintenance schedules, and asset lifecycle from procurement to retirement.",
      },

      {
        id: 4,
        title: "Disconnected Procurement Process",
        description:
          "Digitized procurement workflows with standardized request submission, approval routing, purchasing status tracking, and centralized procurement documentation.",
      },

      {
        id: 5,
        title: "Scattered Operational Data",
        description:
          "Integrated helpdesk, inventory, device management, procurement, dashboards, notifications, and audit trails into a single enterprise platform, providing consistent operational data and centralized management.",
      },
    ],

    //----------------------------------
    // EXPERIENCE
    //----------------------------------

    lessonsLearned: [
      {
        id: 1,
        title: "Reusable Component Architecture",
        description:
          "Designing reusable UI components and shared layouts significantly reduced development time, improved interface consistency, and simplified long-term maintenance as new enterprise modules were introduced.",
      },

      {
        id: 2,
        title: "Separation of Business Logic",
        description:
          "Separating controllers, services, and repositories made the application easier to maintain, simplified debugging, and allowed new business features to be implemented without affecting existing modules.",
      },

      {
        id: 3,
        title: "Scalable Modular Architecture",
        description:
          "Building the application as independent business modules made future enhancements easier, reduced coupling between features, and provided a scalable foundation for enterprise growth.",
      },
    ],

    futureImprovements: [
      {
        id: 1,
        title: "Email Notification Service",
        description:
          "Integrate automated email notifications for ticket updates, procurement approvals, asset lifecycle events, and other critical operational activities to improve communication and response times.",
      },

      {
        id: 2,
        title: "Mobile Application",
        description:
          "Develop a mobile application that enables IT engineers to manage tickets, approve requests, scan assets, and receive real-time notifications while working remotely.",
      },

      {
        id: 3,
        title: "Multi-Company Management",
        description:
          "Extend the platform to support multiple companies with isolated organizational structures, branches, departments, users, and configurable business rules within a single deployment.",
      },

      {
        id: 4,
        title: "Docker Containerization",
        description:
          "Package frontend, backend, and supporting services using Docker to simplify deployment, environment consistency, and infrastructure management across development and production.",
      },

      {
        id: 5,
        title: "CI/CD Pipeline",
        description:
          "Implement automated build, testing, quality assurance, and deployment pipelines to accelerate software delivery while improving reliability and release consistency.",
      },

      {
        id: 6,
        title: "Multi-Tenant Architecture",
        description:
          "Redesign the platform with a scalable multi-tenant architecture, allowing multiple organizations to securely share the same application while maintaining complete data isolation.",
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
