let previousButton = document.querySelector('button');
let cards = document.querySelectorAll('li');
let main = document.querySelector('main');
let nextButton = main.lastElementChild
let card = 0;

function hiddenSelectedCard() {
  let selectedCard = document.querySelector('.selected');
  selectedCard.classList.remove('selected');
}

function showCard(indexCard) {
  cards[indexCard].classList.add('selected')
}

previousButton.addEventListener('click', function() {
  if(card === 0) return;
  hiddenSelectedCard();
  card -= 1;
  showCard(card);
} );

nextButton.addEventListener('click', function() {  
  if (card === cards.length-1) return;
  card += 1
  showCard(card);  
  hiddenSelectedCard();
} );