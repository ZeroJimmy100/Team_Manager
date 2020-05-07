import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import './App.css';
import AddPlayer from './views/AddPlayer';
import Detail from './views/Detail';
import Update from './views/Update';
import GameOne from './views/GameOne';
import GameTwo from './views/GameTwo';
import GameThree from './views/GameThree';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <AddPlayer path="/player/addplayer"/>
        <Detail path="player/:id"/>
        <Update path="player/:id/edit"/>
        <GameOne path="status/game/1"/>
        <GameTwo path="status/game/2"/>
        <GameThree path="status/game/3"/>
      </Router>
      
    </div>
  );
}

export default App;
