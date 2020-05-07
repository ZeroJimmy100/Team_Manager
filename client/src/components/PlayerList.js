import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
    const [teamPlayer, setPlayer] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player/')
            .then(res => setPlayer(res.data));
    }, [teamPlayer])
    const removeFromDom = playerId => {
        setPlayer(teamPlayer.filter(allPlayer => allPlayer._id !== playerId))
    }
    
    return (
        <div>
            {teamPlayer.map((contestant, idx) => {
                return (
                    
                    <p key={idx}>
                        <Link to={"/player/" + contestant._id}>{contestant.playerName}</Link>
                        |
                        <Link to={"/player/" + contestant._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton teamPlayersId={contestant._id} playerName={contestant.playerName} successCallback={()=>removeFromDom(contestant._id)}/> 
                    </p>
                )
            })}
        </div>
    )
}