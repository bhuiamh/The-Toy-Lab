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
import FlashSaleBanner from "../components/pages/component/FlashSaleBanner";
import Carousel from "../components/pages/component/Carousel";
import AboutUs from "../components/pages/component/AboutUs";
import FeedbackPage from "../components/pages/component/FeedbackPage";
import ToyDetails from "../components/pages/component/ToyDetails";
import ErrorPage from "../components/pages/component/ErrorPage/ErrorPage";
import FaqPage from "../components/pages/component/faq/FaqPage";
import GiftCard from "../components/pages/component/GiftCard";
import EducationalResources from "../components/pages/component/EducationalResources";
import Testimonials from "../components/pages/component/Testimonials";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <div>
            <FlashSaleBanner></FlashSaleBanner>
            <GiftCard></GiftCard>
            <Carousel></Carousel>
            <AllToys></AllToys>
            <EducationalResources></EducationalResources>
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>
            <FaqPage></FaqPage>
            <FeedbackPage></FeedbackPage>
          </div>
        ),
      },

      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blogs></Blogs> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/register", element: <SignUpPage></SignUpPage> },
    ],
  },
  {
    path: "alltoys",
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
        path: "/alltoys:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
            <Footer></Footer>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
