const gameSetup = document.getElementById("gamesetup");
const gameboard4x4Solo = document.getElementById("gameboard_4x4_start_solo");
const gameboard6x6Solo = document.getElementById("gameboard_6X6_start_solo");
const gameboard4x4Multi = document.getElementById("gameboard_4x4_start");
const gameboard6x6Multi = document.getElementById("gameboard_6X6_start");
const numberBtn = document.getElementById("number_btn");
const iconBtn = document.getElementById("icon_btn");
const player1Btn = document.querySelector(".player1");
const players2Btn = document.querySelector(".players2");
const players3Btn = document.querySelector(".players3");
const players4Btn = document.querySelector(".players4");
const fourByFourBtn = document.querySelector(".fourbyfour");
const sixBySixBtn = document.querySelector(".sixbysix");
const startGameBtn = document.querySelector(".startgame_btn");
const playersContainer = document.querySelector(".playerscontainer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");



// Hide all sections except the first one
[...document.querySelectorAll("section")].forEach(section => {
  if (section !== gameSetup) {
    section.style.display = "none";
  }
});

// Set the default values for theme, grid size, and number of players
let theme = "number";
let gridSize = "4x4";
let numPlayers = 1;

numberBtn.addEventListener("click", function() {
  theme = "number";
  iconBtn.classList.remove("selected");
  numberBtn.classList.add("selected");
});

iconBtn.addEventListener("click", function() {
  theme = "icon";
  numberBtn.classList.remove("selected");
  iconBtn.classList.add("selected");
});

player1Btn.addEventListener("click", function() {
  numPlayers = 1;
  player1Btn.classList.add("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.remove("selected");
});

players2Btn.addEventListener("click", function() {
  numPlayers = 2;
  player1Btn.classList.remove("selected");
  players2Btn.classList.add("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.remove("selected");
  player3.style.display = "none";
  player4.style.display = "none";

});

players3Btn.addEventListener("click", function() {
  numPlayers = 3;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.add("selected");
  players4Btn.classList.remove("selected");
  player3.style.display = "none";
});

players4Btn.addEventListener("click", function() {
  numPlayers = 4;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.add("selected");
});

fourByFourBtn.addEventListener("click", function() {
  gridSize = "4x4";
  fourByFourBtn.classList.add("selected");
  sixBySixBtn.classList.remove("selected");
});

sixBySixBtn.addEventListener("click", function() {
  gridSize = "6x6";
  fourByFourBtn.classList.remove("selected");
  sixBySixBtn.classList.add("selected");
});

startGameBtn.addEventListener("click", function() {
  setupGame(theme, gridSize, numPlayers);
});

function setupGame(theme, gridSize, numPlayers) {
  if ((theme === "number" || theme === "icon") && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )) {
    gameboard6x6Multi.style.display = "block";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "none";
  } else if ((theme === "number" || theme === "icon") && gridSize === "6x6" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "block";
    gameboard4x4Solo.style.display = "none";
  } else if((theme === "number" || theme === "icon") && gridSize === "4x4" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "block";
  } else if ((theme === "number" || theme === "icon") && gridSize === "4x4"&& (numPlayers === 2 || numPlayers === 3 || numPlayers === 4)) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "block";
    gameboard6x6Solo.style.display = "none";
    gameboard4x4Solo.style.display = "none";
  } else(alert("select a button"))
}

const numberValues = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
const iconValues  = ["fa-anchor","fa-bicycle","fa-bomb","fa-camera-retro","fa-diamond","fa-gavel","fa-heart","fa-leaf","fa-moon","fa-paper-plane-o","fa-paw","fa-rocket","fa-ship","fa-snowflake-o","fa-sun-o","fa-tree","fa-trophy", "fa-umbrella"];

if(gridSize === "4x4" && theme === "number" && (numPlayers === 1 || numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
  let numberValues4x4 = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
  // console.log(numberValues4x4);
  let cards = document.querySelectorAll(".card4x4_solo");
  cards.forEach((card, index) => {
    console.log(index);
    card.dataset.value = numberValues4x4[index];
  });
  console.log(cards);
} else if(gridSize === "6x6" && theme === "number" && (numPlayers === 1 || numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
  let numberValues6x6 = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
 

  let cards = document.querySelectorAll(".card6x6 solo");
  cards.forEach((card, index) => {
    card.dataset.value = numberValues6x6[index];
  });
} else if(gridSize === "4x4" && theme === "icon" && (numPlayers === 1 || numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
  let iconValues4x4 = iconValues.slice(0, 8).concat(iconValues.slice(0, 8)).sort(() => Math.random() - 0.5);
  let cards = document.querySelectorAll(".card4x4 multi");
  cards.forEach((card, index) => {
    card.dataset.value = iconValues4x4[index];
  });
} else if(gridSize === "6x6" && theme === "icon" && (numPlayers === 1 || numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
  let iconValues6x6 = iconValues.slice(0, 8).concat(iconValues.slice(0, 8)).sort(() => Math.random() - 0.5);
  let cards = document.querySelectorAll(".card6x6 multi");
  cards.forEach((card, index) => {
    card.dataset.value = iconValues6x6[index];
  });
}

let clickedCards = 0;
let firstCard, secondCard;

let cards = document.querySelectorAll(".card4x4_solo,.card4x4_multi");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (clickedCards < 2) {
      clickedCards++;

      if (clickedCards === 1) {
        firstCard = card;
        card.style.backgroundColor = "#BCCED9";
        card.textContent = card.dataset.value;
        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.justifyContent = "center";
        card.style.textAlign = "center";
        card.style.fontFamily = "Atkinson Hyperlegible";
        card.style.fontStyle = "normal";
        card.style.fontWeight = "700";
        card.style.fontSize = "56px";
        card.style.lineHeight = "69px";
        card.style.color = "#FCFCFC";
  
      } else {
        secondCard = card;
        card.style.backgroundColor = "#BCCED9";
        card.textContent = card.dataset.value;
        card.style.align = "center";
        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.justifyContent = "center";
        card.style.textAlign = "center";
        card.style.fontFamily = "Atkinson Hyperlegible";
        card.style.fontStyle = "normal";
        card.style.fontWeight = "700";
        card.style.fontSize = "56px";
        card.style.lineHeight = "69px";
        card.style.color = "#FCFCFC";

        if (firstCard.dataset.value === secondCard.dataset.value) {
          // Match
          secondCard.style.backgroundColor = "#FDA214";
          firstCard.style.backgroundColor = "#FDA214";
          firstCard.removeEventListener("click", null);
          secondCard.removeEventListener("click", null);
        } else {
          // No match
          setTimeout(() => {
            firstCard.style.backgroundColor = "";
            secondCard.style.backgroundColor = "";
            firstCard.textContent = ""; // remove the displayed dataset.value
            secondCard.textContent = ""; // remove the displayed dataset.value
          }, 200);
        }

        clickedCards = 0;
      }
    }
  });
});


const timecount_solo = document.querySelector('.timecount_solo');
const movescount_solo = document.querySelector('.movescount_solo');

// Set initial timer and moves count
let timer = 0;
let moves = 0;

// Update the timer every second
setInterval(() => {
  timer++;
  timecount_solo.textContent = `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`;
}, 1000);

// Update the moves count whenever a move is made
function incrementMoves() {
  moves++;
  movescount_solo.textContent = moves;
}

// Add an event listener to each card element to increment the moves count when clicked
cards.forEach(card => {
  card.addEventListener('click', incrementMoves);
});