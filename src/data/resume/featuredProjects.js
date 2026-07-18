import aksaraOpsCover from "@/assets/images/projects/aksaraops/cover.png";
import recruitmentCover from "@/assets/images/projects/recruitment/cover.png";

const featuredProjects = [
  {
    id: 1,

    slug: "aksaraops",

    cover: aksaraOpsCover,

    title: "AksaraOps",

    subtitle: "Enterprise Operations Platform",

    category: "Enterprise System",

    status: "Completed",

    description:
      "Enterprise operations platform integrating IT Helpdesk, Inventory Management, Device Management, Procurement, Audit Trail, and business operations into a centralized ecosystem designed to improve operational efficiency.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "SQLite",
      "JWT",
      "Tailwind CSS",
    ],
  },

  {
    id: 2,

    slug: "recruitment-system",

    cover: recruitmentCover,

    title: "Recruitment System",

    subtitle: "ATS & Online Psychotest",

    category: "HR System",

    status: "Completed",

    description:
      "Recruitment platform featuring Applicant Tracking System (ATS), online psychotest, Big Five personality assessment, interview workflow, and recruitment analytics for HR teams.",

    technologies: [
      "React",
      "Express.js",
      "SQLite",
      "REST API",
      "JWT",
      "Tailwind CSS",
    ],
  },
];

export default featuredProjects;
