import React, {useState} from "react";
import './App.css';
import image1 from "./img/profile-1.jpg"
import image2 from "./img/profile-2.jpg"
import VotingBtn from './components/VotingBtn';

function App() {
  const [jackVotes, setJackVotes] = useState(0)
  const [johnyVotes, setJohnyVotes] = useState(0)
  function handleVotes(name) {
    if(name === "jack") {
      setJackVotes(jackVotes + 1)
    }
    if(name === "johny") {
      setJohnyVotes(johnyVotes + 1)
    }
  }
  return (
    <div className="App">
      <div className="container">
        <img src={image1} alt="johny"/>
        <VotingBtn handleVotes={handleVotes} name="johny"/>
        <span>Votes: {johnyVotes}</span>
      </div>
      <div className="container">
      <img src={image2} alt="jack"/>
        <VotingBtn handleVotes={handleVotes} name="jack"/>
        <span>Votes: {jackVotes}
        </span>
      </div>
    </div>
  );
}

export default App;
