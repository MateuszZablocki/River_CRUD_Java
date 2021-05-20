import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListRiverComponent from "./component/ListRiverComponent";
import AddRiverComponent from "./component/AddRiverComponent";
import EditRiverComponent from "./component/EditRiverComponent";

function App() {
  return (
      <div className="container">
        <Router>
          <div className="col-md-6">
            <h1 className="text-center" style={style}>Mateusz Zabłocki</h1>
            <Switch>
              <Route path="/" exact component={ListRiverComponent} />
              <Route path="/rivers" component={ListRiverComponent} />
              <Route path="/add-river" component={AddRiverComponent} />
              <Route path="/edit-river" component={EditRiverComponent} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

const style = {
  color: 'red',
  margin: '8px'
}

export default App;
