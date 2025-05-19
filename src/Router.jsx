import {
  createBrowserRouter
} from "react-router";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        path:'/',
        Component: Home,
        
      }
    ]
  },
]);