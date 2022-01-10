import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


// import BtnAdd from "./components/buttons/buttonAdd";
// import BtnDel from "./components/buttons/buttonDel";
import Input from "./components/input"
import Note from "./components/note";

ReactDOM.render(
  <React.StrictMode>
      <h1>YOUR NOTES</h1>
      <Input />
      <Note />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
