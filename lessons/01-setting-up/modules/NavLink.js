import React from 'react';
import {Link} from 'react-router';

var NavLink = (props) => {
  return (
  <div>
    <Link {...props} activeClassName="active" />
  </div>
  )
}

export default NavLink;