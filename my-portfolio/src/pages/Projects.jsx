const projects = [
  {
    title: "Automated Web Testing Suite",
    description:
      "A Selenium + PyTest based framework to run creative test flows using JSON and custom logic.",
    tech: ["Python", "Selenium", "PyTest", "JSON"],
    github: "https://github.com/yourusername/auto-web-test-suite",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — a calm, professional portfolio built with React, Vite, and Tailwind CSS.",
    tech: ["React", "Vite", "TailwindCSS"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Upcoming Project",
    description: "More project slots reserved for future work and exploration.",
    tech: ["To be announced"],
    github: "",
  },
];

function Projects() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:scale-[1.02] transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
