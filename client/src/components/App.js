import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ClassGridItem from "./ClassGridItem";
import GlobalStyles from "./GlobalStyles";
import ModalButton from "./ModalButton";
import Analytics from "./Analytics";
import UserAccount from "./UserAccount";
import Faqs from "./Faqs";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ClassGridItem />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
        <Route path="/account">
          <UserAccount />
        </Route>
        <Route path="/faq">
          <Faqs />
        </Route>
      </Switch>
      <ModalButton />
    </Router>
  );
};

export default App;
