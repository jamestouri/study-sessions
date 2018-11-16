import React from 'react';
import { Provider } from 'react-redux';

const Root = ({store}) => (
  <Provider store = {store}>
      <h1>Hi</h1>
  </Provider>
)
