import React from 'react';
import PartAnimation from '../partAnimation/PartAnimation';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import NavBar from './navBar/NavBar';

const Home = () => {
    return (
        <div>
            <div style={{ height: '0' }}>
                <PartAnimation />
            </div>
            <NavBar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
