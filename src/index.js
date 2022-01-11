import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Links from './components/links';
import About from './components/about';
import Main from './components/main'
import './style.css'

ReactDOM.render((
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/links' element={ <Links /> } />
            </Routes>
        </Router>
    </React.StrictMode>),
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
