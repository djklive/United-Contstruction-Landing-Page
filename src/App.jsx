import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}