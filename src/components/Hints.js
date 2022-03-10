import React from 'react';


function Hints({ activeAgent }) {
  const [isClass, setClass] = React.useState(true);
  const toggleClass = () => {
    setClass(!isClass);
  };

  return (
    <>
      <button className='button is-white is-outlined' onClick={toggleClass}>Show hint!</button>
      <p id='hints' className={isClass ? 'showing-hint' : null}>{activeAgent && activeAgent.description}</p>
    </>
  );

}

export default Hints;