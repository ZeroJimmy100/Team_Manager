import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PlayerStatList from '../components/PlayerStatList';
import { Link } from '@reach/router';

export default () => {
    const [teamPlayers, setPlayer ] = useState([]);
    const [loaded, setLoaded ] = useState(false);
    const [gameNum, setGameNum ] = useState({
        One: 1,
        Two: 2,
        Three: 3
    })
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res =>{ 
                setPlayer(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
            
    }, []);

    return(
        <div>
            <h1>
                <Link to={"/"}>Manage Player</Link>
                |
                <Link to={"/status/game/1"}>Manage Player Status</Link>
            </h1>
            <h2>Player Status - Game 3</h2>
            
            <Link to={"/status/game/1"}>Game 1</Link>
            |
            <Link to={"/status/game/2"}>Game 2</Link>
            |
            <Link to={"/status/game/3"}>Game 3</Link>

            
            <h3>Player Name      /         Action</h3>
            

            {loaded && <PlayerStatList gameNum={gameNum.Three} teamPlayers={teamPlayers}/>}
        </div>
    )
}