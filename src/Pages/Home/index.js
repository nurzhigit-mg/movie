import React from 'react';

const Home = () => {
    return (
        <div id="home" style={{
            background: `url('https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/b704735f-5257-4186-9fcb-4c405935a14c/KG-ru-20230327-popsignuptwoweeks-perspective_alpha_website_large.jpg') no-repeat center/cover`
        }}>
            <div className="container">
                <div className="home">
                    <h1>Добро пожаловать.</h1>
                    <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;