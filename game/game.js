// import { findById } from '../utils.js';

const gameBoard = document.getElementById('gameboard-id');
const turnSpan = document.getElementById('counter-span');
const matchedSpan = document.getElementById('matched-span');
// const tileList = document.getElementById('tiles-list');

// TODO
// Make deck better than this
const tileArray = ['1', '2', '3', '4', '5', '6', '7', '8'];
// don't know if we need to push into something else in order to shuffle



let selected = [];
let turns = 0;
let matched = 0;
// TODO
// make this a function
// shuffle deck

//  render function
const shuffledTiles = shuffleTiles();
// for loop to initialize process for rendering tiles
/*
for (let tile of shuffledTiles) {
    looping through, call renderTile, inside of renderTile pass tile as a parameter which will render our div and img elements
    append that to the gameBoard
    (1) when we call renderTile, const tileDiv = renderTile(tile)
    (2) append tileDiv to the gameBoard
    
}
*/

for (let tile of shuffledTiles) {
    const tileDiv = renderTile(tile);
    tileDiv.classList.add(tile, 'tile');
    gameBoard.appendChild(tileDiv);
}

function renderTile(id) {
    const tileDiv = document.createElement('div');
    const tileImg = document.createElement('img');
    tileImg.classList.add('tile-face', 'tile-front');
    tileImg.src = `../images/image${id}.jpg`;
    // insert the id into the image
    tileDiv.appendChild(tileImg);
    return tileDiv;
}

function shuffleTiles() {
    const arrayCopy = tileArray.slice().sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
    const halfPile = arrayCopy.splice(0, 8);
    const fullPile = halfPile.concat(halfPile);
    // above makes a copy but they are in the same order
    const shuffledTiles = fullPile.sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
    // use shuffledTile array to assign an id to each div
    return shuffledTiles;
}

// TODO
// put this somewhere and import it
const tiles = document.querySelectorAll('.tile');
function tileFlip() {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            tile.classList.add('noclick');
            tile.classList.toggle('flipped');
            selected.push(tile);
            if (selected.length === 2) {
                turns = turns + 1;
                turnSpan.textContent = `Turns: ${turns}`;
                gameBoard.classList.add('noclick');
                const selected1Id = selected[0].classList.value;
                const selected2Id = selected[1].classList.value;
                if (selected1Id === selected2Id) {
                    // setTimeout(() => {
                        // }, 2000);
                    selected[0].classList.add('noclick');
                    selected[0].classList.add('matched');
                    selected[1].classList.add('noclick');
                    selected[1].classList.add('matched');
                    gameBoard.classList.remove('noclick');
                    matched = matched + 1;
                    matchedSpan.textContent = `Matches: ${matched}`;
                    selected = [];
                    endGame();
                } else {
                    setTimeout(() => {selected[0].classList.toggle('flipped');
                        selected[1].classList.toggle('flipped');
                        gameBoard.classList.remove('noclick');
                        selected[0].classList.remove('noclick');
                        selected[1].classList.remove('noclick');
                        selected = [];}, 2500);
                }
            }
        });
    });
}
const audio = new Audio('../assets/sounds/TADA.WAV');

tileFlip();

function endGame() {
    if (matched === shuffledTiles.length / 2) {
            // put winning sound in
        audio.play();
        const winSpan = document.createElement('span');
        const winDiv = document.createElement('div');
        winSpan.classList.add('win-span');
        winDiv.classList.add('win-div');
        winSpan.textContent = `${name}YOU WON`;
        winDiv.appendChild(winSpan);
        // gameBoard.removeChild(tileList);
        gameBoard.appendChild(winDiv);
        setTimeout(() => { 
            window.location.replace('../results');
        }, 3500);
    }
} 

// TO INCORPORATE BACKGROUND IMAGE REVEAL ... when tiles are matched, display "none" or "hidden" on removed tiles
//  resize the background and add underlying image

    // update user object - grab turns,
    // end of game function to set ending conditions and set user object
// if matched pairs = shuffed tiles/2 - end game
// sounds and span to display win
// update user
// redirect to results automaticaly
// give tiles property of location on grid
// get fuction that will randomly assign value to property
// grid template area
// assign key to both tile and grid
// make function to make multiple divs