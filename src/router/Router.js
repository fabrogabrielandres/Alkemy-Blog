import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Counter } from "../features/counter/Counter";
import { Backoffice } from '../pages/backoffice/Backoffice';
// Redux logo
import logo from '../logo.svg';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </header>
        </Route>
        <Route path="/backoffice">
          <Backoffice />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;