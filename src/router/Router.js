import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewsDetail from "../Components/News/Detail";
import Detail from "../Components/Activities/Detail";
import Footer from "../Components/Footer/Footer";
import { ActivitiesSection } from "../Components/Activities/ActivitiesSection";
import Home from "../pages/Home/index";
import About from "../Components/About";
import BackOfficeLayout from "../Components/BackOfficeLayout";
import DonationComponent from "../Components/Donations/Donacion";
import ThanksComponent from "../Components/Donations/Gracias";
import ContactPage from "../Components/Contact/ContactPage";
import NewsPage from "../Components/News/NewsPage";
import NotFound from "../Components/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/backoffice" component={BackOfficeLayout} />
        <Route
          exact
          path="/activities/:id"
          component={() => <Detail content="propsContentHere" />}
        />
        <Route
          exact
          path="/donar"
          component={() => <DonationComponent text="Realiza tu Donacion" />}
        />
        <Route exact path="/gracias" component={ThanksComponent} />
        <Route
          exact
          path="/novedades/:id"
          component={() => <NewsDetail title="Detalle de novedad" />}
        />
        <Route exact path="/us" component={About} />
        <Route exact path="/actividades" component={ActivitiesSection} />
        <Route
          exact
          path="/contacto"
          component={(contactInfo) => <ContactPage info={contactInfo} />}
        />
        <Route exact path="/novedades" component={NewsPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
