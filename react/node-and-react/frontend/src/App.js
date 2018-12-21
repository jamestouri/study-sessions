import React, { Component } from 'react';
import EventIndex from './components/event_index'
import './App.css';
import {
  Route,
  HashRouter,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/api/events" component={EventIndex}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
