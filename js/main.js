// Get the html <section> tags in the form of a table. 
const sections = document.querySelectorAll(".col-3");

// Get the html card elements in the form of an array.
const cards = document.querySelectorAll(".gameCard");

// The forEach () method is used to execute a function on each element of the array.
  // an event listener is then added to the elements, here a click on a card to add the function.
cards.forEach(card => card.addEventListener("click", flipCard));

// Store the user's choices for the 1st and 2nd card and compare the choices.
  // The returned cards are stored in an empty array.
let choiceCard = [];

// FlipCard () function applied by foreach () allows access to the card element to apply the add method.
function flipCard() {
  // Added the "flip" class to the card element. 
  this.classList.add("flip");
  // insert the choices into the empty choiceCard array.
  choiceCard.push(this);
  // Check that there are 2 cards in the table to be able to compare.
    // if more than 2 cards chosen, launch an alert and return the cards.
    if  (choiceCard.length > 2) {
      alert("  Trop c'est trop ! \n Il ne faut retouner \n     que 2 cartes.");
      choiceCard[2].classList.remove("flip");
    }
    // if the right number of cards is chosen, start the comparison.  
    else if (choiceCard.length === 2) {
      // the setTimeOut method allows to defer the compareCard function by 1s.
      setTimeout(function(){compareCard();}, 1000);
    }  
};

// CompareCard function to identify cards with data-name and compare if identical.
function compareCard() {
  // check that the click is not twice on the same card.
  if  (choiceCard[0].dataset.number === choiceCard[1].dataset.number) {    
    choiceCard[0].classList.remove("flip");
    choiceCard[1].classList.remove("flip");
    choiceCard = [];
  }
  // one pair found.
  else if (choiceCard[0].dataset.name === choiceCard[1].dataset.name) {
    // we remove eventListener to not be able to reclick on the pair.
    choiceCard[0].removeEventListener("click", flipCard);
    choiceCard[1].removeEventListener("click", flipCard);
    // if all the pairs are found, offer to restart the game.
    let winningPair = document.querySelectorAll(".flip");
    if (winningPair.length === 12) {
      alert("Bien joué vous avez touvez toutes les paires ! \n    Pour rejouer cliquez sur Jeu des paires");
    }
    // if not the game continues.
  }
  // if the choice is not identical, remove the "flip" class to hide the cards again.
  else {
    choiceCard[0].classList.remove("flip");
    choiceCard[1].classList.remove("flip");
  }
  // Empty the choice storage array.
  choiceCard = [];
};

// Function to arrange the targeted html tags and rearrange them randomly.
(function shuffle() {
  sections.forEach(section => {
    let randomPosition = Math.floor(Math.random() * 12);
    section.style.order = randomPosition;
  });
})();