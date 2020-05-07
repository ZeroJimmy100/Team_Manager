import React from 'react'
import axios from 'axios';
import './ButtonStyle.css';

export default props => {
    const { teamPlayersId, playerName, successCallback } = props;
    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/player/' + teamPlayersId)
            .then(res=>{
                successCallback();
            })
            alert("Player " + playerName + " deleted");
    }
    return (
        <button id="delete" onClick={deletePlayer}>
            Delete
        </button>
    )
}