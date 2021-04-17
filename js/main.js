// Récupérer les balises html <section> sous forme de tableau
const sections = document.querySelectorAll(".col-3");
//console.log(sections);

// Récupérer les éléments html card sous forme de tableau.
const cards = document.querySelectorAll(".gameCard");
//console.log();

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

// Fonction flipCard() déclenchée par foreach() permet d'accéder à la classe de card pour appliquer la méthode toggle.
  // Utilisation de la méthode toggle pour cacher ou montrer un élément du dom.
function flipCard() {
  //this.classList.toggle("flip");
  this.classList.add("flip");
  console.log(this);
  // insérer les choix dans le tableau vide.
  choiceCard.push(this);
  console.log(choiceCard);
  // Vérifier qu'il y a bien 2 card dans le tableau pour pouvoir comparer.
    if (choiceCard.length === 2) {
      // la methode setTimeOut permet de différer la fonction compareCard de 2s.
      setTimeout(function(){compareCard();}, 2000);
    } 
};

// Fonction compareCard pour identifier les cartes avec data-name et comparer si identique.
function compareCard() {
  if (choiceCard[0].dataset.name === choiceCard[1].dataset.name) {
    //alert("identique");
    console.log(choiceCard[0].dataset.name);
    // choiceCard[0].removeEventListener(("click", flipCard));
    // choiceCard[1].removeEventListener(("click", flipCard));
    setTimeout(win, 1000);
    
  }
  // si choix pas identiques enlève la classe "flip" pour cacher de nouveau les card.
  else {
    loose();
    //setTimeout(function(){choiceCard[0].classList.remove("flip");choiceCard[1].classList.remove("flip");},2000);
    choiceCard[0].classList.remove("flip");
    choiceCard[1].classList.remove("flip");
    
    //setTimeout(function(){looseChoice(); loose();}, 2000);
    

    
  };
  // Remet le tableau de stockage des choix à vide.
  choiceCard = [];
  
};

function win() {
  alert("une paire trouvée !");
}

function loose() {
  
  // choiceCard.forEach(choice => choice.classList.remove("flip"));
  alert("ce n'est pas une paire");
};


shuffle();
// Fonction pour ranger les balises html ciblées et les redisposer de manière aléatoire.
function shuffle() {
  sections.forEach(section => {
    let randomPosition = Math.floor(Math.random() * 12);
    section.style.order = randomPosition;
  });
};





//for (card of choiceCard) {
      //card = choiceCard.setTimeout(() => {classList.remove("flip")}, 2000);
              //   card = myFunction();
    // }

     


// setTimeout(() => { 
//   choiceCard.classList.remove("flip");
//   choiceCard.classList.remove("flip");
// }, 2000);

// choiceCard[0] = myFunction();
// choiceCard[1] = myFunction();
// function myFunction() {
//   setTimeout(function(){ choiceCard.classList.remove("flip"); }, 1500);
// }





//par default la class "flip" n'est pas mise.
// let addedFlipClass = false;
// let cardOne;
// let cardTwo;  


//   if (!addedFlipClass) {
//     addedflipClass = true;
//     cardOne = this;
//   }
//   else {
//     addedFlipClass = false;
//     cardTwo = this;
  

  
  

//     if (cardOne.dataset.color === cardTwo.dataset.color) {
//       cardOne.removeEventListener("click", flipCard);
//       cardTwo.removeEventListener("click", flipCard);
//     }
//     else {
//       cardOne.classList.remove("flip");
//       cardTwo.classList.remove("flip");
//     }
//     console.log(cardTwo.dataset.color);
//   }
//   console.log([addedFlipClass, cardOne]);
// }










// const colors = ["red", "green", "yellow", "blue", "purple", "pink", "red", "green", "yellow", "blue", "purple", "pink"];

// function choosenCard(){
//   for (card of cards) {
//     this.onclick = function(){
//       alert("coucou");
//       card.style.backgroundColor = colors[0];
//     };  
//   }
// }

// for (i=0; cards < 12; i++) {
//    cards = choosenCard(){
     
//    };

// }