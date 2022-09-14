<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import store from './store'
import styles from '../styles/Home.module.css'
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
>>>>>>> dev

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)