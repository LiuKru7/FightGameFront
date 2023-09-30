import React from 'react';
import {useSelector} from "react-redux";
import {socket} from "../App";


const PlayerFight = () => {
    const userInfo = useSelector(state => state.info.fight);
    function hitFunk() {
        console.log("hit", userInfo?.roomId);
        socket.emit('hit', userInfo?.roomId);
    }


    return (
        <div className="d-flex fightField">
            <div className="d-flex flex-1">
                <div className="progressBar">
                    {userInfo?.player1?.hp >= 0 &&
                        <div style={{ height: `${userInfo.player1.hp}%` }}></div>
                    }
                </div>
            </div>
            <div>
                <h1 style={{ color: "white" }}>FIGHT</h1>
                {userInfo?.player1?.turn &&
                    <div>
                        <h1>{userInfo.player1.username} Turn</h1>

                    </div>}

                {userInfo?.player2?.turn &&
                    <div>
                        <h1>{userInfo.player2.username} Turn</h1>
                    </div>
                    }
                <button onClick={hitFunk}>HIT</button>


            </div>
            <div className="d-flex flex-1">
                <div className="progressBar">
                    {userInfo?.player2?.hp >= 0 && <div style={{ height: `${userInfo.player2.hp}%` }}></div>
                    }
                </div>
            </div>
        </div>
    );
};


export default PlayerFight;