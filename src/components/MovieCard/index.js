import React from 'react';
import {Link} from 'react-router-dom';
const MovieCard = ({el}) => {
    return (
        <div className="popular--card">
            <Link to={`/movie/details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </Link>
            <h3>{el.title}</h3>
            <div className="popular--card__block">
                <h2>{el.vote_average}</h2>
                <h4>{el.release_date}</h4>
            </div>
        </div>
    );
};

export default MovieCard;