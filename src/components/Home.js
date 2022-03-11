import React from 'react';

const Home = () => {
  return (
    <section className="hero is-fullheight background-for-home">
      <div className="columns">
        <div className="column is-half"></div>
        <div className="homepage-text has-text-right has-text-white column is-half">
          <h2 className="title-text-font title has-text-white">
            welcome to the valorant Guessing Game
          </h2>
          <p className="description-home">
            The objective of this game is very simple, you just have to guess
            the ability that matches the displayed character, click the hints
            button for a description that may give you a clue, or check the
            index page to study up!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
