// const gameBoard = document.getElementById('gameboard-id');
// const counterSpan = document.getElementById('counter-span');
const tiles = document.querySelectorAll('.tile');

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
console.log(tiles);
let selected = [];
let turns = 0;
let matched = 0;
tiles.forEach(tile =>{
    tile.addEventListener('click', ()=>{
        // tileFlip(tile);
        // tile.classList.add('noclick');
        console.log('clicked', tile.id);
        selected.push(tile.id);
        if (selected.length === 2){
            turns = turns + 1;
            console.log(turns);
            // make the board unclickable
            // if selected array equal to two
            // increment turns(not flips - total rounds) 
            // define selected values
            if (selected[0] === selected[1]){
                // tile.classList.add('noclick');
                matched = matched + 1;
                console.log(matched);
                // remove noclick from board
                // check end game params
                selected = [];
            } else {
                selected = [];
                // remove noclick from board
                // get flipped back
            }
        }

      
    });});
// grab list item (tile)
function tileflip() {
        // conditional if selected1 and selected2 are "==="
            // increment matches
            // check end of game
            // reset selected[]
        // else 
//              toggle selected 1&2 'is flipped'
            // reset selected[]

}
// store the clicked card's number
// second click then stored
// check if it's the second click
// compare selected items' ids
// do they match?
// if so, increment matchTotal and clear clicked array
// if not, flip back and clear clicked array
// 
// when flipped either add classList or toggle "is flipped"
// 