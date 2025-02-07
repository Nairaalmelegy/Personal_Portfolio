import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { supabase } from "../supabaseClient"; // Import Supabase client
import PropTypes from "prop-types";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ text: "", rating: 0 });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) console.error("Error fetching reviews:", error);
      else setReviews(data);
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.text.trim() && formData.rating > 0) {
      const newReview = {
        text: formData.text,
        rating: formData.rating,
        timestamp: new Date().toISOString(),
      };

      const { error } = await supabase.from("reviews").insert([newReview]);

      if (error) {
        console.error("Error adding review:", error);
      } else {
        const { data: updatedReviews, error: fetchError } = await supabase
          .from("reviews")
          .select("*")
          .order("timestamp", { ascending: false });

        if (fetchError) console.error("Error fetching updated reviews:", fetchError);
        else setReviews(updatedReviews);

        setFormData({ text: "", rating: 0 });
        setShowSuccessModal(true);
      }
    }
  };

  return (
    <main>
      <h1 className="text-3xl text-center mt-12 text-white font-playwrite">Reviews</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Review Form */}
          <div className="text-cyan-500 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">Rating</label>
                <StarRating
                  rating={formData.rating}
                  onRatingChange={(rating) => setFormData((prev) => ({ ...prev, rating }))}
                  hoverable={true}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-100 mb-2">Your Review</label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
                  className="w-full px-3 py-2 border bg-gray-300 text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Write your review here"
                />
              </div>
              <button
                type="submit"
                disabled={!formData.text.trim() || formData.rating === 0}
                className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="bg-slate-500 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
            <div
              className={`space-y-6 ${reviews.length > 3 ? "max-h-[400px] overflow-y-auto" : ""}`}
            >
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-500">
                      {new Date(review.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-100">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        {showSuccessModal && <SuccessModal setShowSuccessModal={setShowSuccessModal} />}
      </div>
    </main>
  );
};

// Star Rating Component
const StarRating = ({ rating, onRatingChange, hoverable }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer text-2xl ${hoverable ? "transition-colors duration-200" : ""} ${
            star <= (hoverable ? hoveredRating || rating : rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          onMouseEnter={() => hoverable && setHoveredRating(star)}
          onMouseLeave={() => hoverable && setHoveredRating(0)}
          onClick={() => hoverable && onRatingChange(star)}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func,
  hoverable: PropTypes.bool,
};

// Success Modal Component
const SuccessModal = ({ setShowSuccessModal }) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
      <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <IoMdClose size={24} />
      </button>
      <div className="text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-600">Your review has been successfully submitted.</p>
      </div>
    </div>
  </div>
);

SuccessModal.propTypes = {
  setShowSuccessModal: PropTypes.func.isRequired,
};

export default ReviewComponent;
