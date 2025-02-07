import  Navbar  from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ReviewSection from "./components/Reviews";
import Footer from "./components/Footer";
import './index.css';
export default function App() {
  return (
    <div className="relative antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background Color slate-950 fo all the page */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-2]"></div>        {/* Backgrond video */}
        <video
          className="absolute top-0 z-[-1] left-0 w-full h-full object-cover opacity-10"
          autoPlay
          loop
          muted
          
        >
          <source src="https://res.cloudinary.com/dsp7m9bat/video/upload/v1738533801/irgzamfx9rsrmiug2q0v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div>   
        < Navbar />

        <Hero/>
        
        <About />

        <Skills/>
        
        <Projects />

        <ReviewSection/>

        <Contact/>

        <Footer/>

        <ScrollToTopButton/>
      </div>
    </div>
  );
};
