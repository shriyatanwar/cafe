import "./reviewSection.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      rating: 5,
      comment: "Absolutely loved the food! The service was amazing too."
    },
    {
      name: "Jaya",
      rating: 4,
      comment: "Great experience overall. A little pricey but worth it."
    },
    {
      name: "Varsha",
      rating: 5,
      comment: "One of the best places I've dined at recently. Highly recommend!"
    },
    {
      name: "Jatin",
      rating: 4,
      comment: "Good food and ambiance. Will visit again."
    },
    {
      name: "Mohit",
      rating: 5,
      comment: "Amazing taste and wonderful staff! 10/10 experience."
    }
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3 className="review-name">{review.name}</h3>
            <p className="review-rating">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
