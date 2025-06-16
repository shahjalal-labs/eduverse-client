.
├── bun.lock
├── dist
│   ├── 200.html
│   ├── assets
│   │   ├── banner1-gaH06MF0.jpg
│   │   ├── banner2-CWYMHgBG.jpg
│   │   ├── banner3-CZ7XeKvy.jpg
│   │   ├── banner4-BlXO_cFF.jpg
│   │   ├── banner5-Bt3rVsGE.jpg
│   │   ├── banner6-Dof1e_yB.jpg
│   │   ├── banner7-CYoVP1-E.jpg
│   │   ├── index-2-Z_DZrJ.js
│   │   ├── index-5OnJyaGx.css
│   │   ├── jobseeker1-CgAo3wI1.jpg
│   │   ├── jobseeker2-mtN3WWmm.jpg
│   │   └── notfound3-BzQkv1ea.jpg
│   ├── CNAME
│   └── index.html
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
