import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const HeartRating = ({ projectId, onRate }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${projectId}`);
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    }
  }, [projectId]);

  const handleRate = (rate) => {
    setRating(rate);
    localStorage.setItem(`rating-${projectId}`, rate);
    onRate(rate);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((heart) => (
        <FaHeart
          key={heart}
          className={`cursor-pointer ${heart <= rating ? 'text-red-500' : 'text-gray-300'}`}
          onClick={() => handleRate(heart)}
        />
      ))}
    </div>
  );
};

export default HeartRating;