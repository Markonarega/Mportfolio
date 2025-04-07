import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <motion.section
      className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Markon Arega</span>
      </h1>
      <motion.p
        className="text-base sm:text-lg text-gray-800 mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        Front-end Web Developer
        <br />
        Always learning. Let's make the best web apps!
      </motion.p>
      <motion.button
        className="bg-indigo-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg font-bold text-base sm:text-lg mt-12"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  { title: "React / React Native", level: 90 },
  { title: "Node.js", level: 90 },
  { title: "TypeScript", level: 60 },
  { title: "MongoDB", level: 40 },
  { title: "Tailwind CSS", level: 75 },
];

const languages = [
  { title: "🇺🇸 English", level: 80 },
  { title: "Amharic", level: 100 },
];

const SkillsSection = () => {
  return (
    <Section>
      <h2 className="text-4xl sm:text-5xl font-bold">Skills</h2>
      <div className="mt-8 space-y-4 w-full max-w-md">
        {skills.map((skill, index) => (
          <div key={index}>
            <motion.h3
              className="text-lg font-bold text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 + index * 0.2 },
              }}
              viewport={{ once: true }}
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${skill.level}%` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{
                  scaleX: 1,
                  transition: { duration: 1, delay: 1 + index * 0.2 },
                }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold mt-12">Languages</h2>
      <div className="mt-8 space-y-4 w-full max-w-md">
        {languages.map((lng, index) => (
          <div key={index}>
            <motion.h3
              className="text-lg font-bold text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 2 + index * 0.2 },
              }}
              viewport={{ once: true }}
            >
              {lng.title}
            </motion.h3>
            <div className="h-2 bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${lng.level}%` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{
                  scaleX: 1,
                  transition: { duration: 1, delay: 2 + index * 0.2 },
                }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS showcasing my skills and projects.",
    link: "https://mportfolio-bice.vercel.app",
  },
  {
    title: "HooBank Front-end",
    description:
      "Modern bank landing page built with React and Tailwind CSS showcasing responsive design, clean UI, and smooth animations.",
    link: "https://mark-theta.vercel.app",
  },
  {
    title: "E-commerce Store",
    description: "An e-commerce frontend built with Next.js and Tailwind CSS.",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <Section>
      <h2 className="text-4xl sm:text-5xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: index * 0.2 },
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-indigo-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-4xl sm:text-5xl font-bold">Contact Me</h2>
      <div className="mt-8 p-6 sm:p-8 rounded-md bg-white w-full max-w-lg">
        <form action="https://formspree.io/f/xdkepezg" method="POST">
          <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="block w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-600"
          />

          <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-6">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="block w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-600"
          />

          <label htmlFor="message" className="font-medium text-gray-900 block mb-1 mt-6">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="h-32 block w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-bold text-base mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
