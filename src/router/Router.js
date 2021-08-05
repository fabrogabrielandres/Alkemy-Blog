import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/backoffice/home";
import { Backoffice } from "../pages/backoffice/Backoffice";
import { NewsForm } from "../Components/News/NewsForm";
import { MembersForm } from "../Components/Members/MembersForm";
import { UserForm } from "../Components/Users/UserForm";
import { ActivitiesForm } from "../Components/Activities/ActivitiesForm";
import NewsDetail from "../Components/News/Detail";
import SlidesForm from "../Components/Slides/SlidesForm";
import FormEditData from "../pages/backoffice/organization/edit";
import { MembersList } from "../Components/Members/MembersList";
import { UsersList } from "../Components/Users/UsersList";
import { SlidesList } from "../Components/Slides/SlidesList";
import logo from "../logo.svg";
import DataOrganization from "../pages/backoffice/organization";
import Detail from "../Components/Activities/Detail";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About";
import ActivitiesList from "../Components/Activities/ActivitiesList";

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
);

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ReduxDefaultComponent} />
        <Route exact path="/backoffice" component={Backoffice} />
        <Route
          exact
          path="/backoffice/activities/create"
          component={ActivitiesForm}
        />
        <Route
          exact
          path="/backoffice/activities"
          component={ActivitiesList}
        />
        <Route
          exact
          path="/backoffice/activities/edit/:id"
          component={ActivitiesForm}
        />
        <Route
          exact
          path="/backoffice/organization"
          component={DataOrganization}
        />
        <Route
          exact
          path="/backoffice/organization/edit"
          component={FormEditData}
        />
        <Route exact path="/backoffice/slides" component={SlidesList} />
        <Route exact path="/backoffice/home" component={Home} />
        <Route exact path="/backoffice/slides/create" component={SlidesForm} />
        <Route exact path="/backoffice/slides/:id" component={SlidesForm} />
        <Route exact path="/backoffice/users" component={UsersList} />
        <Route exact path="/backoffice/users/create" component={UserForm} />
        <Route
          exact
          path="/backoffice/users/edit/:id"
          component={(news) => <NewsForm {...news} />}
        />
        <Route exact path="/backoffice/news/create" component={NewsForm} />
        <Route
          exact
          path="/backoffice/news/edit/:id"
          component={(news) => <NewsForm {...news} />}
        />
        <Route exact path="/backoffice/members" component={MembersList} />
        <Route
          exact
          path="/backoffice/members/create"
          component={MembersForm}
        />
        <Route
          exact
          path="/backoffice/members/edit/:id"
          component={(member) => <MembersForm {...member} />}
        />
        <Route
          exact
          path="/activities/:id"
          component={() => <Detail content="propsContentHere" />}
        />
        <Route
          exact
          path="/news/:id"
          component={() => <NewsDetail title="Detalle de novedad" />}
        />
        <Route exact path="/us" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
