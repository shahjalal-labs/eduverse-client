Generate a professional, modern, and production-ready `README.md` file based on my project. Your entire  output **must be enclosed within a single markdown code block** using triple backticks and `markdown` as the language. Absolutely **no text should be outside** the code block. The structure, formatting, and content should follow **industry best practices** for open-source projects, with clearly separated sections (e.g., Features, Tech Stack, Installation, Folder Structure, License, etc.).

The markdown must:
- Use clear section headers (`##`) and subheaders (`###`) consistently
- Include emoji icons in section titles for modern visual appeal
- Apply bullet lists, tables, and code fences (` ``` `) for commands and code
- Be **ready to paste directly** into a markdown previewer with no extra modification
- Contain no redundant explanations or system-generated text outside the markdown block

Make sure this `README.md` looks visually appealing, easy to read, and suitable for developers on GitHub or other platforms. Output strictly in one markdown code block.



## 📁 File Structure
```bash
.
├── bun.lock
├── .env
├── eslint.config.js
├── .gitignore
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── circle-zoom-in-out.json
│   │   ├── cone-lottie.json
│   │   ├── create.json
│   │   ├── createLottie2.json
│   │   ├── evaluate.json
│   │   ├── gradient.json
│   │   ├── hand.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   ├── motion.js
│   │   ├── submit.json
│   │   ├── update-lottie.json
│   │   └── update-man-lottie.json
│   ├── App.jsx
│   ├── assets
│   │   └── images
│   │       ├── assignments
│   │       ├── banner1.jpg
│   │       ├── banner2.jpg
│   │       ├── banner3.jpg
│   │       ├── banner4.jpg
│   │       ├── banner5.jpg
│   │       ├── banner6.jpg
│   │       ├── banner7.jpg
│   │       ├── index.js
│   │       ├── jobseeker1.jpg
│   │       ├── jobseeker2.jpg
│   │       └── notfound3.jpg
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   ├── firebase.init.js
│   │   └── firebaseUtility.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useCustomMediaQurey.jsx
│   │   └── useHelmet.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── modules
│   │   ├── assignments
│   │   │   ├── assignmentRoutes.jsx
│   │   │   ├── components
│   │   │   └── pages
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── pages
│   │   ├── landing
│   │   │   ├── home
│   │   │   └── index.js
│   │   ├── shared
│   │   │   ├── Layout
│   │   │   └── ui
│   │   ├── submission
│   │   │   ├── components
│   │   │   └── pages
│   │   └── users
│   │       ├── admin
│   │       ├── recruiter
│   │       └── seeker
│   ├── pages
│   │   ├── faq
│   │   │   ├── faq.constant.js
│   │   │   └── FAQ.jsx
│   │   └── features
│   │       └── Features.jsx
│   ├── router
│   │   ├── ErrorPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── themeSwither.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
├── structure.md
├── .vite
│   └── deps
│       ├── _metadata.json
│       └── package.json
└── vite.config.js

37 directories, 68 files

```


## 📦 package.json
```json
{
  "name": "client-workelebate",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.8",
    "@tanstack/react-query": "^5.80.6",
    "axios": "^1.9.0",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "firebase": "^11.8.1",
    "k-form": "^1.0.3",
    "lottie-react": "^2.4.1",
    "lucide-react": "^0.513.0",
    "motion": "^12.16.0",
    "react": "^19.1.0",
    "react-datepicker": "^8.4.0",
    "react-day-picker": "^9.7.0",
    "react-dom": "^19.1.0",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.57.0",
    "react-hooks-testing-library": "^0.6.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-responsive": "^10.0.1",
    "react-router": "^7.6.1",
    "react-simple-typewriter": "^5.0.1",
    "sweetalert2": "^11.22.0",
    "tailwindcss": "^4.1.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "daisyui": "^5.0.43",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}

```


## 🗺️ Routes
```js

// File: src/modules/assignments/assignmentRoutes.jsx

import ProtectedRoute from "../../router/ProtectedRoute";
import { fetchData } from "../../utils/fetchData";
import EvaluateSubmissionPage from "../submission/pages/EvaluateSubmissionPage";
import AssignmentDetailsPage from "./pages/AssignmentDetailsPage";
import Assignments from "./pages/Assignments";
import CreateAssignment from "./pages/CreateAssignment";
import MySubmittedAssignmentPage from "./pages/MySubmittedAssignmentPage";
import PendingAssignmentsPage from "./pages/PendingAssignmentsPage";
import SubmitAssignmentPage from "./pages/SubmitAssignmentPage";
import UpdateAssignment from "./pages/UpdateAssignment";

const assignmentRoutes = [
  {
    path: "assignments/create",
    element: (
      <ProtectedRoute>
        <CreateAssignment />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignments",
    element: <Assignments />,
  },
  {
    path: "assignments/pending",
    element: (
      <ProtectedRoute>
        <PendingAssignmentsPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "assignment/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateAssignment />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignment/details/:id",
    element: (
      <ProtectedRoute>
        <AssignmentDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignment/submit/:id",
    element: (
      <ProtectedRoute>
        <SubmitAssignmentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignment/my-submit",
    element: (
      <ProtectedRoute>
        <MySubmittedAssignmentPage />
      </ProtectedRoute>
    ),
  },
  // submission route
  {
    path: "evaluate/:id",
    loader: async ({ params }) => {
      const { id } = params;
      const submissionData = await fetchData(`submission/signle/${id}`);
      return submissionData?.data;
    },
    element: (
      <ProtectedRoute>
        <EvaluateSubmissionPage />
      </ProtectedRoute>
    ),
  },
];

export default assignmentRoutes;


// File: src/modules/Auth/AuthRoute.jsx

import { Signin, SignUp } from "../Auth";
import AuthLayout from "../Auth/AuthLayout";
import ForgotPassword from "../Auth/pages/ForgotPass";
const AuthRoute = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "signin",
      Component: Signin,
    },

    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "forgot-pass",
      Component: ForgotPassword,
    },
  ],
};

export default AuthRoute;


// File: src/router/ProtectedRoute.jsx

import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../modules/shared/Layout/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // console.log(user, "ProtectedRoute.jsx", 6);
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/auth/signin"></Navigate>;

  return children;
};

export default ProtectedRoute;


// File: src/router/router.jsx

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


```


## 📄 Existing README
```md
🚀 EduVerse – Online Group Study & Assignment Portal

EduVerse is a **MERN-based**, fully authenticated, and interactive assignment submission platform designed for students and groups. With **modern UI/UX**, EduVerse enables students to **collaborate**, **submit**, and **evaluate** assignments seamlessly.

--

## 🌐 Live Site

🔗 [Live Client (Surge)](https://edu-verse.surge.sh/) <br >
🔗 [Live Server (Vercel)](https://eduverse-server.vercel.app/) <br >
🔗 [Client source code (github)](https://github.com/shahjalal-labs/client-EduVerse-withjwt/) <br >
🔗 [Server source code (github)](https://github.com/shahjalal-labs/server-EduVerse-withjwt/)<br >

---

## 🎯 Project Purpose

> **EduVerse** enables students to:

- Create and assign group assignments
- Submit assignment links (e.g., Google Docs)
- Evaluate peers’ assignments (except your own)
- Track submissions, marks, and feedback
- Communicate academic progress transparently

---

## ✨ Key Features

### 🔒 Authentication

- Google/GitHub Sign-in using Firebase Auth
- JWT (HttpOnly Cookie) based session handling
- Route protection via `ProtectedRoute.jsx`

### 📝 Assignments

- Create assignments with title, description, difficulty, marks, and due date
- Update and view assignment details
- Submit via Google Docs link with optional notes
- View own submitted assignments, marks, and feedback

### 🧑‍🏫 Evaluation

- View all ungraded submissions (except your own)
- Give marks and feedback as a peer examiner

### 🧭 Navigation & Routing

Powered by **React Router v7**

- `/assignments` – Assignment listing
- `/assignments/create` – Create new assignment
- `/assignment/details/:id` – View assignment
- `/assignment/submit/:id` – Submit response
- `/assignment/my-submit` – View your submissions
- `/assignments/pending` – View submissions you can evaluate
- `/evaluate/:id` – Give marks/feedback
- `/auth/...` – Sign in, Sign up, Forgot Password
- `/about-us`, `/contact-us`, `/terms-condition`, `/cookie-policy`, `/privacy-policy` – Informational pages

---

## 🧱 Tech Stack

| Frontend    | Backend       | Styling         | Extras                     |
| ----------- | ------------- | --------------- | -------------------------- |
| React 19    | Node.js (Bun) | TailwindCSS     | Lottie React Animations    |
| Vite        | Express.js    | DaisyUI         | React Icons & Lucide       |
| Firebase    | MongoDB       | Motion (Framer) | React Hook Form            |
| React Query | JWT           | SweetAlert2     | React Day Picker / DateFns |

---

## 🗂️ Client Project Structure

```tree
.
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── assets
│   │   └── images
│   │       ├── assignments
│   │       │   ├── ai.jpg
│   │       │   ├── backendserver.jpg
│   │       │   ├── developerpuzzles.jpg
│   │       │   └── weatherapp.jpg
│   │       ├── banner1.jpg
│   │       ├── banner2.jpg
│   │       ├── banner3.jpg
│   │       ├── banner4.jpg
│   │       ├── banner5.jpg
│   │       ├── banner6.jpg
│   │       ├── banner7.jpg
│   │       ├── index.js
│   │       ├── jobseeker1.jpg
│   │       ├── jobseeker2.jpg
│   │       └── notfound3.jpg
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── firebase
│   │   ├── firebase.init.js
│   │   └── firebaseUtility.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useCustomMediaQurey.jsx
│   │   └── useHelmet.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── modules
│   │   ├── assignments
│   │   │   ├── assignmentRoutes.jsx
│   │   │   ├── components
│   │   │   │   ├── AssignmentCardBody.jsx
│   │   │   │   ├── AssignmentCard.jsx
│   │   │   │   ├── AssignmentsPageIntro.jsx
│   │   │   │   ├── CreateAssignmentForm.jsx
│   │   │   │   ├── FilterSearch.jsx
│   │   │   │   ├── SubmitAssignment
│   │   │   │   └── updateAssignments
│   │   │   │       ├── AssignmentDetails
│   │   │   │       │   └── AssignmentDetailsCard.jsx
│   │   │   │       └── UpdateAssignmentForm.jsx
│   │   │   └── pages
│   │   │       ├── AssignmentDetailsPage.jsx
│   │   │       ├── Assignments.jsx
│   │   │       ├── CreateAssignment.jsx
│   │   │       ├── MySubmittedAssignmentPage.jsx
│   │   │       ├── PendingAssignmentsPage.jsx
│   │   │       ├── SubmitAssignmentPage.jsx
│   │   │       └── UpdateAssignment.jsx
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── components
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── SigninText.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   ├── SignUpPasswordInputs.jsx
│   │   │   │   ├── SignUpText.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   └── pages
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── landing
│   │   │   ├── home
│   │   │   │   ├── Banner
│   │   │   │   │   ├── BannerCard.jsx
│   │   │   │   │   ├── BannerImg.jsx
│   │   │   │   │   ├── Banner.jsx
│   │   │   │   │   └── WebIntro.jsx
│   │   │   │   └── Home.jsx
│   │   │   └── index.js
│   │   ├── shared
│   │   │   ├── Layout
│   │   │   │   ├── CommonFooter.jsx
│   │   │   │   ├── footerPages
│   │   │   │   │   ├── AboutUs.jsx
│   │   │   │   │   ├── ContactUs.jsx
│   │   │   │   │   ├── CookiePolicy.jsx
│   │   │   │   │   ├── PrivacyPolicy.jsx
│   │   │   │   │   └── TermsCondition.jsx
│   │   │   │   ├── FooterSocialIcons.jsx
│   │   │   │   ├── index.js
│   │   │   │   ├── NavbarDrawer.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── navbarLinksConstant.jsx
│   │   │   │   ├── RootLayout.jsx
│   │   │   │   └── Spinner.jsx
│   │   │   └── ui
│   │   │       ├── Avatar.jsx
│   │   │       ├── Brand.jsx
│   │   │       ├── Button.jsx
│   │   │       ├── DropDown.jsx
│   │   │       ├── index.js
│   │   │       └── Input.jsx
│   │   ├── submission
│   │   │   ├── components
│   │   │   │   └── evaluateSubmission
│   │   │   │       ├── EvaluateSubmissionText.jsx
│   │   │   │       └── EvaluateSumissionForm.jsx
│   │   │   └── pages
│   │   │       └── EvaluateSubmissionPage.jsx
│   │   └── users
│   │       ├── admin
│   │       │   ├── AdminLayout.jsx
│   │       │   ├── components
│   │       │   ├── index.js
│   │       │   └── pages
│   │       ├── recruiter
│   │       │   ├── components
│   │       │   │   ├── AddJobBasicInfo.jsx
│   │       │   │   ├── AddJobFilter.jsx
│   │       │   │   ├── AddJobSelect.jsx
│   │       │   │   ├── Dropdown.jsx
│   │       │   │   ├── PostedJobTableRow.jsx
│   │       │   │   ├── SalaryRange.jsx
│   │       │   │   └── TextArea.jsx
│   │       │   ├── index.js
│   │       │   ├── pages
│   │       │   │   ├── AddJob.jsx
│   │       │   │   ├── ApplicantForPostedJobs.jsx
│   │       │   │   └── MyPostedJobs.jsx
│   │       │   ├── recruiter.constant.js
│   │       │   └── RecruiterLayout.jsx
│   │       └── seeker
│   │           ├── components
│   │           ├── index.js
│   │           ├── pages
│   │           └── SeekerLayout.jsx
│   ├── pages
│   │   ├── faq
│   │   │   ├── faq.constant.js
│   │   │   └── FAQ.jsx
│   │   └── features
│   │       └── Features.jsx
│   ├── router
│   │   ├── ErrorPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── themeSwither.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
├── structure.md
└── vite.config.js

49 directories, 144 files

```

---

## 🧑‍💻 Developer Info

| Info         | Details                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| 👨 Name      | Md. Shahjalal                                                                                           |
| 🌍 Location  | Sharifpur, Gazipur, Dhaka, Bangladesh                                                                   |
| 💼 LinkedIn  | [md-sj-825bb4341](https://www.linkedin.com/in/md-sj-825bb4341/)                                         |
| 📘 Facebook  | [facebook.com](https://www.facebook.com/profile.php?id=61556383702555)                                  |
| ▶️ YouTube   | [@muhommodshahjalal9811](https://www.youtube.com/@muhommodshahjalal9811)                                |
| 🧠 GitHub    | [shahjalal-labs](https://github.com/shahjalal-labs)                                                     |
| 📁 Portfolio | [Live](http://shahjalal-labs.surge.sh/) • [Code](https://github.com/shahjalal-labs/shahjalal-portfolio) |

---

## 🧪 Packages Used

### Core Libraries

```bash
react, react-dom, react-router, vite


```

## UI styling:

```bash
tailwindcss, daisyui, motion, react-icons, lottie-react, lucide-react

```

## Firebase & Auth

```
firebase (Google + GitHub Auth), JWT cookie auth

```

## Date & Utils

```
react-day-picker, date-fns, axios, react-responsive, react-helmet-async

```

## Upcoming Features (ToDo) :

```
1. Advanced dashboard with charts and analytics
2. Customize assignments
```

### 📌 Project Timeline

`📆 Started: 14 June, 2025`
`🕓 Time Zone: GMT+6 (Dhaka)`
`🛠️ Status: 🚧 Actively Improving`

---

## 🤝 Contributions

`Suggestions, issues, and pull requests are welcome!`

```
git clone https://github.com/shahjalal-labs/client-EduVerse-withjwt
cd client-EduVerse-withjwt
npm install
npm run dev

```

---

## 📝 License

MIT License – © 2025 Md. Shahjalal

## 📂 Project Information

| 📝 **Detail**           | 📌 **Value**                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 🔗 **GitHub URL**       | [https://github.com/shahjalal-labs/client-EduVerse-withjwt](https://github.com/shahjalal-labs/client-EduVerse-withjwt) |
| 🌐 **Live Site**        | [http://shahjalal-labs.surge.sh/](http://shahjalal-labs.surge.sh/)                                                     |
| 💻 **Portfolio GitHub** | [https://github.com/shahjalal-labs/shahjalal-portfolio](https://github.com/shahjalal-labs/shahjalal-portfolio)         |
| 🌐 **Portfolio Live**   | [http://shahjalal-labs.surge.sh/](http://shahjalal-labs.surge.sh/)                                                     |
| 📁 **Directory**        | `/run/media/sj/developer/web/L1B11/11mi/ass/eduversewithjwt/client-EduVerse`                                           |
| 👤 **Username**         | `sj`                                                                                                                   |
| 📅 **Created On**       | `14/06/2025 11:11 অপরাহ্ণ শনি GMT+6`                                                                                   |
| 📍 **Location**         | Sharifpur, Gazipur, Dhaka                                                                                              |
| 💼 **LinkedIn**         | [https://www.linkedin.com/in/md-sj-825bb4341/](https://www.linkedin.com/in/md-sj-825bb4341/)                           |
| 📘 **Facebook**         | [https://www.facebook.com/profile.php?id=61556383702555](https://www.facebook.com/profile.php?id=61556383702555)       |
| ▶️ **YouTube**          | [https://www.youtube.com/@muhommodshahjalal9811](https://www.youtube.com/@muhommodshahjalal9811)                       |

---

>

```

client github: https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-shahjalal-labs

server github: https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-shahjalal-labs

live site client: https://edu-verse.surge.sh

live site server: https://server-edu-verse.vercel.app

```

```