import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Alltoy from "./Component/Page/AllToy/Alltoy";
import Login from "./Component/Page/Login/Login";
import SignUp from "./Component/Page/SignUp/SignUp";
import Profile from "./Component/Page/Profile/Profile";
import Blog from "./Component/Page/Blgo/Blog";
import AddaToy from "./Component/Page/AddaToy/AddaToy";
import MyToy from "./Component/Page/MyToy/MyToy";
import AuthProvider from "./AuthProvider/AuthProvider";
import ErrorPage from "./Component/ErrorPge/ErrorPage";
import ToyDetails from "./Component/Page/ToyDetails/ToyDetails";
import PrivetRout from "./Component/PrivetRout/PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoy",
        element: <Alltoy></Alltoy>,
      },
      {
        path: "/mytoy",
        element: (
          <PrivetRout>
            <MyToy></MyToy>
          </PrivetRout>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivetRout>
            <AddaToy></AddaToy>
          </PrivetRout>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRout>
            <ToyDetails></ToyDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-faruks23.vercel.app/details/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
