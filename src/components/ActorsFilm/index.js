import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link, useParams} from "react-router-dom";

const ActorsFilm = () => {
    const [film, setFilm] = useState([])
    const {actorId} = useParams()
    const getFilm = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setFilm(res.data.cast)
            })
    }
    useEffect(() => {
        getFilm(API_KEY)
    },[])
    console.log("acfilm",film)
    return (
        <div id="films">
                <h2 style={{
                    color:"#d8f3dc"
                }}>Известность за</h2>
                <div className="films">
                    {
                        film.map( (e) => (
                               <Link to={`/movie/details/actorsFilm/${e.id}`}> <div className="films--card">
                                    <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${e.poster_path}`} alt=""/>
                                    <h3 style={{
                                        color:"#d8f3dc"
                                    }}>{e.title}</h3>
                                </div></Link>
                            ))
                    }
            </div>
        </div>
    );
};

export default ActorsFilm;
//https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US