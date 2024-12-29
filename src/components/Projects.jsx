import { useState } from 'react';
import { projects } from "../constants/index.js";
import './Projects.css';
import HeartRating from './HeartRating'; // Import the HeartRating component

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleToggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleShowMore = () => {
    setShowAllProjects(true);
  };

  const handleShowLess = () => {
    setShowAllProjects(false);
  };

  const handleRate = (projectId, rating) => {
    console.log(`Project ${projectId} rated with ${rating} hearts`);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <main id='projects-section' className="py-10">
      <h2 className="text-4xl text-center text-gray-100 mb-8 font-playwrite">Projects</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-500 shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              {/* Project GIF image */}
              <img
                src={project.gif}
                alt={project.name}
                className="w-80% h-48 object-center object-cover mx-auto mt-4 rounded-lg"
              />
              {/* Project Details */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <p
                  className={`text-gray-300 mb-4 text-sm flex-grow ${expandedProject === index ? '' : 'truncate-2-lines'}`}
                  onClick={() => handleToggleExpand(index)}
                >
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="relative group">
                    <button
                      onClick={() => handleOpenModal(<video className="w-full h-auto" controls><source src={project.demoLink} type="video/mp4" />Your browser does not support the video tag.</video>)}
                      className={`bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition ${!project.demoLink ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!project.demoLink}
                    >
                      See Demo
                    </button>
                    {!project.demoLink && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        No Demo available
                      </span>
                    )}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition"
                  >
                    View on GitHub
                  </a>
                </div>
                <div className="mt-4">
                  <HeartRating projectId={project.id} onRate={(rating) => handleRate(project.id, rating)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {/* Show less or more button */}
          {!showAllProjects && projects.length > 3 && (
            <button
              onClick={handleShowMore}
              className="bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition"
            >
              Show More
            </button>
          )}
          {showAllProjects && (
            <button
              onClick={handleShowLess}
              className="bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-cyan-800 transition"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* Modal for videos */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="absolute top-0 right-0 text-red-500 font-semibold w-8 h-8 flex items-center justify-center"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </main>
  );
};