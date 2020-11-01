import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import NavBar from './navBar/NavBar';

const Home = () => {
    return (
        <div className="container">
            <NavBar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
