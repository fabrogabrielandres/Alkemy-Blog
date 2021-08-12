import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeBackoffice } from "../pages/backoffice/home";
import { NewsForm } from "../Components/News/NewsForm";
import { MembersForm } from "../Components/Members/MembersForm";
import { UsersList } from "../Components/Users/UsersList";
import { MembersList } from "../Components/Members/MembersList";
import { UserForm } from "../Components/Users/UserForm";
import { ActivitiesForm } from "../Components/Activities/ActivitiesForm";
import NewsDetail from "../Components/News/Detail";
import { SlidesList } from "../Components/Slides/SlidesList";
import SlidesForm from "../Components/Slides/SlidesForm";
import FormEditData from "../Components/Backoffice/Organization/edit";
import DataOrganization from "../pages/backoffice/organization";
import Detail from "../Components/Activities/Detail";
import Footer from "../Components/Footer/Footer";
import ActivitiesList from "../Components/Activities/ActivitiesList";
import CategoriesList from "../Components/Categories/Categories";
import { ActivitiesSection } from "../Components/Activities/ActivitiesSection";
import Home from "../pages/home/index";
import About from "../Components/About";
import DonationComponent from "../Components/Donations/Donacion";
import ThanksComponent from "../Components/Donations/Gracias";
import NewsList from "../Components/News/NewsList";
import ContactPage from "../Components/Contact/ContactPage";
import { FormCategories } from "../Components/Categories/FormCategories";
import NewsPage from "../Components/News/NewsPage";

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
        <Route exact path="/backoffice/slides" component={SlidesList} />
        <Route exact path="/backoffice/slides/create" component={SlidesForm} />
        <Route exact path="/backoffice/slides/:id" component={SlidesForm} />
        <Route exact path="/backoffice/categories" component={CategoriesList} />
        <Route exact path='/backoffice/categories/create' component={FormCategories} />
        <Route exact path='/backoffice/categories/edit/:id' component={FormCategories} />
        <Route exact path="/backoffice/users" component={UsersList} />
        <Route exact path="/backoffice/users/create" component={UserForm} />
        <Route exact path="/backoffice/users/edit/:id" component={(news) => <NewsForm {...news} />} />
        <Route exact path="/backoffice/news/create" component={NewsForm} />
        <Route exact path="/backoffice/members" component={MembersList} />
        <Route exact path="/backoffice/members/create" component={MembersForm} />
        <Route exact path="/backoffice/members/edit/:id" component={(member) => <MembersForm {...member} />} />
        <Route exact path="/activities/:id" component={() => <Detail content="propsContentHere" />} />
        <Route exact path="/donar" component={() => <DonationComponent text="Realiza tu Donacion" />} />
        <Route exact path="/gracias" component={ThanksComponent} />
        <Route exact path="/backoffice/news/:id" component={() => <NewsDetail title="Detalle de novedad" />} />
        <Route exact path="/us" component={About} />
        <Route exact path="/actividades" component={ActivitiesSection} />
        <Route exact path="/backoffice/news" component={NewsList} />
        <Route exact path="/contacto" component={(contactInfo) => <ContactPage info={contactInfo} />} />
        <Route exact path="/novedades" component={NewsPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
