import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { AISection } from './components/AISection';
import { References } from './components/References';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <AISection />
      <References />
      <Contact />
    </main>
  );
}
