# 📁 Project Structure

```bash
.
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── CNAME
├── readmeGenerate.md
├── README.md
├── READMEPrev.md
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
│   │   ├── images
│   │   │   ├── assignments
│   │   │   │   ├── ai.jpg
│   │   │   │   ├── backendserver.jpg
│   │   │   │   ├── developerpuzzles.jpg
│   │   │   │   └── weatherapp.jpg
│   │   │   ├── banner1.jpg
│   │   │   ├── banner2.jpg
│   │   │   ├── banner3.jpg
│   │   │   ├── banner4.jpg
│   │   │   ├── banner5.jpg
│   │   │   ├── banner6.jpg
│   │   │   ├── banner7.jpg
│   │   │   ├── index.js
│   │   │   ├── jobseeker1.jpg
│   │   │   ├── jobseeker2.jpg
│   │   │   └── notfound3.jpg
│   │   └── preview
│   │       ├── DesktoEvaluateSubmissionpage.png
│   │       ├── DesktopAssginmentPendingpage.png
│   │       ├── DesktopAssignmentspage.png
│   │       ├── DesktopCreateAssignmentpage.png
│   │       ├── DesktopHomepage.png
│   │       ├── DesktopSubmittedPage.png
│   │       └── mobile
│   │           ├── AssignmentsPage.png
│   │           ├── createAssignment.png
│   │           ├── evaluateAssignment.png
│   │           └── homepage.png
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
│   │   │   │   ├── CreateIntroAnimate.jsx
│   │   │   │   ├── FilterSearch.jsx
│   │   │   │   ├── SubmitAssignment
│   │   │   │   └── updateAssignments
│   │   │   │       ├── AssignmentDetails
│   │   │   │       │   └── AssignmentDetailsCard.jsx
│   │   │   │       ├── UpdateAssignmentForm.jsx
│   │   │   │       └── UpdateAssignmentIntro.jsx
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
│   │   │   │   ├── nav
│   │   │   │   │   └── NavbarStart.jsx
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
│   │   │   │       ├── EvaluateSubmissionPageIntro.jsx
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

50 directories, 155 files

```
