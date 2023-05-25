const gameSetup = document.getElementById("gamesetup");
const gameboard4x4s = document.getElementsByClassName("gameboard4x4");
const gameboard6x6s = document.getElementsByClassName("gameboard6x6");
const number = 9;
const sampleRow4x4 = `
<div class="row4x4">
  <div id="card" class="card4x4"></div>
  <div id="card" class="card4x4"></div>
  <div id="card" class="card4x4"></div>
  <div id="card" class="card4x4"></div>
</div>
`
const sampleRow6x6 = `
<div class="row6x6">
  <div id="card" class="card6x6"></div>
  <div id="card" class="card6x6"></div>
  <div id="card" class="card6x6"></div>
  <div id="card" class="card6x6"></div>
  <div id="card" class="card6x6"></div>
  <div id="card" class="card6x6"></div>
</div>
`

const fillBoardWithRows = (container,row,numberOfRows = 1) => {
    for (let i = 0; i < numberOfRows; i++) {
      container.innerHTML += row;
    }
}
//rendering 4x4 board
fillBoardWithRows(gameboard4x4s[0],sampleRow4x4,4);
fillBoardWithRows(gameboard6x6s[0],sampleRow6x6,6);
// fillBoardWithRows(gameboard4x4s[1],sampleRow4x4,4);
// fillBoardWithRows(gameboard6x6s[1],sampleRow6x6,6);

// displaying the game main menu
  [...document.querySelectorAll("section")].forEach(section => {
    if (section !== gameSetup) {
      section.style.display = "none";
    }
  });

  // declaring variables
const fourByFourBtn = document.querySelector(".fourbyfour");
const sixBySixBtn = document.querySelector(".sixbysix");
const onePlayerBtn = document.querySelector(".oneplayer");
const twoPlayersBtn = document.querySelector(".twoplayers");
const threePlayersBtn = document.querySelector(".threeplayers");
const fourPlayersBtn = document.querySelector(".fourplayers");
const startGameBtn = document.getElementById('start_game_btn');
const timerMoves = document.getElementById('timer_moves');
const gameBoard4x4 = document.querySelector('.gameboard4x4');
const gameBoard6x6 = document.querySelector('.gameboard6x6');
const playersContainer = document.getElementById('players_container');
const gameStart = document.getElementById('gamestart');
const numberBtn = document.getElementById("number_btn");
const iconBtn = document.getElementById("icon_btn");
const newGameBtn = document.querySelector(".gameboard_header_right_newgame_btn");
const restartBtn = document.querySelector(".gameboard_header_right_restart_btn");


let theme = "number";
let gridSize = "4x4";
let numPlayers = 1;

// selecting buttons to display the gameSetup function
  numberBtn.addEventListener("click", function() {
    theme = "number";
    iconBtn.classList.remove("selected");
    numberBtn.classList.add("selected");
    updateGameBoard();
});

  iconBtn.addEventListener("click", function() {
    theme = "icon";
    numberBtn.classList.remove("selected");
    iconBtn.classList.add("selected");
    updateGameBoard();
});

  onePlayerBtn.addEventListener("click", function() {
    numPlayers = 1;
    onePlayerBtn.classList.add("selected");
    twoPlayersBtn.classList.remove("selected");
    threePlayersBtn.classList.remove("selected");
    fourPlayersBtn.classList.remove("selected");
});

  twoPlayersBtn.addEventListener("click", function() {
    numPlayers = 2;
    onePlayerBtn.classList.remove("selected");
    twoPlayersBtn.classList.add("selected");
    threePlayersBtn.classList.remove("selected");
    fourPlayersBtn.classList.remove("selected");
    player3.style.display = "none";
    player4.style.display = "none";
    players = [player1, player2,player3,player4].filter(player => player.style.display !== "none");
});

  threePlayersBtn.addEventListener("click", function() {
  numPlayers = 3;
  onePlayerBtn.classList.remove("selected");
  twoPlayersBtn.classList.remove("selected");
  threePlayersBtn.classList.add("selected");
  fourPlayersBtn.classList.remove("selected");
  player4.style.display = "none";
  players = [player1, player2,player3,player4].filter(player => player.style.display !== "none");
});

  fourPlayersBtn.addEventListener("click", function() {
    numPlayers = 4;
    onePlayerBtn.classList.remove("selected");
    twoPlayersBtn.classList.remove("selected");
    threePlayersBtn.classList.remove("selected");
    fourPlayersBtn.classList.add("selected");
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
    if (theme && gridSize && numPlayers) {
      setupGame(theme, gridSize, numPlayers);
    } else {
      alert("Please select a button");
    }
});

