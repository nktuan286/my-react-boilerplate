import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { store } from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/app.scss';
import './locales';

const env = process.env.REACT_APP_STAGE;

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);

// eslint-disable-next-line no-unused-expressions
env === 'PROD' ? serviceWorker.register() : serviceWorker.unregister();
