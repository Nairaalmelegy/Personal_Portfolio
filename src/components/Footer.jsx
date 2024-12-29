
import logo from '../assets/nav/Small_Brain.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 opacity-70 custom-footer-shape">
      <div className="container mx-auto flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 mb-4" />
        <p className="text-center text-gray-400">Keep pushing forward, you&apos;re doing great!</p>
      </div>
    </footer>
  );
};

export default Footer;