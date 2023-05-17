import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './app/App';
import store from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
