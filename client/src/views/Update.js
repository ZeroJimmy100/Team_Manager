import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import PlayerForm from '../components/PlayerForm';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const { id } = props;
    const [playerss, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePlayer = item => {
        axios.put('http://localhost:8000/api/player/' + id, item)
            .then(res => {console.log(res)
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
    return (
        <div>
            
            <h1>Update a Player</h1>
            {loaded && (
                <>
                {errors.map((err, idx) => {
                return <p key={idx}>{err}</p>
                })}
                    <PlayerForm
                        onSubmitProp={updatePlayer}
                        initialName={playerss.name}
                        initialQuote={playerss.quote}
                    />
                    <DeleteButton playerId={playerss._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}