import React from "react"



function Review({ review, }) { //create review function to display the review
  return (
    <p>
        {review.text} - {review.rating}/10
    </p>
  );
};
 


export default Review;