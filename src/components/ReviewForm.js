import React, { useState } from "react";

const ReviewForm = ({ addReview }) => {
    const [hideForm, setHideForm] = useState(false);
  
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0)
  
    // this is what runs when the "Add Review" button is clicked
    const onClick = () => {
      if (review.length >= 3 && parseInt(rating, 10)) {
        addReview(review, rating);
  
        // reset the form elements
        setReview("");
        setRating(0);
  
        // alternatively/additionally, we could the form to (sort of) prevent the user from giving multiple reviews
        // setHideForm(true);
      } else {
        alert("Please fill out the review form.")
      }
    };
  
    if (hideForm) {
      // returning null is how to make React not render anything
      return null;
    }
  
    return ( //create a review form with input box and rating and button 1-10
      <form>
        <label>Review:</label>
        <input type="text" value={review} onChange={e => setReview(e.target.value)} />
        <select value={rating} onChange={e => setRating(e.target.value)}>
          <option value={0} disabled>--</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <button type="button" onClick={onClick}>Add Review</button>
      </form>
    )
  }
export default ReviewForm;
