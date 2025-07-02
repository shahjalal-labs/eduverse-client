const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to EduVerse, your trusted online platform for collaborative
        group study and assignment management. Our mission is to empower
        students and educators by providing a seamless and interactive
        environment to create, submit, evaluate, and track assignments.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        EduVerse was built with the vision of making education more
        collaborative, transparent, and engaging. Whether you are a student,
        group leader, or instructor, EduVerse provides the tools you need to
        enhance your academic workflow.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-secondary">Our Team</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We are a passionate group of developers and educators committed to
        delivering modern, user-friendly web applications that make a difference
        in the education sector.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-secondary">Contact Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        For inquiries, feedback, or support, please visit our{" "}
        <a
          href="/contact-us"
          className="text-primary font-medium underline hover:text-primary-dark"
        >
          Contact Page
        </a>
        . We’d love to hear from you!
      </p>
    </section>
  );
};

export default AboutUs;
