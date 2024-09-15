import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
