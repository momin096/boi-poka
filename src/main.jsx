// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/DashBoard/DashBoard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement : <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element : <DashBoard />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
