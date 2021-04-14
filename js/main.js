let cards = document.querySelectorAll(".card");

console.log(cards);

const colors = ["red", "green", "yellow", "blue", "purple", "pink", "red", "green", "yellow", "blue", "purple", "pink"];

for (card of cards) {
  card.onclick = function(){
    alert("coucou");
    card.style.backgroundColor = colors[1];
  };  
}

for (i=0; colors.length; i++) {

}