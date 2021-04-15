const cards = document.querySelectorAll(".card");

cards.forEach(card => addEventListener("click", flipCard));

function flipCard() {
  console.log(this);
  console.log("C'est cliqué");
}

// console.log(cards);

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