// Récupérer les balises html <section> sous forme de tableau.
const sections = document.querySelectorAll(".col-3");

// Récupérer les éléments html card sous forme de tableau.
const cards = document.querySelectorAll(".gameCard");

// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
  // on ajoute ensuite aux éléments un écouteur d'événements qui sera un click sur une card pour y ajouter la fonction. 
cards.forEach(card => card.addEventListener("click", flipCard));
// Même finalité que la fonction fléché.
  // for (card of cards) {
  //   card = card.addEventListener("click", flipCard);
  //   //console.log();
  // }

// Stocker les choix de l'utilisateur pour la 1ere et 2eme card et comparer les choix.
  // Les cartes retournées sont stocker dans un tableau vide.
let choiceCard = [];

// Fonction flipCard() déclenchée par foreach() permet d'accéder à l'élément card pour appliquer la méthode add.
function flipCard() {
  // Ajout de la classe "flip" à l'élément card.
  this.classList.add("flip");
  console.log(this);
  // insérer les choix dans le tableau vide choiceCard.
  choiceCard.push(this);
  console.log(choiceCard);
  // Vérifier qu'il y a bien 2 card dans le tableau pour pouvoir comparer.
    // si plus de 2 card choisi lancer une alert et retourner les card.
    if  (choiceCard.length > 2) {
      alert("trop c'est trop !");
      choiceCard[2].classList.remove("flip");
    }
    // si le bon nombre de card est choisi lancer la comparaison.  
    else if (choiceCard.length === 2) {
      // la methode setTimeOut permet de différer la fonction compareCard de 2s.
      setTimeout(function(){compareCard();}, 2000);
    }  
};

// Fonction compareCard pour identifier les cartes avec data-name et comparer si identique.
function compareCard() {
  if (choiceCard[0].dataset.name === choiceCard[1].dataset.name) {
    // si toutes les paires sont trouvées, proposition de recommencer le jeu.
    let winningPair = document.querySelectorAll(".flip");
    if (paire.length === 12) {
      alert("jeu fini ! Pour rejouer cliquez sur Jeu des paires");
      console.log(winningPair.length);
    }
    // sinon le jeu continue.
    else {
    win();
    console.log(choiceCard[0].dataset.name);
    }  
  }
  // si choix pas identiques enlève la classe "flip" pour cacher de nouveau les card.
  else {
    loose();
    choiceCard[0].classList.remove("flip");
    choiceCard[1].classList.remove("flip");
  }
  // Remet le tableau de stockage des choix à vide.
  choiceCard = [];
};




function win() {
  alert("une paire trouvée !");
};

function loose() {
  alert("ce n'est pas une paire");
};

// Fonction pour ranger les balises html ciblées et les redisposer de manière aléatoire.
(function shuffle() {
  sections.forEach(section => {
    let randomPosition = Math.floor(Math.random() * 12);
    section.style.order = randomPosition;
  });
})();
//shuffle();
