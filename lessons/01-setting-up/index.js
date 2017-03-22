import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import {Router, Route, hashHistory} from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/About" component={About}/>
      <Route path="/Repos" component={Repos}/>
      <Route path="/Repos/:userName/:repoName" component={Repo}/>
    </Route>
  </Router>
  ), document.getElementById('app'))
