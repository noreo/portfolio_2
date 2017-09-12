import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route, Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const FullRoster = () => (
  <div>
    <ul>

          <li key={0}>
            <Link to={`/roster/0`}>toto</Link>
          </li>

          <li key={1}>
            <Link to={`/roster/1`}>titi</Link>
          </li>

      }
    </ul>
  </div>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)


const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
    </Switch>
  </div>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
