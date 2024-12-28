import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Copyright from "./components/Copyright";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Copyright />
      <Toaster />
    </main>
  );
}

export default App;
