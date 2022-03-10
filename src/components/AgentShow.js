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
        setAgent(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [uuid]);

  return (
    <section className="section">
      <div className="container">
        {!agent ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered">{agent.data.displayName}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={agent.data.bustPortrait} alt={agent.data.displayName} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                </h4>
                <hr />
                <p>{agent.data.description}</p>
                <p></p>
                <hr />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );

};

export default AgentShow;