


import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Game from './pages/Game/Game';
import Header from './components/Header/Header';
import { ModalContext, ModalContextProvider } from './contexts/ModalContext';



function Router() {
    const { handleModal } = useContext(ModalContext);
    return (
        <BrowserRouter>
            
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/game-on" element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;