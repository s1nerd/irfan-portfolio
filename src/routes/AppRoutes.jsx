import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "@/components/common/Loading";
import ROUTES from "@/constants/routes";
import MainLayout from "@/layouts/MainLayout";
import Contact from "@/pages/Contact/Contact";
import ProjectDetail from "@/pages/Projects/ProjectDetail";
import Projects from "@/pages/Projects/Projects";
import Resume from "@/pages/Resume/Resume";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import AppProvider from "@/providers/AppProvider";

import ScrollToTop from "./ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />

        <Suspense fallback={<Loading fullscreen />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={ROUTES.HOME} element={<Home />} />

              <Route path={ROUTES.PROJECTS} element={<Projects />} />

              <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetail />} />

              <Route path={ROUTES.RESUME} element={<Resume />} />

              <Route path={ROUTES.CONTACT} element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  );
}
