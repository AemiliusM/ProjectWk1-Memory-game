// const gameBoard = document.getElementById('gameboard-id');
// const counterSpan = document.getElementById('counter-span');
// const tile = document.querySelector('.tile');

// Make deck
const cardArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
// don't know if we need to push into something else in order to shuffle

// shuffle deck
const arrayCopy = cardArray.slice().sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
const halfPile = arrayCopy.splice(0, 8);
const fullPile = halfPile.concat(halfPile);
// above makes a copy but they are in the same order
const shuffledTiles = fullPile.sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
console.log(shuffledTiles);


// TODO
// make tiles clickable
// display text on tile when clicked
