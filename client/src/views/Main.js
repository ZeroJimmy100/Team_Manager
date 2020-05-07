import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import PlayerList from '../components/PlayerList';
export default () => {
    const [teamPlayers, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res =>{ 
                setPlayer(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
            
    }, []);

    const removeFromDom = playerId => {
        setPlayer(teamPlayers.filter(auth => auth._id !== playerId));
        
    }
    
    
    console.log(teamPlayers)
    return (
        <div>
            <h1>
            <Link to={"/"}>Manage Players</Link>
            |
            <Link to={"status/game/1"}>Manage Player Status</Link>
            </h1>
            <h1>
                <Link to={"/"}>List</Link>
                |
                <Link to={"/player/addplayer/"}>Add Player</Link>
            </h1>
          
           {loaded && <PlayerList teamPlayers={teamPlayers} removeFromDom={removeFromDom}/>}
        </div>
    )
}