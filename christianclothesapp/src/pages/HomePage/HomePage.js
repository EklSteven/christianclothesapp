import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import broderieImage from '../../assets/images/broderie(1).png';
import serigraphieImage from '../../assets/images/serigraphie.png';
import impressionImage from '../../assets/images/direction.png';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Bienvenue sur Christ Dans Nos Cœurs Par La Foi</h1>
          <p>Découvrez notre collection d'articles chrétiens personnalisés</p>
          <Link to="/shop" className="cta-button">Explorer la Boutique</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>Qualité Supérieure</h3>
          <p>Nos produits sont conçus avec des matériaux durables et confortables.</p>
        </div>
        <div className="feature">
          <h3>Personnalisation</h3>
          <p>Ajoutez une touche unique à vos vêtements avec nos techniques de personnalisation.</p>
        </div>
        <div className="feature">
          <h3>Livraison Rapide</h3>
          <p>Recevez vos commandes rapidement grâce à notre service de livraison express.</p>
        </div>
      </section>

      {/* Section Personnalisation */}
      <section className="personalisation">
        <h2>Nos Techniques de Personnalisation</h2>
        <div className="techniques-grid">
          <div className="technique">
            <img src={broderieImage} alt="Broderie" className="broderie-icon" />
            <h3>Broderie</h3>
            <p>Un rendu élégant et résistant pour vos designs.</p>
          </div>
          <div className="technique">
            <img src={serigraphieImage} alt="Sérigraphie" className="serigraphie-icon" />
            <h3>Sérigraphie</h3>
            <p>Des couleurs vibrantes et une finition durable.</p>
          </div>
          <div className="technique">
            <img src={impressionImage} alt="Impression DTG" className="impression-icon" />
            <h3>Impression Directe</h3>
            <p>Idéale pour des motifs détaillés et colorés.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;