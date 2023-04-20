import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";

const Videos = ({id}) => {
    const [video, setVideo] = useState([])
    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                setVideo(res.data.results)
            })
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [])
    console.log("video", video)

    return (
        <div id="video">

            <div className="container">
                <h1>Трейлеры</h1>
                <div className="video">
                        {
                            video.map((el) => (
                                <div className="video--card">
                                <iframe width="453" height="280" src={`https://www.youtube.com/embed/${el.key}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                        allowFullScreen>
                                </iframe>
                            </div>
                            ))
                        }

                </div>
            </div>
        </div>
    );
};

export default Videos;
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US