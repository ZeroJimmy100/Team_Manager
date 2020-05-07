import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

// import './colorStyle.css';
import './ButtonStyle.css';
export default props => {
    const { gameNum } = props;
    const [teamPlayer, setPlayer] = useState([]);
    const [playStatusOne, setStatusOne] = useState([])
    const [playStatusTwo, setStatusTwo] = useState([])
    const [playStatusThree, setStatusThree] = useState([])
    const [color, setColor] = useState({
        colorPlay: "Green",
        colorNotPlay: "Red",
        colorUndecided: "Yellow",
        colorNone: "Silver"
    })
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/player/')
            .then(res => {
                setPlayer(res.data)
            });
    }, [teamPlayer]);
    // const removeFromDom = playerId => {
    //     setPlayer(teamPlayer.filter(allPlayer => allPlayer._id !== playerId))
    // }
 

    const updatePlayer = (e, playerId) => {
        e.preventDefault();
        if (gameNum == 1) {
            axios.put('http://localhost:8000/api/player/' + playerId, {playStatusOne})
            .then(res => console.log(res));
        }
        
        if (gameNum == 2) {
            axios.put('http://localhost:8000/api/player/' + playerId, {playStatusTwo})
                    .then(res => console.log(res));
        }
        
        if (gameNum == 3) {
            axios.put('http://localhost:8000/api/player/' + playerId, {playStatusThree})
                    .then(res => console.log(res));
        }
    }

    const setGame = (value) => {
        // constestant.playerStatus[x] = value
        if (gameNum == 1) {
            setStatusOne(value);
        }
        
        if (gameNum == 2) {
            setStatusTwo(value);
        }
        
        if (gameNum == 3) {
            setStatusThree(value);
        }
    }
    
    const changeColor = (contestant, idx) => {
        if(gameNum == 1){
            if(contestant.playStatusOne == "Playing"){
                return(color.colorPlay)
            }
             else {
                return(color.colorNone);
            } 
        }
        if(gameNum == 2){
            if(contestant.playStatusTwo =="Playing"){
                return(color.colorPlay)
            }else{
                return(color.colorNone)
            }
        }
        if(gameNum == 3){
            if(contestant.playStatusThree == "Playing"){
                return(color.colorPlay)
            }else{
                return(color.colorNone)
            }
        }
    }

    const changeColor2 = (contestant) => {
        if(gameNum == 1){
            if(contestant.playStatusOne == "Not Playing"){
                return(color.colorNotPlay)
            }else{
                return(color.colorNone)
            }
        }
        if(gameNum == 2){
            if(contestant.playStatusTwo == "Not Playing"){
                return(color.colorNotPlay)
            }else{
                return(color.colorNone)
            }
        }
            if(gameNum == 3){
                if(contestant.playStatusThree == "Not Playing"){
                    return(color.colorNotPlay)
                }else{
                    return(color.colorNone)
                }
    }
}

    const changeColor3 = (contestant) => {
        if(gameNum == 1){
            if(contestant.playStatusOne == "Undecided"){
                return(color.colorUndecided)
            }else{
                return(color.colorNone)
            }
        }
        if(gameNum == 2){
            if(contestant.playStatusTwo == "Undecided"){
                return(color.colorUndecided)
            }else{
                return(color.colorNone)
            }
        }
            if(gameNum == 3){
                if(contestant.playStatusThree == "Undecided"){
                    return(color.colorUndecided)
                }else{
                    return(color.colorNone)
                }
        }
    }

    return (
        <div>
            
            {teamPlayer.map((contestant, idx) => {
                return (
                    
                    <h4 key={idx}>
                        
                        
                        <Link to={"/player/" + contestant._id}>{contestant.playerName}</Link>
                        
                            <form onSubmit={e=>{updatePlayer(e, contestant._id)}} >
                                <button style={{background: changeColor(contestant)}} type="submit" name="playing" value="Playing" onClick={(e) => {setGame(e.target.value)}}>Playing</button>
                                <button style={{background: changeColor2(contestant)}} type="submit" name="notPlaying" value="Not Playing" onClick={(e) => {setGame(e.target.value)}}>Not Playing</button>
                                <button style = {{background: changeColor3(contestant)}} type="submit" name="undecided"value = "Undecided" onClick={(e) => {setGame(e.target.value)}}>Undecided</button>
                            </form>
                        
                    </h4>
                )
            })}
        </div>
    )
        }