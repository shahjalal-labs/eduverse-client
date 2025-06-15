import { Link } from "react-router";
import { motion } from "motion/react";
import {
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRocket,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-[80vh] my-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 sm:px-12 lg:px-32 py-20 rounded-2xl">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
      >
        📞 Contact <span className="text-cyan-400">Us</span>
      </motion.h1>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        Have questions, suggestions, or collaboration ideas? Reach out to the
        creator of <span className="text-cyan-400 font-semibold">EduVerse</span>
        , a MERN-based collaborative assignment platform. Let’s build the future
        of group learning — together.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">
            👤 Md. Shahjalal
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-400" />
              Gazipur, Dhaka, Sharifpur, Bangladesh 🇧🇩
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <a
                href="tel:+8801540325659"
                className="hover:underline hover:text-white"
              >
                +880 1540-325659
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <a
                href="mailto:shahjalalmern@gmail.com"
                className="hover:underline hover:text-white"
              >
                shahjalalmern@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-white" />
              <a
                href="https://github.com/shahjalal-labs/client-EduVerse-withjwt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white"
              >
                GitHub Repo
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaRocket className="text-cyan-400" />
              MERN Developer | CEO of EduVerse 🚀
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-6 mt-6 text-xl">
            <a
              href="https://www.youtube.com/@shahjalal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-white transition"
              title="YouTube Channel"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com/shahjalal.labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <Link
              to="https://www.linkedin.com/in/md-sj-825bb4341/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </motion.div>

        {/* Platform Features */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">
            💡 About EduVerse
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
            <li>📚 Peer-to-peer assignment system with marking & feedback</li>
            <li>📄 Google Doc submissions with notes</li>
            <li>🤝 Collaborative & social learning experience</li>
            <li>📊 Real-time submission & evaluation dashboard</li>
            <li>🎨 Responsive, dark mode, modern UI/UX</li>
            <li>🔐 JWT Auth + MERN Stack (Mongo, Express, React, Node)</li>
          </ul>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <Link
          to="/"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          🚀 Start Exploring EduVerse
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactUs;
