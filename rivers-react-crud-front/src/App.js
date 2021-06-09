import React from "react";
import {Home, About} from './pages';
import Nav from './layout/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListRiverComponent from "./component/ListRiverComponent";
import AddRiverComponent from "./component/AddRiverComponent";
import EditRiverComponent from "./component/EditRiverComponent";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>

            <Route path="/list" component={ListRiverComponent} />
            <Route path="/rivers" exact component={ListRiverComponent} />
            <Route path="/add-river" component={AddRiverComponent} />
            <Route path="/edit-river" component={EditRiverComponent} />
        </Switch>
    </Router>
  );
}

export default App;
