import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Backoffice } from "../pages/backoffice/Backoffice";
import SlidesForm from "../Components/Slides/SlidesForm";
import logo from '../logo.svg';
import FormEditData from '../pages/backoffice/organization/edit';
import DataOrganization from '../pages/backoffice/organization';
import Detail from '../Components/Activities/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
        <Route path="/backoffice" exact>
          <Backoffice />
        </Route>
        <Route path='/backoffice/organization' exact>
          <DataOrganization />
        </Route>
        <Route path='/backoffice/organization/edit'>
          <FormEditData />
        </Route>
        <Route exact path="/backoffice/slides/create" component={SlidesForm} />
        <Route exact path="/backoffice/slides/:id" component={SlidesForm} />
        <Route path="/actividades/:id">
          <Detail content='propsContentHere' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
