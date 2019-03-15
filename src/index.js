import React from 'react';
import { render } from 'react-dom';

import Root from './Root';
import configureStore from './store/configstore';

console.log('he2');
const store = configureStore();
store.subscribe(() => console.log('values = ', store.getState()));
render(
  (
    <Root store={ store } />
  ), document.getElementById('root')
);
