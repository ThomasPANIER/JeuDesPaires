
// Récupérer les éléments html card sous forme de tableau.
const cards = document.querySelectorAll(".gameCard");
//console.log();

// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
  // on ajoute ensuite aux éléments un écouteur d'événements qui sera un click sur une card pour y ajouter la fonction. 
cards.forEach(card => card.addEventListener("click", flipCard));
// for (card of cards) {
//   card = card.addEventListener("click", flipCard);
//   //console.log();
// }



//par default la class "flip" n'est pas mise.
//let addedFlipClass = false;

// 1ere et 2eme card retournée.
let cardOne;
let cardTwo;
let test = [];

//let dataColor = document.querySelectorall('.card.flip');
// console.log("dataColor");

// Fonction flipCard() déclenchée par foreach() permet d'accéder à la classe de card pour appliquer la méthode toggle.
  // Utilisation de la méthode toggle pour cacher ou montrer un élément du dom.
function flipCard() {
  //this.classList.toggle("flip");
  this.classList.add("flip");
  console.log(this);
  test.push(this);
  console.log(test);
    if (test.length === 2) {
      compareCard();
      
    }
  
//}  
};

//style = "background-color:blue";
//test[0].style.backgroundColor === ....

function compareCard() {
  if (test[0].dataset.name === test[1].dataset.name) {
    alert("identique");
    console.log(test[0].dataset.name);
  }
  else {
    test[0].classList.remove("flip");
    test[1].classList.remove("flip");
  }
  test = [];
}


// Déterminer si l'utilisateur click sur la 1ere ou 2eme card et comparer les choix
  
  
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