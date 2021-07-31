import React from 'react';
import './App.css';
import GamePage from './3-game';
import HeaderPage from './1-poseidon';
import AgentPage from './2-agent';
import MemberPage from './1.1-member';


function App() {
  return (
    <>
      <HeaderPage />
      <MemberPage />
      <AgentPage />
      <GamePage />
    </>
  );
}

export default App;
