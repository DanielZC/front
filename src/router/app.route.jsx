import { createBrowserRouter } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { Layout } from "../pages/layout/Layout";
import { Auth } from "../pages/Auth";
import { Hotel } from "../pages/Hotel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Auth /> }],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: "/hotel/:id",
    element: <Layout />,
    children: [{ index: true, element: <Hotel /> }],
  },
]);
