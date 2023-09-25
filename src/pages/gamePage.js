import React from 'react';
import Player0Ne from "../components/Player0ne";
import PlayerTwo from "../components/PlayerTwo";
import PlayerFight from "../components/PlayerFight";

const GamePage = () => {
    return (
        <div className="d-flex container">
            <div className="flex-1">
                <Player0Ne></Player0Ne>
            </div>
            <div className="flex-1">
                <PlayerFight></PlayerFight>
            </div>
            <div className="flex-1">
                <PlayerTwo></PlayerTwo>
            </div>
        </div>
    );
};

export default GamePage;