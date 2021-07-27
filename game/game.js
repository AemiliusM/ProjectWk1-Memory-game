// import { findById } from '../utils.js';

const gameBoard = document.getElementById('gameboard-id');
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

// TODO
// make tiles clickable
// display text on tile when clicked
let selected = [];
let turns = 0;
let matched = 0;
tiles.forEach(tile =>{
    tile.addEventListener('click', ()=>{
        tile.classList.add('noclick');
        tile.classList.toggle('flipped');
        // tileFlip(tile);
        // tile.classList.add('noclick');
        console.log('clicked', tile);
        selected.push(tile);
        console.log(selected);
        if (selected.length === 2){
            turns = turns + 1;
            gameBoard.classList.add('noclick');
            // make the board unclickable
            // if selected array equal to two
            // increment turns(not flips - total rounds) 
            // define selected values
            // Is this necessary for the if?
            const selected1Id = selected[0].classList.value;
            console.log(selected[0]);
            const selected2Id = selected[1].classList.value;
            console.log(selected1Id, selected2Id);
            if (selected1Id === selected2Id){
            // thinking of using findById here
                console.log(selected);
                selected[0].classList.add('noclick');
                selected[1].classList.add('noclick');
                gameBoard.classList.remove('noclick');
                matched = matched + 1;
                // remove noclick from board
                // check end game params
                selected = [];
                console.log('matched', selected);
            } else {
                selected[0].classList.toggle('flipped');
                selected[1].classList.toggle('flipped');
                gameBoard.classList.remove('noclick');
                selected[0].classList.remove('noclick');
                selected[1].classList.remove('noclick');
                selected = [];
                console.log('selected', selected);
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