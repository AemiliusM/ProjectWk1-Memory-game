import { getUser } from '../utils.js';

const endButton = document.getElementById('play-again-button');
const resultsName = document.getElementById('results-name');
const resultsScore = document.getElementById('results-score');

const user = getUser();
resultsName.textContent = `${user.name}, you Won!`;
resultsScore.textContent = `You used ${user.turns} turns to match the tiles`;

endButton.addEventListener('click', () => {
    window.location.replace(`../`);
});