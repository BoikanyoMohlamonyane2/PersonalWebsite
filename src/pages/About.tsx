import { motion } from 'framer-motion';

export function About() {
  const skills = [
    { name: "React", level: 66 },
    { name: "TypeScript", level: 60 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 85 },
    { name: "Java", level: 90 },
    { name: "Flask", level: 59 },
    { name: "Django", level: 55 },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a passionate Full Stack Developer with 1 year of experience
                in building web applications. As a Computer Science graduate, I
                combine strong academic foundations with hands-on experience to
                craft innovative and effective solutions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in software development started with a curiosity
                about how things work on the web, which led me to explore
                various technologies and frameworks. Today, I specialize in
                building scalable web applications using modern technologies.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                Technical Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Education
              </h3>
              <p className="text-gray-400">
                Advanced Diploma in Computer Science
              </p>
              <p className="text-gray-500">Tshwane University of Technology</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Experience
              </h3>
              <p className="text-gray-400">Fullstack Developer</p>
              <p className="text-gray-500">1+ Year Professional Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">Focus</h3>
              <p className="text-gray-400">Web Development</p>
              <p className="text-gray-500">
                Modern Technologies & Best Practices
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Interests
              </h3>
              <p className="text-gray-400">Cloud Computing</p>
              <p className="text-gray-500">AI & Machine Learning</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}