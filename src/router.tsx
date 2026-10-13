import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const People = lazy(() => import("./pages/People"));
const Services = lazy(() => import("./pages/Services"));
const Works = lazy(() => import("./pages/Works"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <People /> },
      { path: "services", element: <Services /> },
      { path: "works", element: <Works /> },
      { path: "works/:slug", element: <WorkDetail /> },
      { path: "contacts", element: <Contact /> },
      { path: "privacy", element: <Privacy /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
