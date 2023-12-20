// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/index';
import App from './App';

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
