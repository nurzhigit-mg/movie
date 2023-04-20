import React, {useState, useEffect, useContext} from 'react';
import {API_KEY} from "../../API";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import Page from "../../components/Page";
import {LanguageContext} from "../../context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [active, setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                setPopular(res.data.results)
            })
    }
    useEffect(() => {
        getPopular(API_KEY)

    }, [active,language])
    console.log(popular)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => (
                                <MovieCard el={el}/>
                            )
                        )
                    }
                </div>
            </div>

           <Page active={active} setActive={setActive}/>

        </div>
    );
};

export default Popular;


//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1