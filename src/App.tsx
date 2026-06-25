import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Team from './components/Team';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Team />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
}
