import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Backoffice } from "../pages/backoffice/Backoffice";
import { NewsForm } from "../Components/News/NewsForm";
import SlidesForm from "../Components/Slides/SlidesForm";
import logo from '../logo.svg';
import FormEditData from '../pages/backoffice/organization/edit';
import { ActivitiesForm } from '../Components/Activities/ActivitiesForm';
import DataOrganization from '../pages/backoffice/organization';
import Detail from '../Components/Activities/Detail';

const ReduxDefaultComponent = () => (
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
)

const Router = () => {
  const news = { id: "261", category_id: "93", user_id: "", name: "Prueba editar", content: "<ul><li>Contenido de prueba</li></ul>", image: "https://via.placeholder.com/600/f66b97" }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ReduxDefaultComponent} />
        <Route exact path="/backoffice" component={Backoffice} />
        <Route exact path="/backoffice/activities/create" component={ActivitiesForm} />
        <Route exact path="/backoffice/activities/edit/:id" component={ActivitiesForm} />
        <Route exact path="/backoffice/organization" component={DataOrganization} />
        <Route exact path="/backoffice/organization/edit" component={FormEditData} />
        <Route exact path="/backoffice/slides/create" component={SlidesForm} />
        <Route exact path="/backoffice/slides/:id" component={SlidesForm} />
        <Route exact path="/backoffice/news/create" component={NewsForm} />
        <Route exact path="/backoffice/news/edit/:id" component={() => <NewsForm  {...news} />} />
        <Route exact path="/actividades/:id" component={() => <Detail content="propsContentHere" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
