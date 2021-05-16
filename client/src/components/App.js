import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ClassGrid from "./ClassGrid";
import GlobalStyles from "./GlobalStyles";
import ModalButton from "./ModalButton";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ClassGrid />
        </Route>
      </Switch>
      <ModalButton />
    </Router>
  );
};

export default App;
