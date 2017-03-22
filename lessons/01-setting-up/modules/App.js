import React from 'react';
import {Link} from 'react-router';
import About from './About.js';
import Repos from './Repos.js';
import NavLink from './NavLink.js'

export default React.createClass({
  
  render() {
    return (
      <div>
        <h1>Hello, React Router!</h1>
        <ul>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
});