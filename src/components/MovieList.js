import React from "react";
import Movie from "./Movie"
import ReviewList from"./ReviewList"
import ReviewForm from './ReviewForm';

const MovieList = ({ movies, updateMovie }) => {

    // function to add a review to a specific movie
    const addReview = (movie) => (review, rating) => {
        console.log("Adding a review", movie.Title, review, rating);

        // if the movie doesn't have any reviews yet, make sure the Reviews property is an array
        if (!movie.Reviews) {
            movie.Reviews = [];
        }

        // add the new review to this movie
        movie.Reviews.push({
            text: review,
            rating
        })

        // call the parent updateMovie function with the updated movie
        updateMovie(movie);
    };

return (
    <div>
        <ul className="movieTitleandImage">
            {
            movies.map(movie => {
                return ( //puul the props, movie reviewlist and review form.  Make a div to oraganize and also help use css
                    <div>
                        <Movie key={movie.id} movie={movie} />
                            <div className="reviewBox">
                            <ReviewList reviews ={movie.Reviews} />
                            <ReviewForm/>
                            </div>
                    </div>
                )
            })
            }
        </ul>
    </div>
)
};
export default MovieList
