import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import assignmentRoutes from "../modules/assignments/assignmentRoutes";
import AboutUs from "../modules/shared/Layout/footerPages/AboutUs";
import ContactUs from "../modules/shared/Layout/footerPages/ContactUs";
import TermsCondition from "../modules/shared/Layout/footerPages/TermsCondition";
import CookiePolicy from "../modules/shared/Layout/footerPages/CookiePolicy";
import PrivacyPolicy from "../modules/shared/Layout/footerPages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        Component: App,
      },

      // faq pages

      // assignments route
      ...assignmentRoutes,

      //footer pages
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
      {
        path: "terms-condition",
        Component: TermsCondition,
      },
      {
        path: "cookie-policy",
        Component: CookiePolicy,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "cookie-policy",
        Component: CookiePolicy,
      },
    ],
  },

  AuthRoute,
]);

export default router;
