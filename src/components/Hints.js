import React from 'react';


function Hints({ activeAgent }) {
  return (
    activeAgent && activeAgent.description
  );

}

export default Hints;