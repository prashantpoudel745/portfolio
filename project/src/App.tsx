import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Projects />
      <Contact />
      <Copyright/>
    </main>
  );
}

export default App;