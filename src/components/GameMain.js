import React from 'react';
import Hints from './Hints';
import { getAllAgents } from '../lib/api';

const GameMain = () => {
  const [agents, setAgents] = React.useState([]);
  const [activeAgent, setActive] = React.useState(null);
  const [answers, setAnswers] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllAgents();
        const playableAgents = data.data.filter((agent) => agent.isPlayableCharacter);
        activate(playableAgents);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  function activate(agents) {
    let randomIndex = Math.floor(Math.random() * agents.length);
    console.log('random index', randomIndex);
    const active = agents[randomIndex];
    setActive(active);
    const newAgents = [...agents];
    newAgents.splice(randomIndex, 1);
    setAgents(newAgents);
    selectRandomAbilities(active, newAgents);
  }

  function compareChoice(e) {
    for (let i = 0; i < activeAgent.abilities.length; i++) {
      if (activeAgent.abilities[i].displayName === e.target.id) {
        window.alert('You won');
      } else console.log('player clicked', e.target.id);
    }
  }
  function selectRandomAbilities(activeAgent, agents) {
    console.log('activeAgent', activeAgent);
    console.log('agents array', agents);
    const correctAnswer = activeAgent.abilities[Math.floor(Math.random() * activeAgent.abilities.length)];
    const inactiveAbilities = agents.map((agent) => agent.abilities);
    // console.log('inactive abilities', inactiveAbilities);
    const wrongAnswers = [];


    while (wrongAnswers.length < 3) {
      const newAnswer =
        inactiveAbilities[Math.floor(Math.random() * inactiveAbilities.length)][
        Math.floor(Math.random() * 4)
        ];
      if (!wrongAnswers.includes(newAnswer)) {
        wrongAnswers.push(newAnswer);
      } else console.log('rejected a duplicate');
    }

    const answersArray = [...wrongAnswers, correctAnswer];
    shuffle(answersArray);
    setAnswers(answersArray);
    console.log('answers', answersArray);
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <section className="hero is-fullheight-with-navbar has-background-black">
      <div className="container">
        <div className="hints-container">
          <Hints activeAgent={activeAgent} /></div>
        <div className="title has-text-centered">
          {!agents ? (
            <p>Loading...</p>
          ) : (
            <>
              {activeAgent && <h2>{activeAgent.displayName}</h2>}
            </>
          )}
          {!agents ? (
            <p>Loading...</p>
          ) : (
            <>
              {activeAgent && <img src={activeAgent.bustPortrait} className="agent-img" alt="agentpic"></img>}
            </>
          )}
        </div>
        <div className='abilities-container'>
          {!answers ? (<p>Loading Abilities...</p>) : (answers.map((answer) => (<div key={answer.displayName} className="answer-wrapper" onClick={compareChoice}> <div className="answer-text" id={answer.displayName}>{answer.displayName} </div><img src={answer.displayIcon} id={answer.displayName} className="ability-img" /></div>)))}
        </div>
      </div>
    </section>
  );
};
export default GameMain;