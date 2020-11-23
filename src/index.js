import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import element from "./component/IntroducingJSX/jsx"
import reportWebVitals from './reportWebVitals';
import component from "./component/Componen&Props/component"
import state from "./component/Sate&Lifecycle/state" 
import event from "./component/HandlingEvent/handle"
import control from "./component/ConditionalRender/conditional"
ReactDOM.render(
  control,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
