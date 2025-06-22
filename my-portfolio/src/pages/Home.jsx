function Home() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl font-extrabold text-white tracking-wide mb-4">
        Jan Thomas
      </h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        Observer. Seeker. Protector.  
        I craft software with precision and purpose —  
        blending logic with vision, in a world that often makes little sense.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="#projects"
          className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
