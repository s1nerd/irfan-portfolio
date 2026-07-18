import { lazy } from "react";

export const Home = lazy(() => import("@/pages/Home/Home"));

export const Projects = lazy(() => import("@/pages/Projects/Projects"));

export const Resume = lazy(() => import("@/pages/Resume/Resume"));

export const Contact = lazy(() => import("@/pages/Contact/Contact"));

export const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
