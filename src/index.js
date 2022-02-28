import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Links from './Pages/Links';
import {AboutWithRedux} from './Pages/About';
import './style.css'
import Main from "./Pages/Main";

import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Redux/RootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Main /> } />
                    <Route path='/about' element={ <AboutWithRedux /> } />
                    <Route path='/links' element={ <Links /> } />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>),
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
