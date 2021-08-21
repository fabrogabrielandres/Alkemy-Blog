import React from "react";
import { Switch, Route } from "react-router-dom";
import HeaderComponent from "../Header";
import { HomeBackoffice } from "../../pages/backoffice/home";
import { NewsForm } from "../News/NewsForm";
import { MembersForm } from "../Members/MembersForm";
import { UsersList } from "../Users/UsersList";
import { MemberList } from "../Members/MembersList";
import { UserForm } from "../Users/UserForm";
import { ActivitiesForm } from "../Activities/ActivitiesForm";
import { SlidesList } from "../Slides/SlidesList";
import SlidesForm from "../Slides/SlidesForm";
import FormEditData from "../Backoffice/Organization/edit";
import DataOrganization from "../../pages/backoffice/organization";
import ActivitiesList from "../Activities/ActivitiesList";
import CategoriesList from "../Categories/Categories";
import NewsList from "../News/NewsList";
import NotFound from "../NotFound";
import { FormCategories } from "../Categories/FormCategories";

const BackOfficeLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/backoffice" component={HomeBackoffice} />
        <Route
          exact
          path="/backoffice/activities/create"
          component={ActivitiesForm}
        />
        <Route
          exact
          path="/backoffice/activities/edit/:id"
          component={ActivitiesForm}
        />
        <Route exact path="/backoffice/activities" component={ActivitiesList} />
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
        <Route exact path="/backoffice/slides/create" component={SlidesForm} />
        <Route exact path="/backoffice/slides/:id" component={SlidesForm} />
        <Route exact path="/backoffice/categories" component={CategoriesList} />
        <Route
          exact
          path="/backoffice/categories/create"
          component={FormCategories}
        />
        <Route
          exact
          path="/backoffice/categories/edit/:id"
          component={FormCategories}
        />
        <Route exact path="/backoffice/users" component={UsersList} />
        <Route exact path="/backoffice/users/create" component={UserForm} />
        <Route
          exact
          path="/backoffice/users/:id"
          component={(data) => <UserForm user={data} />}
        />
        <Route
          exact
          path="/backoffice/novedades/:id"
          component={(news) => <NewsForm {...news} />}
        />
        <Route exact path="/backoffice/novedades/create" component={NewsForm} />
        <Route exact path="/backoffice/members" component={MemberList} />
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
        <Route exact path="/backoffice/novedades" component={NewsList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default BackOfficeLayout;
