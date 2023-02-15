import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowList} />
        <Route path="/summary/:id" component={ShowSummary} />
      </Switch>
    </Router>
  );
}

export default App;
