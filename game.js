const numberBtn = document.getElementById('number_btn');
const iconBtn = document.getElementById('icon_btn');
const player1Btn = document.querySelector('.player1');
const players2Btn = document.querySelector('.players2');
const players3Btn = document.querySelector('.players3');
const players4Btn = document.querySelector('.players4');
const fourByFourBtn = document.querySelector('.fourbyfour');
const sixBySixBtn = document.querySelector('.sixbysix');
const startGameBtn = document.querySelector('.startgame_btn');
const playerscontainer = document.getElementselector(".playerscontainer");





// Set the default values for theme, grid size, and number of players
let theme = 'number';
let gridSize = '4x4';
let numPlayers = 1;

numberBtn.addEventListener('click', function() {
  theme = 'number';
  iconBtn.classList.remove('selected');
  numberBtn.classList.add('selected');

});

iconBtn.addEventListener('click', function() {
  theme = 'icon';
  numberBtn.classList.remove('selected');
  iconBtn.classList.add('selected');
});

player1Btn.addEventListener('click', function() {
  numPlayers = 1;
  player1Btn.classList.add('selected');
  players2Btn.classList.remove('selected');
  players3Btn.classList.remove('selected');
  players4Btn.classList.remove('selected');
});

players2Btn.addEventListener('click', function() {
  numPlayers = 2;
  player1Btn.classList.remove('selected');
  players2Btn.classList.add('selected');
  players3Btn.classList.remove('selected');
  players4Btn.classList.remove('selected');
  playerscontainer.classList.remove("player3");
  playerscontainer.classList.remove("player4");
});

players3Btn.addEventListener('click', function() {
  numPlayers = 3;
  player1Btn.classList.remove('selected');
  players2Btn.classList.remove('selected');
  players3Btn.classList.add('selected');
  players4Btn.classList.remove('selected');
});

players4Btn.addEventListener('click', function() {
  numPlayers = 4;
  player1Btn.classList.remove('selected');
  players2Btn.classList.remove('selected');
  players3Btn.classList.remove('selected');
  players4Btn.classList.add('selected');
});

fourByFourBtn.addEventListener('click', function() {
  gridSize = '4x4';
  fourByFourBtn.classList.add('selected');
  sixBySixBtn.classList.remove('selected');
});

sixBySixBtn.addEventListener('click', function() {
  gridSize = '6x6';
  fourByFourBtn.classList.remove('selected');
  sixBySixBtn.classList.add('selected');
});

startGameBtn.addEventListener('click', function() {
  setupGame(theme, gridSize, numPlayers);
});

function setupGame(theme, gridSize, numPlayers) {
  if (theme === "number" && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )) {
    window.location.href = "multiplayer6x6.html";
  } else if (theme === "number" && gridSize === "6x6" && numPlayers === 1) {
    window.location.href = "solo6x6.html";
  } else if(theme === "number" && gridSize === "4x4" && numPlayers === 1) {
    window.location.href = "solo4x4.html";
  } else if (theme === "number" && gridSize === "4x4"&& (numPlayers === 2 || numPlayers === 3 || numPlayers === 4)) {
    window.location.href = "multiplayer4x4.html";
  } else(alert("select a button"))
}




