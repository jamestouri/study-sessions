import React, { Component } from 'react';
import EventIndex from './components/event_index'
import ShowEvent from './components/show_event'
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
          <Route exact path="/api/events" component={EventIndex}/>
          <Route exact path="/api/events/:_id" component={ShowEvent}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
