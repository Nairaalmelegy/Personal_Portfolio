import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Hero = () => {
  const typedRef = useRef(null);
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['React frontend developer', 'Bioinformatician'],
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 2500,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <main id="home-section" className="hero-container flex flex-col-reverse lg:flex-row justify-between items-center min-h-screen overflow-x-hidden p-5">
      <div className="flex flex-col lg:ml-10 space-y-5 text-center lg:text-left">
        <p className="text-gray-100 text-lg">Welcome!</p>
        <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-100">I&apos;m Naira Almelegy</h1>
        <h2 className="text-2xl sm:text-xl lg:text-3xl font-bold text-white">
          A Passionate &nbsp;
          <span ref={typedRef} className="text-cyan-400" />
        </h2>
        <p className="text-gray-100">I&apos;m glad you&apos;re here. Take a look around and learn more about what I do.</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 pt-5">
          <button
            className="bg-cyan-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-800"
            onClick={handleGetInTouch}
          >
            Get in touch
          </button>
          <a
            href="/CV/Naira_Mohammed_CV.pdf"
            download="CV.pdf"
            className="bg-cyan-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-800"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex p-5 justify-center">
        <img className="max-w-full h-auto rounded-xl opacity-70 lg:translate-x-10" src="Analyse.gif" alt="Hero" />
      </div>
    </main>

  );
};