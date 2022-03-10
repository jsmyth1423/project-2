import React from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAgent } from '../lib/api';

const AgentShow = () => {
  const { uuid } = useParams();
  const [agent, setAgent] = React.useState('');


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleAgent(uuid);
        setAgent(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [uuid]);


  console.log(agent.abilities);
  return (
    <section className="hero is-fullheight-with-navbar has-background-black">
      <div className="ability-list agent-show">
        {!agent ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered has-text-white">{agent.displayName}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image has-text-centered">
                  <img src={agent.bustPortrait} alt={agent.displayName} id="agent-portrait" />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4 has-text-white">
                  {agent.description}
                </h4>
                <hr />
                <div className="ability-list">
                  {agent.abilities.map((ability) =>
                    <>
                      <div className="ability-row">
                        {ability.displayIcon ? (<img className='ability-img' src={ability.displayIcon} alt={ability.displayName} />) : (<></>)}
                        <div className="ability-text">
                          <h4 className='has-text-white has-text-centered'>{ability.displayName}</h4>
                          <p className='has-text-white'>{ability.description}</p>
                        </div>
                      </div>
                      <hr />
                    </>)}
                </div>
                <p></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );

};

export default AgentShow;