// Function to setup the game based on the selected options
function setupGame(theme, gridSize, numPlayers) {
  if (theme === "number" && gridSize === "4x4" && numPlayers === 1) {
      gameBoard6x6.style.display = "none";
      playersContainer.style.display = "none";

    } else if (theme === "icon" && gridSize === "4x4" && numPlayers === 1) {
      gameBoard6x6.style.display = "none";
      playersContainer.style.display = "none";

    } else if (theme === "number" && gridSize === "4x4" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
      gameBoard6x6.style.display = "none";
      timerMoves.style.display = "none";

    } else if (theme === "icon" && gridSize === "4x4" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
      gameBoard6x6.style.display = "none";
      timerMoves.style.display = "none";

    } else if (theme === "number" && gridSize === "6x6" && numPlayers === 1){
      gameBoard4x4.style.display = "none";
      playersContainer.style.display = "none";
          
    } else if (theme === "icon" && gridSize === "6x6" && numPlayers === 1) {
      gameBoard4x4.style.display = "none";
      playersContainer.style.display = "none";
        
    } else if (theme === "number" && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
      gameBoard4x4.style.display = "none";
      timerMoves.style.display = "none";
        
    } else if (theme === "icon" && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )){
      gameBoard4x4.style.display = "none";
      timerMoves.style.display = "none";
    }
   }            

// Add click event listener to the start game button
startGameBtn.addEventListener('click', () => {
  gameSetup.style.display = 'none';
  gameStart.style.display = 'block';
  setupGame();
  });

  // Newgame button click event
  newGameBtn.addEventListener("click", () => {
    gameStart.style.display = "none";
    location.reload();
  });

// Number values and icon values
const numberValues = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
const iconValues = ["fa-bolt","fa-bell","fa-music","fa-car","fa-star","fa-cloud","fa-cog","fa-globe","fa-tree","fa-flag","fa-flask","fa-heart","fa-home","fa-image","fa-gamepad","fa-key","fa-paw","fa-phone","fa-search","fa-server","fa-shopping-cart","fa-star","fa-thumbs-up","fa-trash","fa-user","fa-wrench"];

// Assigning shuffled and duplicated number and icon values with updateGaneBoard function
const updateGameBoard = () => {
  let cards4x4 = document.querySelectorAll(".card4x4");
  let cards6x6 = document.querySelectorAll(".card6x6");

  if (theme === "number") {
    // Shuffle and assign number values
    const shufflednumberValues4x4 = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
    cards4x4.forEach((card, index) => {
      card.dataset.value = shufflednumberValues4x4[index];
      // card.textContent = card.dataset.value;
    });

    const shufflednumberValues6x6 = numberValues.slice(12, 30).concat(numberValues.slice(12, 30)).sort(() => Math.random() - 0.5);
    cards6x6.forEach((card, index) => {
      card.dataset.value = shufflednumberValues6x6[index];
      // card.textContent = card.dataset.value;
    });
  } else if (theme === "icon") {
    // Shuffle and assign icon values
    const shuffledIconValues4x4 = iconValues.slice(1, 9).concat(iconValues.slice(1, 9)).sort(() => Math.random() - 0.5);
    cards4x4.forEach((card, index) => {
      let icon = document.createElement('i');
      icon.className = "fa " + shuffledIconValues4x4[index];
      card.innerHTML = ''; // Clear existing content
      card.appendChild(icon);
      card.dataset.value = "";
    });

    const shuffledIconValues6x6 = iconValues.slice(8,26).concat(iconValues.slice(8,26)).sort(() => Math.random() - 0.5);
    cards6x6.forEach((card, index) => {
      let icon = document.createElement('i');
      icon.className = "fa " + shuffledIconValues6x6[index];
      card.innerHTML = ''; // Clear existing content
      card.appendChild(icon);
      card.dataset.value = "";
    });
  }
}
updateGameBoard();

