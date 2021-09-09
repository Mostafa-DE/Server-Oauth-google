import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
import Surveys from "./Components/Surveys";
import NewSurveys from "./Components/NewSurveys";
import { connect } from "react-redux";
import * as actions from "./actions";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/surveys" render={() => <Surveys />} />
        <Route exact path="/surveys/new" render={() => <NewSurveys />} />
      </Switch>
    </div>
  );
};

export default connect(null, actions)(App);
