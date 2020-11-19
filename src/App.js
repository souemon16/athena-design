import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
