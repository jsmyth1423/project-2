import React from 'react';
import { getAllAgents } from '../lib/api';

const GameMain = () => {
  const [agents, setAgents] = React.useState('');
  // const [activeAgent, setActive] = React.useState(
  //   agents[Math.floor(Math.random() * agents.length)]
  // );
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllAgents();
        setAgents(data.data.filter((agent) => agent.isPlayableCharacter));
      } catch (err) {
        console.error(err);
      }
    };
    getData();

    console.log(agents);
  }, []);

  const activeAgent = agents[Math.floor(Math.random() * agents.length)];

  // console.log(activeAgent);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {!agents ? (
            <p>Loading...</p>
          ) : (
            <>
              <h2>
                {/* {agents[Math.floor(Math.random() * agents.length)].displayName} */}
                {activeAgent.displayName}
              </h2>
              <img
                src={
                  // agents[Math.floor(Math.random() * agents.length)].bustPortrait
                  activeAgent.bustPortrait
                }
                alt="agentpic"
              ></img>
            </>
          )}
        </div>
        <img
          src={
            activeAgent.abilities[
              Math.floor(Math.random() * activeAgent.abilities.length)
            ].displayIcon
          }
          alt="abilitypic"
        ></img>
      </div>
    </section>
  );
};
export default GameMain;
