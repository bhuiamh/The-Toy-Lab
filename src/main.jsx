import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/pages/Main/Main";
import AllToys from "./components/pages/component/AllToys";
import MyToys from "./components/pages/component/MyToys";
import AddToy from "./components/pages/component/AddToy";
import Blogs from "./components/pages/component/Blogs";
import LoginPage from "./components/pages/component/LoginPage";
import SignUpPage from "./components/pages/component/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      { path: "/mytoys", element: <MyToys></MyToys> },
      { path: "/addatoy", element: <AddToy></AddToy> },
      { path: "/blog", element: <Blogs></Blogs> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/register", element: <SignUpPage></SignUpPage> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
