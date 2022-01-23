import { Navigate } from "react-router-dom";
import DashboardLayout from "src/components/DashboardLayout";
import MainLayout from "src/components/MainLayout";

import UserCreate from "src/pages/users/UserCreate";
import ColaDosList from "./pages/colaDos/ColaDosList";
import ColaUnoList from "./pages/ColaUno/ColaUnoList"

import ColaDosEdit from "./pages/colaDos/ColaDosEdit";
import ColaUnoEdit from "./pages/ColaUno/ColaUnoEdit";

import NotFound from "src/pages/NotFound";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Navigate to="/crear" /> },
      { path: "crear", element: <UserCreate /> },
      { path: "colaUno", element: <ColaUnoList /> },
      { path: "colaUno/edit/:id", element: <ColaUnoEdit /> },
      { path: "colaDos", element: <ColaDosList /> },
      { path: "colaDos/edit/:id", element: <ColaDosEdit /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Navigate to="/crear" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
