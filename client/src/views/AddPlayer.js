import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import PlayerForm from '../components/PlayerForm';
export default props => {
    const [teamPlayer, setPlayer] = useState({})
    const [errors, setErrors] = useState([])
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player/addplayer', player)
            .then(res=>{
                console.log(res.data)
            })  
            .catch(err => {
                let errorResponse = err.response.data.errors;
                let errorArr = [];
                for( const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    

    return(
        <div>
            
            {errors.map((err, idx) => {
                return <p key={idx}>{err}</p>
            })}
            <h2>Add Player</h2>
            <PlayerForm onSubmitProp={createPlayer} initialPlayer="" />
        </div>
    )
}