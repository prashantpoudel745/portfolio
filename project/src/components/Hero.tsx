import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { AnimatedSphere } from './Scene';
export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-blue-950">
      {/* Background sphere */}
      <div className="absolute right-0 top-0 h-screen sm:w-full lg:w-1/2 md:w-1/2">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-16 lg:px-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-blue-400">Prashant</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-gray-300"
          >
            Full Stack Developer specializing in building exceptional digital experiences.
            Turning ideas into elegant, functional solutions.
          
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-gray-300"
          >
             If you like to see more of my works do make sure to visit my github profile
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-6"
          >
            <a href="https://github.com/prashantpoudel745" className="transform text-gray-300 transition-all hover:scale-110 hover:text-blue-400">
              <Github size={24} />
            </a>
            {/* <a href="https://linkedin.com" className="transform text-gray-300 transition-all hover:scale-110 hover:text-blue-400">
              <Linkedin size={24} />
            </a> */}
            <a href="mailto:prashantpoudel745@gmail.com" className="transform text-gray-300 transition-all hover:scale-110 hover:text-blue-400">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}