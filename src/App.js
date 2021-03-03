import React from "react"
import Welcome from "./components/Welcome"
import MovieList from "./components/MovieList"
import { movieData } from "./data/movieData"

import './App.css';

function App() {
  return (
    <div className="App">
       <Welcome />
       <MovieList movies={movieData} />
    </div>
  );
}

export default App;
