import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
const projects = [
  {
    title: "Bursary Care Advisor",
    description:
      "A system that helps Grade 11, 12, and post-matric students easily find and apply for bursaries.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80%22%20alt=%22Graduation%20Celebration", // Student finance / education theme
    technologies: ["Html", "Python", "MySQL Workbench", "CSS"],
    github: "https://github.com/BoikanyoMohlamonyane2/Bursary-Care-Advisor",
    live: "https://ecommerce-demo.com",
  },

  {
    title: "Extreme service Delivery Portal",
    description:
      "A Collaborative system that helps community members report issues from their residences and receive updates from municipalities",
    image:
      "https://media.istockphoto.com/id/174662203/photo/pot-hole.webp?a=1&b=1&s=612x612&w=0&k=20&c=yaf-icnDIlpR4sUD_hsJuB1x0z8bTsxUbl8xhh84niU=", // Student finance / education theme
    technologies: ["Kotlin", "Node JS", "Retrofit APIs", "My SQL Workbench", "MVC"],
    github:
      "https://github.com/iceptutemalahleni/extreme-service-delivery-portal-android",
    live: "https://ecommerce-demo.com",
  },

  {
    title: "The Invincible Banking App",
    description:
      "A collaborative system that enables backend transactions with real-time balance updates and withdrawal tracking.",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&h=500", // Finance / banking vibe
    technologies: ["Springboot", "Hibernate", "My SQL Workbench", "JEE"],
    github: "https://github.com/BoikanyoMohlamonyane2/The-Invincibles",
    live: "https://task-manager-demo.com",
  },
  {
    title: "Eco-Sort-Application",
    description:
      "A system that automatically sorts bins based on the type of trash they contain.",
    image:
      "https://media.istockphoto.com/id/2145752782/photo/colorful-garbage-bins-outdoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=TMnKb4mxIgMWoznVjqU85eKgvj8U_MbCtRb9aohQKFM=", // Weather dashboard / techy service
    technologies: ["Python", "Flask", "Open Bin  API", "CSS"],
    github: "https://github.com/BoikanyoMohlamonyane2/Eco-Sort-Application",
    live: "https://weather-dashboard-demo.com",
  },

  {
    title: "Bus Reservation System",
    description:
      "A Collaborative system that helps students to access the bus without shoving one another by making bookings of reserving a seat, But it is still under construction.",
    image:
      "https://plus.unsplash.com/premium_photo-1664298159107-d579362ca341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJ1c3xlbnwwfHwwfHx8MA%3D%3D", // Student finance / education theme
    technologies: ["Django", "React JS", "OpenCV  APIs", "My SQL Workbench",],
    github:
      "https://github.com/iceptutemalahleni/",
    live: "https://ecommerce-demo.com",
  },
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
            <h1 className="text-4xl font-bold text-white">My Projects</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400"></div>
            <p className="text-gray-300 max-w-3xl">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}