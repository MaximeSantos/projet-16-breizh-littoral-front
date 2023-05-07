import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as RTKProvider } from 'react-redux';
import router from './router';
import store from './store';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RTKProvider store={store}>
      <RouterProvider router={router} />
    </RTKProvider>
  </React.StrictMode>,
);
