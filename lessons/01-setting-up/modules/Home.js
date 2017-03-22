import React from 'react';

var Home = (props) => {
  return (
    <div>
      <h2>{props.params.repoName}</h2>
    </div>
  )
}

export default Home;