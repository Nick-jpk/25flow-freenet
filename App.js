import React from 'react';
import Header from './components/Header';
import VPNFiles from './components/VPNFiles';
import Footer from './components/Footer';
import FacebookMVP from './components/FacebookMVP';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <VPNFiles />
            <FacebookMVP />
            <Footer />
        </div>
    );
};

export default App;
