import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
import Register from './Pages/Register';
import { store,persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Pages/Login'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/detail/:id/" element={<Detail />}></Route>
        </Routes>
      </ PersistGate>
    </Provider>
  </Router>
    </React.StrictMode>
);

