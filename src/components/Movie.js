import React from "react";

const Movie = (props) => { //set movie props

    return ( //display props of movie and it's image
        <li>
            <h3>{props.movie.Title}</h3>
            <img src={props.movie.Image} height={200}></img>
            </li>
        
    );
}
export default Movie; //export movie