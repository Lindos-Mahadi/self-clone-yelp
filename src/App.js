import React from "react";
import {Switch, Route} from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import {Search} from './Search/Search';

function App() {
  return (
    // <LandingPage />
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={LandingPage}/>
    </Switch>
  );
}

export default App;
