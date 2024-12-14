import React from 'react';
import Navbar from '../layout/Navbar';
import Carousel from '../layout/Carousel';
import Footer from '../layout/Footer';
import '../App.css';

const login = () => (
    <div>
      <Navbar />
      <main>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
  
export default login;