import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* 
      Redirect te permite redirijirte a una ruta por otra
        <Route exact path="/">
          <Redirect to="/badges" />
        </Route>
      */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
        <Route component={NotFound} />
        {/* otra manera de redirigir en caso de no encontrar
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" /> 
          */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
