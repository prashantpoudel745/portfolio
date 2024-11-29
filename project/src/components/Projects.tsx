import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack application built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'Project Two',
    description: 'A basic twitter application built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ['Node.js', 'Mongodb', 'Express', 'React','Taiwnd CSS']
  },
  {
    title: 'Project Three',
    description: 'A Simple car racing game with pytorch that allows you to play against a computer.',
    image: 'data:image/jpeg;base64,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',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ['Python', 'Pytorch' ,'Numpy' ,"Pygame"]
  },
  {
    title: 'Project Four',
    description: 'Personalize Fitness with MachineLearning Accurately By Predicting Calorie Burnt doing exercises',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ["Python", "Scikit Learn","Numpy","Pandas","Matplotlib",]
  },
  {
    title: 'Project Five',
    description: 'A full Stack web Application built with the help of Wordpress , Elementor and Woocommerce with payment Integrated system',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com',
    live: 'https://example.com',
    tags: ["Wordpress","Elementor","Woocommerce","PHP","HTML","CSS"]
  }
];
export function Projects() {
  return (
    <section className="bg-black px-8 py-32 md:px-16 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-lg bg-blue-950"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full bg-blue-900 px-3 py-1 text-sm text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-gray-300 transition-colors hover:text-blue-400"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center space-x-2 text-gray-300 transition-colors hover:text-blue-400"
                >
                  {/* <ExternalLink size={20} />
                  <span>Live Demo</span> */}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}