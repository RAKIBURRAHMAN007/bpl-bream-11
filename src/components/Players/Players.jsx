import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";


const Players = ({handleChoosePlayer}) => {
    const [players,setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data));

    },[])
    return (
        <div className="md:grid grid-cols-3 gap-4 max-w-5xl mx-auto p-4 space-y-1">
            {
                players.map(player => <Player handleChoosePlayer={handleChoosePlayer}  key={player.playerId} player={player}></Player>)
            }
            
        </div>
    );
};

export default Players;