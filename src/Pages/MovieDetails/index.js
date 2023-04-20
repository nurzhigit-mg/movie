import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import ActorsCard from "../../components/ActorsCard";
import Videos from "../../components/Videos";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})

    const {movieId} = useParams()
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ru-RUS`)
            .then((res) => setMovieDetails(res.data))
    }
    useEffect(() => {
        getDetails(API_KEY)

    }, [])
    console.log(movieDetails)
    console.log(movieId)
    const {
        poster_path,
        vote_average,
        overview,
        original_title,
        tagline,
        release_date,
        runtime,
        title,
        backdrop_path,
        genres,
    } = movieDetails
    return (
            <>
                <div id="details" style={{
                background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}') no-repeat center/cover`
            }}>
                <div className="container">
                    <div className="details">
                        <div className="details--img">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} width="350px"
                                 alt=""/>
                        </div>
                        <div className="details--text">
                            <h1>{title}</h1>
                            <div style={{
                                display: "flex"
                            }}>
                                {
                                    genres?.map((el) => (
                                            <h3 style={{
                                                fontSize: "22px",
                                                fontWeight: "400",
                                                paddingRight: "15px",
                                                textDecorationLine: "underline"
                                            }}>{el.name}</h3>
                                        )
                                    )
                                }
                            </div>

                            <div className="details--text__block">
                                <div className="details--text__block--name">
                                    <h4>оригинальное название</h4>
                                    <h4>Рейтинг</h4>
                                    <h4>Время</h4>
                                    <h4>Премьера</h4>

                                </div>
                                <div className="details--text__block--then">
                                    <h4>{original_title}</h4>
                                    <h4 style={{
                                        color: "gold",
                                        fontWeight: "400"
                                    }}> {Math.floor(vote_average * 10)}%</h4>
                                    <h4> {Math.floor(runtime / 60)}ч : {runtime % 60}мин</h4>
                                    <h4> {release_date}</h4>

                                </div>
                            </div>
                            <h4 style={{
                                fontWeight: "600",
                                fontSize: "30px"
                            }}>{tagline}</h4>
                            <p>{overview}</p>
                        </div>

                    </div>
                </div>
            </div>
                <ActorsCard id={movieId}/>
                <Videos id={movieId}/>
            </>

    );
};

export default MovieDetails;
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US