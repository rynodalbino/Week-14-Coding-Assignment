import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';


import { MovieData } from './components/MovieData';

export default function App() {

  const[movies, setMovies] = useState(MovieData);

  const updateMovie = (updatedMovie) => {
    console.log("Updating movie", updatedMovie);

  setMovies((movies) => {
    // find the movie that is being updated in the list of movies
    const index = movies.findIndex(movie => movie.id === updatedMovie.id);

    // replace the original movie with the new movie
    movies.splice(index, 1, updatedMovie);


    // use this, which makes a copy of the updated array, so React knows it changed
    return [...movies];
})
  
  }

  return  (
    <>
    <h1>Movie Review!</h1>
    
    <MovieList movies={movies}/>
    
    </>

  )
};

  
