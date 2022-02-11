import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Links from './Pages/Links';
import About from './Pages/About';
import './style.css'
import Main from "./Pages/Main";

ReactDOM.render((
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/links' element={ <Links /> } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>),
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
