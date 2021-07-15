import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";

function App() {
  return (
    <BrowserRouter>
      {/* Redirect te permite redirijirte a una ruta por otra */}
      <Switch>
        <Route exact path="/badges" component={Badges} />

        <Route exact path="/">
          <Redirect to="/badges" />
        </Route>
        
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
