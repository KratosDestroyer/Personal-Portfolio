import React from 'react';
import Homepage from './pages/homepage';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App  = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage}/>
    </Switch>
  </div>
)

export default App;
