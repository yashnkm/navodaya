import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import TestimonialsColumns from '../components/testimonials-columns-1'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Appointment from '../components/Appointment/Appointment'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div id="top" className="min-h-screen bg-cultured">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TestimonialsColumns />
        <WhyChooseUs />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;