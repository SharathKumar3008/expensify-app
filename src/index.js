import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import '@csstools/normalize.css/normalize.css';
import './styles/styles.scss';
//import IndecisionApp from "./App";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));