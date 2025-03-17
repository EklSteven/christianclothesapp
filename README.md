# Christian Clothes App

Bienvenue sur **Christian Clothes App**, une application web pour découvrir et acheter des vêtements chrétiens personnalisés.

## Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Technologies](#technologies)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Aperçu

Christian Clothes App est une plateforme en ligne où vous pouvez explorer une collection de vêtements chrétiens personnalisés, en apprendre davantage sur les techniques de personnalisation et acheter des articles de qualité supérieure.

## Fonctionnalités

- **Page d'accueil** : Présentation de la collection et des techniques de personnalisation.
- **Page de la boutique** : Affichage de tous les articles disponibles.
- **Navigation** : Menu de navigation responsive avec un menu hamburger pour les vues mobiles.
- **Footer** : Informations de contact et liens vers les réseaux sociaux.

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)
- MongoDB (pour le backend)

### Étapes

1. Clonez le dépôt :

    ```sh
    git clone https://github.com/tonprofil/christianclothesapp.git
    cd christianclothesapp

2. Installez les dépendances pour le frontend :

    ```sh
    cd christianclothesapp
    npm install

3. Installez les dépendances pour le backend : 

     ```sh
     cd ../server
    npm install

4. Configurez les variables d'environnement : 

Créez un fichier .env dans le dossier server et ajoutez les variables suivantes :

PORT=5001
MONGO_URI=mongodb://localhost:27017/christianclothesapp

### Utilisation

Démarrer le frontend
cd christianclothesapp
npm start

Démarrer le backend
cd ../server
npm run dev

### Accéder à l'application

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir le frontend et à http://localhost:5001 pour le backend.

### Technologies

Frontend :

React
React Router
Bootstrap
CSS

Backend :

Node.js
Express
MongoDB
Mongoose

### Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer : 

1. Fork le dépôt

2. Créez une branche pour votre fonctionnalité (git checkout -b feature/ma-fonctionnalité)

3. Commitez vos modifications (git commit -m 'Ajout de ma fonctionnalité')

4. Poussez votre branche (git push origin feature/ma-fonctionnalité)

5. Ouvrez une Pull Request