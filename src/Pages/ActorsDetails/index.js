import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import ActorsFilm from "../../components/ActorsFilm";

const ActorsDetails = () => {
    const [actorsDetails, setActorsDetails] = useState({})
    const [bio,setBio] = useState(300)

    const {actorId} = useParams()
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=ru-RUS`)
            .then((res) => setActorsDetails(res.data))
    }
    function getBio(text){
        if (bio === 300){
            return setBio(text.length)

        }else {
            return setBio(300)
        }
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [])

    console.log(actorsDetails)
    console.log(actorId)
    const {profile_path, name, biography, birthday, place_of_birth} = actorsDetails
    return (
        <div id="actor">
            <div className="container">
                <div className="actor">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} height="500px"
                         alt=""/>
                    <div className="actor--block">
                        <h1 style={{
                            color: "#d8f3dc"
                        }}>{name}</h1>
                        <div className="actor--block__card">
                            <div className="actor--block__card--name">
                                <h4 style={{
                                    color: "#d8f3dc"
                                }}>Дата Рождение :</h4>
                                <h4 style={{
                                    color: "#d8f3dc"
                                }}>место рождение :</h4>
                            </div>
                            <div className="actor--block__card--details">
                                <h4 style={{
                                    color: "#d8f3dc"
                                }}>{birthday}</h4>
                                <h4 style={{
                                    color: "#d8f3dc"
                                }}> {place_of_birth}</h4>
                            </div>
                        </div>
                        <h3 style={{
                            color: "#d8f3dc"
                        }}>Биография</h3>
                            <p style={{
                                color: "#d8f3dc"
                            }}>{biography?.slice(0,bio)}</p>
                        <span style={{
                            color: "#d8f3dc"
                        }}onClick={() => getBio(biography)}> {bio === 300 ? "Читать дальше" : "Закрыть"}</span>
                        <ActorsFilm/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ActorsDetails;
//https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US