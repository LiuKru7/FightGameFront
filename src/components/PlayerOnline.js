import React from 'react';
import {socket} from "../App";

const PlayerOnline = ({x}) => {
    function requestToGame() {
        socket.emit('send_fight_request', x.socket);
    }

    return (
        <div className="playerOnline">
            <div className="flex-1 d-flex "><h1>{x.username}</h1></div>
            <div className="flex-1 d-flex a-center j-end"><img src={x.avatar} alt=""/>
                <button className="" onClick={requestToGame}>PLAY</button>
            </div>
        </div>
    );
};

export default PlayerOnline;