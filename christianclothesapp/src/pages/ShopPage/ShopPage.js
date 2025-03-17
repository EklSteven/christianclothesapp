import React from 'react';
import './ShopPage.css';

function ShopPage() {
  return (
    <div className="shop-page">
      <h1>Nos Articles</h1>
      <div className="articles-grid">
        {/* Exemple d'article */}
        <div className="article">
          <div className="article-image">IMAGE</div>
          <h3>Article 1</h3>
          <p>Description de l'article 1</p>
        </div>
        <div className="article">
          <div className="article-image">IMAGE</div>
          <h3>Article 2</h3>
          <p>Description de l'article 2</p>
        </div>
        {/* Ajoutez plus d'articles ici */}
      </div>
    </div>
  );
}

export default ShopPage;