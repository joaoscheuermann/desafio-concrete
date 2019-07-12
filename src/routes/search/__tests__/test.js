import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from '../../../store'

import Component from '../index';

it('renders without crashing', () => {
  const match = {
    params: {
      username: 'teste'
    }
  }

  const props = {
    match
  }

  const div = document.createElement('div');

  ReactDOM.render((
    <Provider store={store}>
      <Component {...props}/>
    </Provider>
  ), div);

  ReactDOM.unmountComponentAtNode(div);
});