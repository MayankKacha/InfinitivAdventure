import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Expeditions from './components/Expeditions';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Expeditions />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
