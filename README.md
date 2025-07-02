# 🚀 EduVerse — Online Group Study & Assignment Portal 🧑‍🏫👥

> EduVerse is a **MERN-based**, fully authenticated, and interactive assignment submission platform designed for students and groups. With a modern UI/UX, it enables seamless **collaboration**, **submission**, and **peer evaluation** of assignments.

---

## 🌐 Live Sites & Source Code

| Description              | Link                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| 🔗 Live Client           | [https://edu-verse.surge.sh/](https://edu-verse.surge.sh/)                 |
| 🔗 Live Server           | [https://eduverse-server.vercel.app/](https://eduverse-server.vercel.app/) |
| 📦 Client Source Code    | [GitHub Repo](https://github.com/shahjalal-labs/client-EduVerse-withjwt)   |
| 📦 Server Source Code    | [GitHub Repo](https://github.com/shahjalal-labs/server-EduVerse-withjwt)   |
| 🌐 Portfolio Live        | [http://shahjalal-mern.surge.sh/](http://shahjalal-mern.surge.sh/)         |
| 📁 Portfolio Source Code | [GitHub Repo](https://github.com/shahjalal-labs/shahjalal-portfolio)       |

---

## 🎯 Project Purpose

EduVerse empowers students to:

- Create and assign group assignments
- Submit assignment links (e.g., Google Docs)
- Evaluate peer assignments (except your own)
- Track submission statuses, marks, and feedback
- Foster transparent academic collaboration

---

## ✨ Key Features

### 🔒 Authentication & Security

- Google & GitHub OAuth via Firebase Authentication
- JWT-based session management with HttpOnly cookies
- Route protection using `<ProtectedRoute />` component

### 📝 Assignment Management

- Create assignments with detailed info: title, description, difficulty, marks, and due date
- Edit and update existing assignments
- Submit assignments via Google Docs links and optional notes
- View submitted assignments along with marks and feedback

### 🧑‍🏫 Peer Evaluation

- Access ungraded submissions excluding own
- Provide marks and qualitative feedback

### 🧭 Routing & Navigation

- React Router v7 driven nested routes
- Public informational pages: About Us, Contact, Terms, Privacy, Cookies

---

## 🧱 Tech Stack

| Frontend        | Backend       | Styling & UI         | Utilities & Extras        |
| --------------- | ------------- | -------------------- | ------------------------- |
| React 19        | Node.js (Bun) | Tailwind CSS         | React Query               |
| Vite            | Express.js    | DaisyUI              | React Hook Form           |
| Firebase Auth   | MongoDB       | Motion (Framer)      | Lottie React Animations   |
| React Router v7 | JWT           | React Icons & Lucide | React Day Picker, DateFns |
|                 |               | SweetAlert2          | Axios, React Helmet Async |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18 (recommended)
- npm or yarn
- MongoDB (local or Atlas)
- Firebase project with Auth enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/shahjalal-labs/client-EduVerse-withjwt.git
cd client-EduVerse-withjwt

# Install dependencies
npm install

# Start development server
npm run dev

```
