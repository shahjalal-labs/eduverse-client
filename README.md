# 🚀 EduVerse – Online Group Study & Assignment Portal

EduVerse is a **MERN-based**, fully authenticated, and interactive assignment submission platform designed for students and groups. With **modern UI/UX**, EduVerse enables students to **collaborate**, **submit**, and **evaluate** assignments seamlessly.

---

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

`````

```
client github: https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-shahjalal-labs

server github: https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-shahjalal-labs

live site client: https://edu-verse.surge.sh

live site server: https://server-edu-verse.vercel.app

````
`````

banglabd new token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbmdsYWJkNTE1NUBnbWFpbC5jb20iLCJpYXQiOjE3NTAxMzAzMDMsImV4cCI6MTc1MDIxNjcwM30.GzVFtAFz7I2d789iFHUT50yEQXRX0yWHGqgUzfyFY38

banglabd token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbmdsYWJkNTE1NUBnbWFpbC5jb20iLCJpYXQiOjE3NTAxMjk5MDEsImV4cCI6MTc1MDIxNjMwMX0.iw5yqyLo7EXgRwm4e67-0n31KU7t2i-F9vQa4dUD2Fk
healtcare token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlYWx0aGNhcmUzMnFAZ21haWwuY29tIiwiaWF0IjoxNzUwMTMwMjUyLCJleHAiOjE3NTAyMTY2NTJ9.FnjIgTWA7bPLYjTDCsRXwwBSj63S_vm5zfsckPMs_Dk
