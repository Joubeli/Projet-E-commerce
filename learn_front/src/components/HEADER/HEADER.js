import React from 'react'
import LOGIN from './LOGIN'
import SIGN_UP from './SIGN_UP'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const HEADER = () => {
    return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>DevCamp</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
     
        <div className="inner">
          <Switch>
            <Route exact path='/' component={LOGIN} />
            <Route path="/sign-in" component={LOGIN} />
            <Route path="/sign-up" component={SIGN_UP} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>

    )
}

export default HEADER
