import React from 'react';

var Repo = (props) => {
  return (
    <div>
      <h2>{props.params.repoName}</h2>
    </div>
  )
}

export default Repo;