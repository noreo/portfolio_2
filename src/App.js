import React from 'react'
import { withRouter, Switch, Route, Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Header from './Header'
import { Flex, Box } from 'grid-styled'
//import HomePage from './HomePage'
//import ArticlesPage from './ArticlesPage'
//import NotFoundPage from './NotFoundPage'
import Home from './pages/Home'
import ProjectBrewster from './pages/ProjectBrewster'




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



const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
    </Switch>
  </div>
)



const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 200 }
  
  return (
    <Flex align='baseline' justify='space-around'>
    <Header />
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route path='/projectbrewster' component={ProjectBrewster}/>
            <Route path='/schedule' component={Schedule}/>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      </Flex>
  )
}

export default withRouter(App)