import React from 'react';
import {Link} from 'react-router';

var Repos = () => {
  return (
  <div>
    <h2>Repos</h2>
    <ul>
      <li><Link to="/Repos/kevinhuangg/uva">Kevin</Link></li>
      <li><Link to="/Repos/jchen54/uva">Johnny</Link></li>
    </ul>
  </div>
  )
}

export default Repos;