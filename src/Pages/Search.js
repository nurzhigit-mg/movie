import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../API";
import MovieCard from "../components/MovieCard";

const Search = () => {
    const [search, setSearch] = useState([])
    const {movieName} = useParams()
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                setSearch(res.data.results)
            })
    }
    useEffect(() =>{
        getSearch(API_KEY)
    },[])
    console.log(search)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        search.map((el) =>(
                            <MovieCard el={el}/>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
//https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos