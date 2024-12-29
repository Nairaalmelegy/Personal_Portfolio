import { useState } from 'react';
import './About.css';

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main id="About-section" className="p-5">
      <h1 className="text-gray-100 font-playwrite text-center p-2 text-2xl">About Me</h1>
      <div
        className="About-container relative flex flex-col lg:flex-row justify-between items-center bg-opacity-70 p-5 lg:p-10 rounded-lg shadow-lg"
        style={{
          backgroundColor: 'rgb(15 23 42 / var(--tw-bg-opacity, 0.7))',
          maxWidth: '75rem',
          margin: '0 auto',
        }}
      >
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            className="h-auto rounded-full w-40 sm:w-60 lg:w-80"
            src="My_Photo.png"
            alt="Naira Mohammed"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col text-center lg:text-left justify-between lg:ml-10 space-y-3 lg:space-y-6">
          <p className="text-gray-100 text-md sm:text-sm lg:text-md max-w-full sm:max-w-lg">
            Hi, I’m Naira, an aspiring bioinformatician and web developer passionate about combining technology and biology. I’m currently learning how to build web applications and analyze biological data to contribute to meaningful innovations in healthcare and research.
            One of my recent projects is a medicine delivery platform, which simplifies healthcare accessibility. While I’m still exploring both fields, I’m excited about the opportunities to bridge coding with life sciences to solve real-world problems.
          </p>
          <p className="text-gray-100 text-md sm:text-sm lg:text-md max-w-full sm:max-w-lg">
            👉&nbsp;Check out,{' '}
            <span
              className="text-cyan-500 cursor-pointer font-bold"
              onClick={handleOpenModal}
            >
              What is Bioinformatics video
            </span>
            , to learn more about how this field is revolutionizing medicine and biology.
          </p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-3 lg:p-5 rounded-lg shadow-lg max-w-sm sm:max-w-lg w-full">
              <button
                className="absolute top-1 right-1 text-red-500 font-semibold rounded-lg w-6 h-6 flex items-center justify-center"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <video className="w-full h-auto" controls>
                <source src="What_Is_Bioinformatics.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Small icons */}
        <div className="hidden sm:block">
          <img
            src="v1.png"
            alt="Web"
            className="absolute w-8 sm:w-10 h-8 sm:h-10 cursor-pointer float-up"
            style={{ top: '2em', left: '16em' }}
          />
          <img
            src="v3.png"
            alt="process"
            className="absolute w-8 sm:w-10 h-8 sm:h-10 cursor-pointer float-up"
            style={{ top: '2em', left: '5.5em' }}
          />
          <img
            src="v2.png"
            alt="cloud"
            className="absolute w-8 sm:w-10 h-8 sm:h-10 cursor-pointer float-up"
            style={{ top: '6em', left: '18em' }}
          />
          <img
            src="WEB_DE.png"
            alt="Web design"
            className="absolute w-16 sm:w-20 h-16 sm:h-18 cursor-pointer float-up"
            style={{ top: '8em', left: '3em' }}
          />
        </div>
      </div>
    </main>
  );
};
