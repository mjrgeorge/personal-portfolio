import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import NavBar from './navBar/NavBar';

const Home = () => {
    return (
        <div className="container">
            <NavBar />
            <Header />
            <Footer />
        </div>
    );
};

export default Home;
