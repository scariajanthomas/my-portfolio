function Contact() {
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h1>

      <form
        action="mailto:scaria.jan.thomas@gmail.com"
        method="POST"
        encType="text/plain"
        className="flex flex-col space-y-4 mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-gray-900 border border-gray-700 rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-gray-900 border border-gray-700 rounded px-4 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="bg-gray-900 border border-gray-700 rounded px-4 py-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-6 py-2 font-semibold hover:bg-blue-500 transition"
        >
          Send Message
        </button>
      </form>

      <div className="flex justify-center gap-6 text-sm text-gray-400">
        <a href="mailto:scaria.jan.thomas@gmail.com" className="hover:text-white">Email</a>
        <a href="https://github.com/scariajanthomas" target="_blank" className="hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/jan-scaria-thomas" target="_blank" className="hover:text-white">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" className="hover:text-white">Download Resume</a>
      </div>
    </section>
  );
}

export default Contact;
