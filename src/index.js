import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/detail/:id/" element={<Detail />}></Route>
      </Routes>
  </Router>
    </React.StrictMode>
);

