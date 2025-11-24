import React from "react";
import Movie from "../components/Movie";
import { dummy } from "../movieDummy";
import "./MovieList.css";

function MovieList() {
    return (
        <div className="movie-list-container">
        <h1>영화 목록</h1>
        <div className="movie-list">
          {dummy.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    );
}

export default MovieList;