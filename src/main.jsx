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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
