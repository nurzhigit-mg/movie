import React, {useContext, useState} from 'react';
import Log from "../../img/1200px-Warner_Bros._Pictures_logo.svg.png"
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";

const Header = () => {
    const input = (e) => {
        if (e.key === "Enter") {
            nav(`/search/search_movie/${search}`)
        }
    }
    const [search, setSearch] = useState()
    const {setLanguage} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    console.log(language)
    const nav = useNavigate()
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={Log} width="70px" alt=""/>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__text">Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__text">Popular</NavLink>
                        <NavLink to={"/topRated"} className="header--nav__text">Top Rated</NavLink>
                    </div>
                    <div className="header--input">
                        <div className="header--input__block">
                            <input type="search"
                                   onKeyDown={(e) => {
                                       input(e)
                                   }}
                                   onChange={(e) => setSearch(e.target.value)}/>
                            <button onClick={() => {
                                nav(`/search/search_movie/${search}`)
                            }}>Поиск
                            </button>
                        </div>
                    </div>
                    <select style={{
                        padding: "7px 5px",
                        borderRadius: "5px",
                        outline: "none"
                    }} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="ru-RU">RU</option>
                        <option value="en-US">EN</option>
                    </select>
                    <div style={{
                        background: "#d8f3dc",
                        padding: "7px 20px"
                    }}>
                        <div style={{
                            background:"#0d1b2a",
                            width:"10px",
                            height:"10px",
                            borderRadius:"50%"
                        }}></div>
                    </div>
                    <div className="header--btn">
                        <button>SING</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;