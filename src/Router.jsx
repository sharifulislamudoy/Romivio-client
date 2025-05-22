import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/SignupForm";
import BrowseListing from "./Pages/BrowseListing";
import AddRoommateForm from "./Pages/AddRoommateForm";
import MyListings from "./Pages/MyListings";
import UpdateRoommateForm from "./Pages/UpdateRoommateForm";
import ListingDetails from "./Components/ListingDetails";
import LoadingSpinner from "./Components/LoadingSpinner";
import PrivateRoute from "./Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/login',
        Component: LoginForm,
      },
      {
        path: '/signup',
        Component: SignupForm,
      },
      {
        path: '/browse',
        loader: () => fetch(`http://localhost:3000/listings`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        Component: BrowseListing,
      },
      {
        path: '/add-roommate',
        element: <PrivateRoute>
          <AddRoommateForm></AddRoommateForm>
        </PrivateRoute>
      },
      {
        path: '/my-listings',
        element: <PrivateRoute><MyListings /></PrivateRoute>
      },
      {
        path: '/update-roommate/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/listings/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        Component: UpdateRoommateForm
      },
      {
        path: '/listings/:id',
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/listings/${params.id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch listing");
          }
          return res.json();
        },
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        element: <PrivateRoute>
          <ListingDetails></ListingDetails>
        </PrivateRoute>
      },
    ]
  },
]);