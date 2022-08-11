import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { productReducer } from './store/reducers/product';
import { composeWithDevTools } from 'redux-devtools-extension';
import { orderReducer } from './store/reducers/order';
import { BrowserRouter } from 'react-router-dom';
import { userReducer } from './store/reducers/user';

const myProp=createStore(combineReducers({ ord:orderReducer, prod:productReducer,us:userReducer}),composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myProp}>
   <BrowserRouter><App /></BrowserRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
