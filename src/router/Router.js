import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HomeBackoffice} from "../pages/backoffice/home";
import { NewsForm } from "../Components/News/NewsForm";
import { MembersForm } from "../Components/Members/MembersForm";
import { UserForm } from "../Components/Users/UserForm";
import { ActivitiesForm } from "../Components/Activities/ActivitiesForm";
import NewsDetail from "../Components/News/Detail";
import SlidesForm from "../Components/Slides/SlidesForm";
import FormEditData from '../Components/Backoffice/Organization/edit';
import DataOrganization from '../pages/backoffice/organization';
import Detail from '../Components/Activities/Detail';
import Footer from "../Components/Footer/Footer";
import ActivitiesList from "../Components/Activities/ActivitiesList";
import CategoriesList from "../Components/Categories/Categories";
import Home from "../pages/Home";
import About from '../Components/About'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/backoffice" component={HomeBackoffice} />
        <Route exact path="/backoffice/activities/create" component={ActivitiesForm} />
        <Route exact path="/backoffice/activities/edit/:id" component={ActivitiesForm} />
        <Route exact path="/backoffice/activities" component={ActivitiesList} />
        <Route exact path="/backoffice/organization" component={DataOrganization} />
        <Route exact path="/backoffice/organization/edit" component={FormEditData} />
        <Route exact path="/backoffice/slides/create" component={SlidesForm} />
        <Route exact path="/backoffice/slides/:id" component={SlidesForm} />
        <Route exact path="/backoffice/categories" component={CategoriesList} />
        <Route exact path="/backoffice/users/create" component={UserForm} />
        <Route exact path="/backoffice/users/edit/:id" component={(news) => <NewsForm {...news} />} />
        <Route exact path="/backoffice/news/create" component={NewsForm} />
        <Route exact path="/backoffice/members/create" component={MembersForm} />
        <Route exact path="/backoffice/members/edit/:id" component={(member) => <MembersForm {...member} />} />
        <Route exact path="/activities/:id" component={() => <Detail content="propsContentHere" />} />
        <Route exact path="/news/:id" component={() => <NewsDetail title="Detalle de novedad" />} />
        <Route exact path="/us" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
