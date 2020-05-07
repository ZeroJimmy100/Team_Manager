import React, { useEffect, useState } from 'react'
import { Link } from  '@reach/router'
import axios from 'axios';
export default props => {
    const [player, setPlayer] = useState({})
    const [errors, setErrors] = useState([]);
    useEffect(() => { // render the page right away
        axios.get("http://localhost:8000/api/player/" + props.id) // gets the link of the people
            .then(res => setPlayer({
                ...res.data // setting/adding res.data to person
            }))
    }, [])

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h1>Player</h1>
            <p>Player Name: {player.playerName}</p>
            <p>Preferred Position: {player.refPosition}</p>
            <Link to={"/player/" + player._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}