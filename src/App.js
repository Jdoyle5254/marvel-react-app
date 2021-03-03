import Welcome from "./components/Welcome"
import MovieList from "./components/MovieList"
import { movieData } from "./data/movieData"
import WatchedList from "./components/WatchedList"
import React, { useState, useEffect } from 'react'

import './App.css';

function App() {
  const {watched, setWatched} = useState()

  const addWatched = (id) => {
    /*
    using the id, find the player object in the playerData array take the found player and mot it into the favorite array

    */
   const foundMovie = movieData.find(movie => movie.id === id)
  //  console.log('foundplayer', foundPlayer)
   
  const updatedWatched = watched.slice()
   updatedWatched.push(foundMovie)
   setWatched(updatedWatched)
  }
   useEffect(()=> console.log(watched))


  return (
    <div className="App">
       <Welcome />
       <MovieList movies={movieData}
       addWatched={addWatched} />

       <WatchedList watched={watched} />

    </div>
  );
}

export default App;
