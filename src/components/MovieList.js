
import React from "react"
import Movie from "./Movie"

export default function MovieList (props) {

    const allMovies = props.movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                key={movie.id}
                movieTitle={movie.movieTitle}
                movieRelease={movie.movieRelease}
            />

        )
    })
    return (
        <div> {allMovies} </div>
    )
}