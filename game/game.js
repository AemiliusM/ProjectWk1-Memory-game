import { getLocal, setUser } from '../utils.js';

const gameBoard = document.getElementById('gameboard-id');
const turnSpan = document.getElementById('counter-span');
const matchedSpan = document.getElementById('matched-span');
const counterDiv = document.getElementById('counter-div');

let selected = [];
let turns = 0;
let matched = 0;

const shuffledTiles = shuffleTiles();

for (let tile of shuffledTiles) {
    const tileDiv = renderTile(tile);
    tileDiv.classList.add(tile, 'tile');
    gameBoard.appendChild(tileDiv);
}
// might be nice to add a game-utils file and move these functions out of this file

function renderTile(id) {
    const tileDiv = document.createElement('div');
    const tileImg = document.createElement('img');
    const tileDivFront = document.createElement('div');
    const tileDivBack = document.createElement('div');

    tileDivFront.classList.add('tile-front');
    tileDivBack.classList.add('tile-back');
    tileImg.src = `../images/image${id}.jpg`;
    tileDivBack.appendChild(tileImg);
    tileDiv.append(tileDivFront, tileDivBack);

    return tileDiv;
}

function shuffleTiles() {
    const tileArray = ['1', '2', '3', '4', '5', '6', '7', '8']; //used in shuffle
    const fullPile = [...tileArray, ...tileArray];
    const shuffledTiles = fullPile.sort(function(a, b) { return 0.5 - Math.random(); }); // eslint-disable-line
    // use shuffledTile array to assign an id to each div
    return shuffledTiles;
}

const user = getLocal();
const tiles = document.querySelectorAll('.tile');
const audio2 = new Audio('../assets/sounds/Brick.wav');

function tileFlip() {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            audio2.volume = 0.3;
            audio2.play();
            tile.classList.add('noclick');
            tile.classList.toggle('flipped');
            selected.push(tile);
            
            if (selected.length === 2) {
                turns += 1;
                user.turns = turns;
                setUser(user);
                turnSpan.textContent = `Turns: ${turns}`;
                gameBoard.classList.add('noclick');
                const selected1Id = selected[0].classList.value;
                const selected2Id = selected[1].classList.value;
                
                if (selected1Id === selected2Id) {
                    selected.forEach(tile => {
                        tile.classList.add('noclick', 'matched');
                    });
                    gameBoard.classList.remove('noclick');
                    matched += 1;
                    matchedSpan.textContent = `Matches: ${matched}`;
                    selected = [];
                    endGame();
                } 
                
                else {
                    setTimeout(() => {
                        selected[0].classList.toggle('flipped');
                        selected[1].classList.toggle('flipped');
                        gameBoard.classList.remove('noclick');
                        selected[0].classList.remove('noclick');
                        selected[1].classList.remove('noclick');
                        selected = [];
                    }, 2500);
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
        audio.volume = 0.1;
        audio.play();
        const winSpan = document.createElement('span');
        const winDiv = document.createElement('div');
        winSpan.classList.add('win-span');
        winDiv.classList.add('win-div');
        winSpan.textContent = `${name}YOU WON`;
        winDiv.appendChild(winSpan);
        // gameBoard.removeChild(tileList);
        counterDiv.appendChild(winDiv);
        setTimeout(() => { 
            window.location.replace('../results/');
        }, 4000);
    }
} 
