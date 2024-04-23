import React from "react";
// import React, { createContext, useContext, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/Header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

