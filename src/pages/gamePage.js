import React, {useEffect, useState} from 'react';
import Player0Ne from "../components/Player0ne";
import PlayerTwo from "../components/PlayerTwo";
import PlayerFight from "../components/PlayerFight";
import {socket} from "../App";
import { useLocation } from 'react-router-dom';

const GamePage = () => {


    return (
        <div className="d-flex container f-col">
            <div style={{color:"white"}}>Fight</div>

            <div className="d-flex gamePage">
                <div className="d-flex flex-1 j-center">
                    <Player0Ne></Player0Ne>
                </div>
                <div className="flex-1 j-spaceBetween d-flex fightFieldCenter">
                    <PlayerFight></PlayerFight>
                </div>
                <div className="flex-1 d-flex j-center">
                    <PlayerTwo></PlayerTwo>
                </div>
            </div>
        </div>
    );
};

export default GamePage;