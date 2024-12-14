import React from 'react';
import Navbar from './layout/Navbar';
import Carousel from './layout/Carousel';
import InfoSection from './layout/InfoSection';
import Footer from './layout/Footer';
import cdinastia from './recursos/jesus.png';
import dolceVita from './recursos/vane.png';
import tablita from './recursos/Ramon.png';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <main>
      <Carousel />
      <section className="main-content">
        <div className="reserve-button-container">
          <button className="reserve-button">Reserva ahora</button>
        </div>
      </section>
      <InfoSection imgSrc={cdinastia} alt="cdinastia" title="Shifa Dinastia" description="Shifa Dinastía es un restaurante especializado en auténtica comida china..." />
      <InfoSection imgSrc={dolceVita} title="Dolce Vita" description="Dolce Vita es un restaurante italiano que celebra la esencia de la cocina mediterránea..." />
      <InfoSection imgSrc={tablita} title="La tablita del Tartaro" description="La Tablita del Tártaro es un restaurante especializado en asados a la parrilla..." />
    </main>
    <Footer />
  </div>
);

export default App;