import React from 'react';
import {useSelector} from "react-redux";


const Player0Ne = () => {
    const userInfo = useSelector(state=>state.info.fight.player1)
    return (
        <div className="playerOne">
            {userInfo && <div>
                <h1>{userInfo.username}</h1>
                <p></p>
                <img src={userInfo.avatar} alt=""/>
                <div className="itemsInFight d-flex">
                    <div>
                        <img src={userInfo.weapon[0].weaponUrl} alt=""/>
                    </div>
                    <div>
                        <img src={userInfo.armour[0].armourUrl} alt=""/>
                    </div>
                    <div>
                        <img src={userInfo.potion[0].potionUrl} alt=""/>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Player0Ne;