// declaring variables
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");

let players = [player1, player2, player3, player4].filter(player => player.style.display !== "none");
  let currentPlayer = 0;

  // a function to switch player
  function switchPlayer() {
    let previousPlayer = currentPlayer;
    if (previousPlayer < 0) {
      previousPlayer = sortedP - 1;
    }
    // Remove current player styling
    players[previousPlayer].classList.remove('currentplayer');
    players[previousPlayer].querySelector(".current_turn").style.visibility = "hidden";
    // Increment player
    currentPlayer++;
    if (currentPlayer >= players.length) {
      currentPlayer = 0;
    }
    // Add new current player styling
    players[currentPlayer].classList.add('currentplayer');
    players[currentPlayer].querySelector(".current_turn").style.visibility = "visible";
    }

// Game board logic
let clickedCards = 0;
let firstCard, secondCard;
let cards = document.querySelectorAll(".card4x4,.card6x6");

// check for the theme and assign function
cards.forEach(card => {
  card.addEventListener("click", () => {
    if (clickedCards < 2) {
      clickedCards++;

      if (theme === "icon") {
        iconCardClick(card);
      } else if (theme === "number") {
        numberCardClick(card);
      }
    }
  });
});

// Function to handle click for icon theme
const iconCardClick = (card) => {
  if (clickedCards === 1) {
    firstCard = card;
    card.querySelector("i").style.opacity = 1;
    card.style.backgroundColor = "#BCCED9";
  } else {
    secondCard = card;
    card.querySelector("i").style.opacity = 1;
    card.style.backgroundColor = "#BCCED9";

    if (firstCard.querySelector("i").className === secondCard.querySelector("i").className) {
      // Match
      firstCard.classList.add("matched-card");
      secondCard.classList.add("matched-card");
      let score = players[currentPlayer].querySelector(".score").textContent
      players[currentPlayer].querySelector(".score").textContent = parseInt(score) + 1;
      firstCard.style.backgroundColor = "#FDA214";
      secondCard.style.backgroundColor = "#FDA214";
      firstCard.removeEventListener("click", null);
      secondCard.removeEventListener("click", null);
      const matchedCards = document.querySelectorAll(".matched-card");
      if  ((gridSize === "4x4" && matchedCards.length === 16) || (gridSize ==="6x6" && matchedCards.length === 36)) {
        stopTimer();
        if (numPlayers === 1) {
          displayModalSolo();
        } else {
          showMultiplayerResultsModal(players);
        }
      }
    } else {
      // No match
      setTimeout(() => {
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        firstCard.querySelector("i").style.opacity = 0;
        secondCard.querySelector("i").style.opacity = 0;
        clickedCards = 0;
        switchPlayer();
      }, 200);
    }
    clickedCards = 0;
  }
};

// Function to handle click for number theme
const numberCardClick = (card) => {
  if (clickedCards === 1) {
    firstCard = card;
    card.textContent = card.dataset.value;
    card.style.backgroundColor = "#BCCED9";
  } else {
    secondCard = card;
    card.textContent = card.dataset.value;
    card.style.backgroundColor = "#BCCED9";

    if (firstCard.dataset.value === secondCard.dataset.value) {
      // Match
      firstCard.classList.add("matched-card");
      secondCard.classList.add("matched-card");
      let score = players[currentPlayer].querySelector(".score").textContent
      players[currentPlayer].querySelector(".score").textContent = parseInt(score) + 1;
      firstCard.style.backgroundColor = "#FDA214";
      secondCard.style.backgroundColor = "#FDA214";
      firstCard.removeEventListener("click", null);
      secondCard.removeEventListener("click", null);
      const matchedCards = document.querySelectorAll(".matched-card");
      if  ((gridSize === "4x4" && matchedCards.length === 16) || (gridSize ==="6x6" && matchedCards.length === 36)) {
        stopTimer();
        if (numPlayers === 1) {
          displayModalSolo();
        } else {
          showMultiplayerResultsModal(players);
        }
      }
    } else { 
      // No match
      setTimeout(() => {
        firstCard.style.backgroundColor = "";
        secondCard.style.backgroundColor = "";
        firstCard.textContent = ""; // remove the displayed dataset.value
        secondCard.textContent = ""; // remove the displayed dataset.value
        clickedCards = 0;
        switchPlayer();
      }, 200);
    }
    clickedCards = 0;
  }
};

