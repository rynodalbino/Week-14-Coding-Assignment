import React from "react";
import Review from "./Review"



const ReviewList = ({ reviews }) => {
    if (!reviews || reviews.length < 1) {
        return (
            <em>No reviews yet.</em>
        );
    }

    return (//display reviews of movie by pulling props from review
        <ul>
            {reviews.map((review, index) => (
                <li key={index}>
                    <Review review={review} />
                </li>
            ))}
        </ul>
    )
};
export default ReviewList
