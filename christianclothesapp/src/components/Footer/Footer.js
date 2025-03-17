import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-light">© 2025 Christ Dans Nos Coeur Par La Foi. Tous droits réservés.</p>
        <div className="footer-contacts">
          <p>Développé par Steven Eklou</p>
          <p>Email : <a href="mailto:tonemail@example.com">tonemail@example.com</a></p>
          <p>Téléphone : +XX XX XX XX XX</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/tonprofil" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;