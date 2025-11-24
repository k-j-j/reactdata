import React from "react";
import { useNavigate } from "react-router-dom";
import { img_base_url } from "../movieDummy";
import "./Movie.css";

function Movie({ id, title, poster_path, rating, overview }) {
    const navigate = useNavigate(); //React Router에서 페이지 이동을 쉽게 하기 위해 사용

    const onClickMovieItem = () => {
        navigate(`/movie/${id}`, {
          state: { title, poster_path, rating, overview }
        });
      };

return (
        <div className="movie-card" onClick={onClickMovieItem}>
        <img src={img_base_url + poster_path} alt={title} className="movie-img" />
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">평점: {rating}</p>
        </div>
       );
}

export default Movie;