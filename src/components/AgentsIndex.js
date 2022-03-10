import React from 'react';
import { getAllAgents } from '../lib/api';
import AgentCard from './AgentCard';

function AgentsIndex() {
  const [agents, setAgents] = React.useState([]);
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
  }, []);

  return (
    <>
      <section className="hero is-fullheight-with-navbar has-background-black">
        <div className="container">
          <div className="columns is-multiline">
            {!agents ? (
              <p>Loading...</p>
            ) : (
              agents.map((agent) => <AgentCard key={agent.displayName} {...agent} />)
            )}
          </div>
        </div>
      </section>


    </>);
}

export default AgentsIndex;