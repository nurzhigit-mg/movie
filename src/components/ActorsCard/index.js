import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import user from "../../img/user.png"
import {Link} from "react-router-dom";

const ActorsCard = ({id}) => {
    const [actors,setActors] = useState([])
    const getActors = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=ru-RUS`)
            .then((res) =>{setActors(res.data.cast)})
    }
    useEffect(()=>{
        getActors(API_KEY)
    },[])
    console.log(actors)
    return (
        <div id="actors">
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actors">
                    {
                        actors.map((el) =>(
                            <div className="actors--card">
                                {
                                    el.profile_path ? <Link to={`/actor/details/${el.id}`}><img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                      alt=""/></Link>
                                   : <img src={user} width="150px" height="180px" alt=""/>
                                }
                                <h4>{el.name}</h4>
                                <h5>{el.character}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ActorsCard;
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US