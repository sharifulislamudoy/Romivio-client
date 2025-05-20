import {
  createBrowserRouter
} from "react-router";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/SignupForm";
import BrowseListing from "./Pages/BrowseListing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path:'/',
        Component: Home,
      },
      {
        path:'/login',
        Component: LoginForm,
      },
      {
        path: '/signup',
        Component: SignupForm,
      },
      {
        path: '/browse',
        Component: BrowseListing,
      }
    ]
  },
]);