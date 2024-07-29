<template>
  <main>
    <h1>Test technique</h1>
    <p>
      Ce projet a été réalisé dans le cadre d'un test technique, cela consistait à mettre un place
      un système d'e-commerce simple.
    </p>
    <p>
      Le sytème d'authentification que l'on retrouve généralement sur un site e-commerce, n'était
      pas demandé.
    </p>
    <h2>Fonctionnalités</h2>
    <ul>
      <li>Afficher les produits</li>
      <li>Afficher le détail d'un produit</li>
      <li>Conserver en base de données les produits retirés du panier avant achat</li>
      <li>Afficher le panier pour payer</li>
      <li>Ajouter ou retirer les produits du panier</li>
    </ul>
    <h2>Technologies</h2>
    <h3>API</h3>
    <p>L'api a été réalisé avec Laravel en version 11</p>
    <h3>Interface</h3>
    <p>
      L'interface utilisateur a été réalisé en Vue.js 3 en composition API et Pinia pour le store
    </p>
  </main>
</template>

<style>
ul {
  list-style-type: '\2705';
}

h2 {
  color: #8db8b6;
}

h3 {
  color: #64a5c4;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
