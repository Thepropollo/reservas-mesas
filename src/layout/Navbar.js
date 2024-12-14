import React from 'react';
import { BrowserRouter as  Route } from 'react-router-dom';
import './Navbar.css';
import logo from '../recursos/logo.png';
import login from '../con/login';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <a href="/" className="logo"><img src={logo} alt="Logo Restaurante" /></a>
      <h2>!Bienvenido a VLJR!</h2>
      <div className="user-actions">
        <a href="/" className="inicio-button">Inicio</a>
        <Route path="/login" element={login} className="register-button"Registrarse></Route>
      </div>
    </div>
  </nav>
);

export default Navbar;