const timeCount = document.querySelector(".timecount");
const movesCount = document.querySelector(".movescount");

// Set initial timer and moves count
let timer;
let moves = 0;
let time = 0;
let firstClick = false;

function startTimer() {
  timer = setInterval(() => {
    time++;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      timeCount.innerText = `${minutes}:${seconds < 10 ? "0": ""}${seconds}`;
      }, 1000);
    }

    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (firstClick) {
          return;
        } 
      firstClick = true;
      startTimer();
      });
    });

function stopTimer() {
  clearInterval(timer);
  }

// a function that updates the moves count whenever a move is made
function updateMoves() {
  moves++;
  movesCount.innerText = moves;
}

// Add an event listener to each card element to increment the moves count when clicked
cards.forEach(card => {
  card.addEventListener("click", updateMoves);
  });

// Restart button click event
  restartBtn.addEventListener("click", () => {
    stopTimer();
    updateGameBoard();
    // Reset all matched cards to their default state
    cards.forEach(card =>  {
      card.classList.remove("matched-card");
      card.style.backgroundColor = "";

      if (theme === "icon") {
        let icon = card.querySelector("i");
        if (icon) {
          icon.style.opacity = "0";
        }
      } else if (theme === "number") {
        card.textContent = "";
      }
   });
    // Reset the moves count and time count
    moves = 0;
    movesCount.innerText = moves;
    time = 0;
    timeCount.innerText = "0:00";
    // Reset the clicked cards
    clickedCards = 0;
    firstCard = null;
    secondCard = null;
    firstClick = false;

    players.forEach(player => {
      player.querySelector(".score").textContent = "0";
    });    
      currentPlayer = 0;
      players[currentPlayer].classList.add('currentplayer');
      players[currentPlayer].querySelector(".current_turn").style.visibility = "visible";
});

// declaring solo modal variables 
const modalSolo = document.getElementById("game-over-modal_solo");
const modalTime = document.getElementById("time");
const modalMove = document.getElementById("move");

// solo modal restart button 
const modalSoloRestartBtn = document.querySelector(".modal_restart_btn");
modalSoloRestartBtn.addEventListener("click", () => {
  restartBtn.click();
  modalSolo.style.display = "none";
});

// solo modal newgame button 
const modalSoloNewGameBtn = document.querySelector(".modal_newgame_btn");
modalSoloNewGameBtn.addEventListener("click", () => {
  newGameBtn.click();
  modalSolo.style.display = "none";
});

// Solo modal function
function displayModalSolo() {
  modalTime.innerText = timeCount.innerText;
  modalMove.textContent = movesCount.textContent;
  modalSolo.style.display = "block";
}

// multi modal newgame and restart button 
const modalMultiRestartBtn = document.getElementById("restart_btn_modal");
modalMultiRestartBtn.addEventListener("click", () => {
  restartBtn.click();
  document.getElementById("modal_multi").style.display = "none";
});

const modalMultiNewGameBtn = document.getElementById("newgame_btn_modal");
modalMultiNewGameBtn.addEventListener("click", () => {
  newGameBtn.click();
  document.getElementById("modal_multi").style.display = "none";
});
const modalTieRestartBtn = document.getElementById("restart_modal_btn");
modalTieRestartBtn.addEventListener("click", () => {
  restartBtn.click();
  document.getElementById("tie_modal_multi").style.display = "none";
});

