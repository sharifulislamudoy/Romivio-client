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
import VerifiedProfiles from "./Components/VerifiedProfiles";
import CommunityDriven from "./Components/CommunityDriven";
import FastEasy from "./Components/FastEasy";
import LocationMatching from "./Components/LocationMatching";
import ConnectAndChat from "./Components/ConnectAndChat";

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
        loader: () => fetch(`https://roomivio-server.vercel.app/listings`),
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
        loader: ({ params }) => fetch(`https://roomivio-server.vercel.app/listings/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        element: <PrivateRoute>
          <UpdateRoommateForm></UpdateRoommateForm>
        </PrivateRoute>
      },
      {
        path: '/listings/:id',
        loader: async ({ params }) => {
          const res = await fetch(`https://roomivio-server.vercel.app/listings/${params.id}`);
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
      {
        path: '/verified',
        Component: VerifiedProfiles,
      },
      {
        path: '/community-driven',
        Component: CommunityDriven,
      },
      {
        path: '/fast-easy',
        Component: FastEasy
      },
      {
        path: '/location-matching',
        Component: LocationMatching,
      },
      {
        path: '/connect-and-chat',
        Component: ConnectAndChat,
      }
    ]
  },
]);