import React from 'react';
import PostIndexContainer from './posts/post_index_container';
import {
  Route,
  Link,
  HashRouter,
  Switch,
  Redirect
} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={PostIndexContainer}/>
      </Switch>
    </div>
  )
}

export default App;
