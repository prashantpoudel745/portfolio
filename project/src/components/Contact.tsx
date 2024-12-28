import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
export function Contact() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          message,
        }),
      });
      console.log(response);
      toast.success("Data saved successfully");
      setEmail("");
      setMessage("");
      setName("");
    } catch (error) {
      toast.error("Error saving data" + error);
    }
  };
  return (
    <section className="bg-gradient-to-t from-black to-blue-950 px-8 py-32 md:px-16 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-4xl font-bold text-white md:text-5xl z-0"
      >
        Get in Touch
      </motion.h2>
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="h-6 w-6 text-blue-400" />
              <span>prashantpoudel745@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="h-6 w-6 text-blue-400" />
              <span>+977 9869891980</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span>Kathmandu</span>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg text-gray-300 "
          >
            If you have any queries regarding us feel free to contact us at this
            form and we will try our best to reach you as soon as possible
          </motion.p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
