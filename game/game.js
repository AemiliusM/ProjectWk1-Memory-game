// import { findById } from '../utils.js';

const gameBoard = document.getElementById('gameboard-id');
const turnSpan = document.getElementById('counter-span');
const matchedSpan = document.getElementById('matched-span');
const tiles = document.querySelectorAll('.tile');

// TODO
// Make deck better than this
const cardArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
// don't know if we need to push into something else in order to shuffle



let selected = [];
let turns = 0;
let matched = 0;
// TODO
// make this a function
// shuffle deck
const arrayCopy = cardArray.slice().sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
const halfPile = arrayCopy.splice(0, 8);
const fullPile = halfPile.concat(halfPile);
// above makes a copy but they are in the same order
const shuffledTiles = fullPile.sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line

// TODO
// put this somewhere and import it
function tileFlip() {
    tiles.forEach(tile =>{
        tile.addEventListener('click', ()=>{
            tile.classList.add('noclick');
            tile.classList.toggle('flipped');
            selected.push(tile);
            if (selected.length === 2){
                turns = turns + 1;
                turnSpan.textContent = `Turns: ${turns}`;
                gameBoard.classList.add('noclick');
                const selected1Id = selected[0].classList.value;
                const selected2Id = selected[1].classList.value;
                if (selected1Id === selected2Id){
                    selected[0].classList.add('noclick');
                    selected[1].classList.add('noclick');
                    gameBoard.classList.remove('noclick');
                    matched = matched + 1;
                    matchedSpan.textContent = `Matches: ${matched}`;
                    selected = [];
                } else {
                    selected[0].classList.toggle('flipped');
                    selected[1].classList.toggle('flipped');
                    gameBoard.classList.remove('noclick');
                    selected[0].classList.remove('noclick');
                    selected[1].classList.remove('noclick');
                    selected = [];
                }
            }
          
        });
    });
}
tileFlip();