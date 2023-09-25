import React from 'react';
import Generate from "../components/Generate";
import Items from "../components/Items";
import PlayerList from "../components/PlayerList";

const LobbyPage = () => {
    return (
        <div className="container d-flex">
            <div className="flex-1">
                <div>
                    <Generate></Generate>
                </div>
                <div>
                    <Items></Items>
                </div>
            </div>
            <div className="flex-1">
                <PlayerList></PlayerList>
            </div>
        </div>
    );
};

export default LobbyPage;