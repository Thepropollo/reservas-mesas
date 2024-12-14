import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>&copy; 2024 VLJR. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
      </div>
    </div>
  </footer>
);

export default Footer;