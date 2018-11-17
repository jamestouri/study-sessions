import React from 'react';
import { Provider } from 'react-redux';
import ModalContainer from './modal_container';

const Root = ({store}) => (
  <Provider store = {store}>
      <ModalContainer/>
  </Provider>
)

export default Root;