const modalTieNewGameBtn = document.getElementById("newgame_modal_btn");
modalTieNewGameBtn.addEventListener("click", () => {
  newGameBtn.click();
  document.getElementById("tie_modal_multi").style.display = "none";
});

   // Multiplayer Modal function
   function updateStats(players) {
    return players.sort((a, b) => {
      return b.querySelector(".score").textContent - a.querySelector(".score").textContent;
    });
  }

  function showMultiplayerResultsModal(players) {
    const sortedPlayers = updateStats(players);
    let winnerTitle = document.getElementById("winner_title");
    let secondTitle = document.getElementById("second_title");
    let thirdTitle  = document.getElementById("third_title");
    let lastTitle = document.getElementById("last_title");
    let winner1TitleTie = document.getElementById("winner1_title_tie");
    let winner2TitleTie = document.getElementById("winner2_title_tie");
    let thirdTitleTie  = document.getElementById("third_title_tie");
    let lastTitleTie = document.getElementById("last_title_tie");
  
    // Update winner, second, third, and last stats
    if (sortedPlayers.length === 2) {
        document.getElementById("third").style.display = "none";
        document.getElementById("last").style.display = "none";
        document.getElementById("third_tie").style.display = "none";
        document.getElementById("last_tie").style.display = "none";

      if(sortedPlayers[0].querySelector(".score").textContent === sortedPlayers[1].querySelector(".score").textContent) {
        document.getElementById("winner1_stats_tie").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
        document.getElementById("winner2_stats_tie").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
        winner1TitleTie.textContent = `${sortedPlayers[0].querySelector(".allplayers").textContent} (Winner!)`;
        winner2TitleTie.textContent = `${sortedPlayers[1].querySelector(".allplayers").textContent} (Winner!)`;

        const modalMultiTie = document.getElementById("tie_modal_multi");
        modalMultiTie.style.display = "block";

        } else {
          winnerTitle.textContent = `${sortedPlayers[0].querySelector(".allplayers").textContent} (Winner!)`;
          document.getElementById("winner_stats").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
      
          secondTitle.textContent = sortedPlayers[1].querySelector(".allplayers").textContent;
          document.getElementById("second_stats").textContent = `${sortedPlayers[1].querySelector(".score").textContent} Pairs`;
          
          document.querySelector(".who_wins").textContent = `${sortedPlayers[0].querySelector('.allplayers').textContent} Wins!`;
          
          const modalMulti = document.getElementById("modal_multi");
          modalMulti.style.display = "block";
        }
      }
  
    if (sortedPlayers.length === 3) {
        document.getElementById("last").style.display = "none";
        document.getElementById("last_tie").style.display = "none";

      if(sortedPlayers[0].querySelector(".score").textContent === sortedPlayers[1].querySelector(".score").textContent) {
        document.getElementById("winner1_stats_tie").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
        document.getElementById("winner2_stats_tie").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
        winner1TitleTie.textContent = `${sortedPlayers[0].querySelector(".allplayers").textContent} (Winner!)`;
        winner2TitleTie.textContent = `${sortedPlayers[1].querySelector(".allplayers").textContent} (Winner!)`;
     
        thirdTitleTie.textContent = sortedPlayers[2].querySelector(".allplayers").textContent;
        document.getElementById("third_stats_tie").textContent = `${sortedPlayers[2].querySelector(".score").textContent} Pairs`;

        const modalMultiTie = document.getElementById("tie_modal_multi");
        modalMultiTie.style.display = "block";

        } else {
          winnerTitle.textContent = `${sortedPlayers[0].querySelector(".allplayers").textContent} (Winner!)`;
          document.getElementById("winner_stats").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
      
          secondTitle.textContent = sortedPlayers[1].querySelector(".allplayers").textContent;
          document.getElementById("second_stats").textContent = `${sortedPlayers[1].querySelector(".score").textContent} Pairs`;

          thirdTitle.textContent = sortedPlayers[2].querySelector(".allplayers").textContent;
          document.getElementById("third_stats").textContent = `${sortedPlayers[2].querySelector(".score").textContent} Pairs`;
          
          document.querySelector(".who_wins").textContent = `${sortedPlayers[0].querySelector('.allplayers').textContent} Wins!`;
          
          const modalMulti = document.getElementById("modal_multi");
          modalMulti.style.display = "block";
        }
      }  
    if (sortedPlayers.length === 4) {

      if(sortedPlayers[0].querySelector(".score").textContent === sortedPlayers[1].querySelector(".score").textContent) {
        document.getElementById("winner1_stats_tie").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
        document.getElementById("winner2_stats_tie").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
        winner1TitleTie.textContent = `${sortedPlayers[0].querySelector(".allplayers").textContent} (Winner!)`;
        winner2TitleTie.textContent = `${sortedPlayers[1].querySelector(".allplayers").textContent} (Winner!)`;
     
        thirdTitleTie.textContent = sortedPlayers[2].querySelector(".allplayers").textContent;
        document.getElementById("third_stats_tie").textContent = `${sortedPlayers[2].querySelector(".score").textContent} Pairs`;

        lastTitleTie.textContent = sortedPlayers[3].querySelector(".allplayers").textContent;
        document.getElementById("last_stats_tie").textContent = `${sortedPlayers[3].querySelector(".score").textContent} Pairs`;

        const modalMultiTie = document.getElementById("tie_modal_multi");
        modalMultiTie.style.display = "block";

        } else {
        winnerTitle.textContent = `${sortedPlayers[0].querySelector(".allplayers").textContent} (Winner!)`;
        document.getElementById("winner_stats").textContent = `${sortedPlayers[0].querySelector(".score").textContent} Pairs`;
    
        secondTitle.textContent = sortedPlayers[1].querySelector(".allplayers").textContent;
        document.getElementById("second_stats").textContent = `${sortedPlayers[1].querySelector(".score").textContent} Pairs`;

        thirdTitle.textContent = sortedPlayers[2].querySelector(".allplayers").textContent;
        document.getElementById("third_stats").textContent = `${sortedPlayers[2].querySelector(".score").textContent} Pairs`;
    
        lastTitle.textContent = sortedPlayers[3].querySelector(".allplayers").textContent;
        document.getElementById("last_stats").textContent = `${sortedPlayers[3].querySelector(".score").textContent} Pairs`;
      
        document.querySelector(".who_wins").textContent = `${sortedPlayers[0].querySelector('.allplayers').textContent} Wins!`;

        const modalMulti = document.getElementById("modal_multi");
        modalMulti.style.display = "block";
        }  
      }
    }  

