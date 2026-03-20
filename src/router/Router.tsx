import { createBrowserRouter, Navigate } from "react-router-dom";
// layout
import Layout from "../components/layout/Layout";
// error
import ErrorBoundary from "../pages/error/ErrorBoundary";
// home
import HomePage from "../pages/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
