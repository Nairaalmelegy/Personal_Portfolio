import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Alert = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const alertClass = type === 'success' ? 'border-green-500' : 'border-red-500';

  return (
    <div className={`fixed top-5 right-50 bg-white border-l-4 ${alertClass} p-4 shadow-lg rounded`}>
      <p className="text-gray-800">{message}</p>
    </div>
  );
};

export default Alert;
