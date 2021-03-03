import React from "react"

export default function Movie(props) {

    return (
        <div className="moviecard">

        <h3> Movie: {props.movieTitle}</h3>
        <h2> Release Year: {props.movieRelease}</h2>
        <button onClick={() => props.addWatched(props.id)}>Watched!</button>
        </div>

    )
}