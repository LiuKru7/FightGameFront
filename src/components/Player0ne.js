import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {socket} from "../App";

const Player0Ne = () => {
    const user = useSelector(state=>state.info.fight)
    const userInfo = useSelector(state=>state.info.fight.player1)
    function potionUse () {
        socket.emit ("potion", user.roomId, 1)
    }

    return (
        <div className="playerOne">
            {userInfo && <div>
                <h1>{userInfo.username}</h1>
                <p></p>
                <img src={userInfo.avatar} alt=""/>
                <div className="progressBar">
                    { userInfo.hp && userInfo.hp >= 0 &&
                        <div style={{ width: `${userInfo.hp}%` }}></div>
                    }
                </div>
                <div className="itemsInFight d-flex">
                    {!userInfo.potionUse && userInfo?.potion?.[0]?.potionUrl ?
                        <div onClick={potionUse}>
                        <img src={userInfo?.potion?.[0]?.potionUrl ?? "https://cdn-icons-png.flaticon.com/512/6804/6804175.png"} alt=""/>
                    </div>: <img src="https://cdn-icons-png.flaticon.com/512/6804/6804175.png" alt=""/>}
                </div>
                <div className="d-flex flex-1">
                </div>
            </div>}
        </div>
    );
};

export default Player0Ne;