// menu modal 
const menuModal = document.getElementById("menu_modal");
const menuRestartBtn = document.getElementById("menu_restart_btn");
const menuNewGameBtn = document.getElementById("menu_newgame_btn");
const menuResumeGameBtn = document.getElementById("menu_resumegame_btn");
const menuBtn = document.querySelector(".menu_btn");

// menu buttons
menuBtn.addEventListener("click", () => {
  stopTimer();
  let gameState = {
    time: time,
    moves: moves,
  };
  localStorage.setItem("gameState", JSON.stringify(gameState));
  storedScore = getCurrentScore();
  menuModal.style.display = "block";
})

// modal restart button
menuRestartBtn.addEventListener("click", () => {
    restartBtn.click();
    menuModal.style.display = "none";
})

// modal newgame button 
menuNewGameBtn.addEventListener("click", ()=>{
  location.reload();
})

// modal resume game button 
menuResumeGameBtn.addEventListener("click", function() {
  // Retrieve the saved game state from localStorage
  const savedGameState = JSON.parse(localStorage.getItem("gameState"));
  if (savedGameState) {
    // If a saved game state exists, use it to restore the game
    time = savedGameState.time;
    moves = savedGameState.moves;
    localStorage.removeItem("gameState");
    menuModal.style.display = "none";
    startTimer();
  }
  else {  getCurrentScore(storedScore); // set stored score as current score
  menuModal.style.display = "none"}
  })
  let storedScore = 0;
  function getCurrentScore() {
    return Number(document.querySelector(".score").textContent);
  }