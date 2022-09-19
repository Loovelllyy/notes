import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import './style.css'
import Main from "./Pages/Main";
import {CustomProvider} from "./Context/CustomProvider";


ReactDOM.render((
    <React.StrictMode>
      <CustomProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Main /> } />
          </Routes>
        </BrowserRouter>
      </CustomProvider>
    </React.StrictMode>),
  document.getElementById('root'),
);
