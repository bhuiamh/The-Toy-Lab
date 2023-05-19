import { createBrowserRouter } from "react-router-dom";
import MyToys from "../components/pages/component/MyToys";
import AddToy from "../components/pages/component/AddToy";
import Blogs from "../components/pages/component/Blogs";
import LoginPage from "../components/pages/component/LoginPage";
import SignUpPage from "../components/pages/component/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import Footer from "../components/pages/shared/Footer";
import AllToys from "../components/pages/component/AllToys";
import Main from "../components/pages/Main/Main";
import ToysLayout from "../components/pages/component/ToysLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      { path: "/addatoy", element: <AddToy></AddToy> },
      { path: "/blog", element: <Blogs></Blogs> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/register", element: <SignUpPage></SignUpPage> },
    ],
  },
  {
    path: "",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <h1>My Toys from private Route. Im not heatin id</h1>,
          </PrivateRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Footer></Footer>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
