import React from 'react';
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import GamePage from "./pages/gamePage";
import LobbyPage from "./pages/lobbyPage";
import "./App.css"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/game" element={<GamePage/>}/>
                <Route path="/lobby" element={<LobbyPage/>}/>
            </Routes>
        </div>
    );
};

export default App;