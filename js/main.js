// Récupérer les éléments html card sous forme de tableau.
const cards = document.querySelectorAll(".card");

// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
  // on ajoute ensuite aux éléments un écouteur d'événements qui sera un click sur une card pour y ajouter la fonction. 
cards.forEach(card => card.addEventListener("click", flipCard));

// Fonction flipCard() déclenchée par foreach() permet d'accéder à la classe de card avec la méthode toggle.
  // Utilisation de la méthode toggle pour cacher ou montrer un élément du dom.
function flipCard() {
  //cards.classList.add("flip");
  console.log(this);
  this.classList.toggle("flip");
}












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