// declaring variables
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
const player14x4 = document.getElementById("player1_4x4");
const player24x4 = document.getElementById("player2_4x4");
const player34x4 = document.getElementById("player3_4x4");
const player44x4 = document.getElementById("player4_4x4");
const player16x6 = document.getElementById("player16x6");
const player26x6 = document.getElementById("player26x6");
const player36x6 = document.getElementById("player36x6");
const player46x6 = document.getElementById("player46x6");
const restartBtn1 = document.querySelector(".gameboard_header_right_restart_btn1");
const restartBtn2 = document.querySelector(".gameboard_header_right_restart_btn2");
const restartBtn3 = document.querySelector(".gameboard_header_right_restart_btn3");
const restartBtn4 = document.querySelector(".gameboard_header_right_restart_btn4");
const newGameBtn1 = document.querySelector(".gameboard_header_right_newgame_btn1");
const newGameBtn2 = document.querySelector(".gameboard_header_right_newgame_btn2");
const newGameBtn3= document.querySelector(".gameboard_header_right_newgame_btn3");
const newGameBtn4 = document.querySelector(".gameboard_header_right_newgame_btn4");
const currentTurn = document.querySelectorAll(".current_turn");
const modalTime = document.getElementById("time");
const modalMove = document.getElementById("move");
const modalSolo = document.getElementById("game-over-modal_solo");
let modalRestartBtn = document.querySelector(".modal_restart_btn");
let modalNewGameBtn = document.querySelector(".modal_newgame_btn");

// Number values and icon value
const numberValues = [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
const iconValues = ["fa-bolt","fa-bell","fa-shield","fa-music","fa-car","fa-star","fa-check","fa-cloud","fa-cog","fa-comment","fa-envelope","fa-file","fa-flag","fa-folder","fa-globe","fa-heart","fa-home","fa-image","fa-info","fa-key","fa-lock","fa-map","fa-phone","fa-play","fa-plus","fa-question","fa-search","fa-server","fa-shopping-cart","fa-signal","fa-star","fa-tag","fa-thumbs-up","fa-times","fa-trash","fa-user","fa-video","fa-wrench"];


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

// selecting buttons to display the gameSetup function
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

players2Btn.addEventListener("click", function() {
  numPlayers = 2;
  player1Btn.classList.remove("selected");
  players2Btn.classList.add("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.remove("selected");
  player36x6.style.display = "none";
  player46x6.style.display = "none";
});
players2Btn.addEventListener("click", function() {
  numPlayers = 2;
  player1Btn.classList.remove("selected");
  players2Btn.classList.add("selected");
  players3Btn.classList.remove("selected");
  players4Btn.classList.remove("selected");
  player34x4.style.display = "none";
  player44x4.style.display = "none";
});

players3Btn.addEventListener("click", function() {
  numPlayers = 3;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.add("selected");
  players4Btn.classList.remove("selected");
  player4.style.display = "none";
});
players3Btn.addEventListener("click", function() {
  numPlayers = 3;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.add("selected");
  players4Btn.classList.remove("selected");
  player44x4.style.display = "none";
});

players3Btn.addEventListener("click", function() {
  numPlayers = 3;
  player1Btn.classList.remove("selected");
  players2Btn.classList.remove("selected");
  players3Btn.classList.add("selected");
  players4Btn.classList.remove("selected");
  player46x6.style.display = "none";
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
  if (theme && gridSize && numPlayers) {
    setupGame(theme, gridSize, numPlayers);
  } else {
    alert("Please select a button");
  }
});

// click first and second card,checking for match or not
let clickedCards = 0;
let firstCard, secondCard;
let cards = document.querySelectorAll(".card4x4_solo,.card4x4_multi,.card6x6_multi,.card6x6_solo");

// display gameboard according the selected theme,gridsize and number of players
function setupGame(theme, gridSize, numPlayers) {
  if (theme === "number" && gridSize === "6x6" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "block";
    gameboard4x4Solo.style.display = "none";
    const numberValues6x6Solo = numberValues.slice(0, 18).concat(numberValues.slice(0, 18)).sort(() => Math.random() - 0.5);
    const numberCards6x6Solo = document.querySelectorAll(".card6x6_solo");
    numberCards6x6Solo.forEach((card, index) => {
    card.dataset.value = numberValues6x6Solo[index];
    });

    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (clickedCards < 2) {
          clickedCards++;
    
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
              firstCard.style.backgroundColor = "#FDA214";
              secondCard.style.backgroundColor = "#FDA214";
              firstCard.removeEventListener("click", null);
              secondCard.removeEventListener("click", null);
              const matchedCards = document.querySelectorAll(".matched-card");
              if (matchedCards.length === 36) {
                stopTimer();
                displayModalSolo6x6();
            }
            } else {
              // No match
              setTimeout(() => {
                firstCard.style.backgroundColor = "";
                secondCard.style.backgroundColor = "";
                firstCard.textContent = ""; // remove the displayed dataset.value
                secondCard.textContent = ""; // remove the displayed dataset.value
                clickedCards = 0;
              }, 200);
            }
    
            clickedCards = 0;
          }
        }
      });
    });
    restartBtn2.addEventListener("click", () => {
      stopTimer()
      const numberValues6x6Solo = numberValues.slice(0, 18).concat(numberValues.slice(0, 18)).sort(() => Math.random() - 0.5);
      const numberCards6x6Solo = document.querySelectorAll(".card6x6_solo");
      numberCards6x6Solo.forEach((card, index) => {
      card.dataset.value = numberValues6x6Solo[index];
    });
      // Reset all matched cards to their default state
      cards.forEach(card => {
        card.classList.remove("matched-card");
        card.style.backgroundColor = "";
        card.textContent = ""; 
      // Reset the moves count
      moves = 0;
      movesCount6x6.innerText = moves;
      // Reset the timer
      time = 0;
      timeCount6x6.innerText = "0:00";
      // Reset the clicked cards
      clickedCards = 0;
      firstCard = null;
      secondCard = null;
      firstClick = false;
    });
  });

  } else if (theme === "icon" && gridSize === "6x6" && numPlayers === 1) {
    gameboard6x6Multi.style.display = "none";
    gameSetup.style.display = "none";
    gameboard4x4Multi.style.display = "none";
    gameboard6x6Solo.style.display = "block";
    gameboard4x4Solo.style.display = "none";
    const iconValues6x6Solo = iconValues.slice(0, 18).concat(iconValues.slice(0, 18)).sort(() => Math.random() - 0.5);
    const iconCards6x6Solo = document.querySelectorAll(".card6x6_solo");
    iconCards6x6Solo.forEach((card, index) => {
    const icon3 = document.createElement('i');
    icon3.className = "fa " + iconValues6x6Solo[index];
    card.appendChild(icon3);
    });

    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (clickedCards < 2) {
          clickedCards++;
    
          if (clickedCards === 1) {
            firstCard = card;
            firstCard.querySelector("i").style.opacity = 1;
            card.style.backgroundColor = "#BCCED9";
          } else {
            secondCard = card;
            secondCard.querySelector("i").style.opacity = 1;
            card.style.backgroundColor = "#BCCED9";
           
            if (firstCard.querySelector("i").className === secondCard.querySelector("i").className) {
              // Match
              firstCard.classList.add("matched-card");
              secondCard.classList.add("matched-card");
              firstCard.style.backgroundColor = "#FDA214";
              secondCard.style.backgroundColor = "#FDA214";
              firstCard.removeEventListener("click", null);
              secondCard.removeEventListener("click", null);
              const matchedCards = document.querySelectorAll(".matched-card");
              if (matchedCards.length === 36) {
                stopTimer();
                displayModalSolo6x6();
            }
            } else {
              // No match
              setTimeout(() => {
                firstCard.style.backgroundColor = "";
                secondCard.style.backgroundColor = "";
                firstCard.querySelector("i").style.opacity = 0;
                secondCard.querySelector("i").style.opacity = 0;
                clickedCards = 0;
              }, 200);
            }
            clickedCards = 0;
          }
        }
      });
    });
    restartBtn2.addEventListener("click", () => {
      stopTimer()
      // Shuffle the icon values array using the Fisher-Yates shuffle algorithm
      for (let i = iconValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [iconValues[i], iconValues[j]] = [iconValues[j], iconValues[i]];
      }
      // Use the shuffled array to create the icon values for the cards
      const iconValues6x6Solo = iconValues.slice(9, 17).concat(iconValues.slice(9, 17));
      // Set the icons on the cards using the shuffled icon values
      const iconCards6x6Solo = document.querySelectorAll(".card6x6_solo");
      iconCards6x6Solo.forEach((card, index) => {
        const icon3 = document.createElement('i');
        icon3.className = "fa " + iconValues6x6Solo[index];
        card.innerHTML = "";
        card.appendChild(icon3);
      });
      // Reset all matched cards to their default state
      cards.forEach(card =>  {
        card.classList.remove("matched-card");
        card.style.backgroundColor = "";
        let icon = card.querySelector("i");
          if(icon) {
            icon.style.opacity = "0";
      }; });
      // Reset the moves count
      moves = 0;
      movesCount6x6.innerText = moves;
      // Reset the timer
      // stopTimer();
      time = 0;
      timeCount6x6.innerText = "0:00";
      // Reset the clicked cards
      clickedCards = 0;
      firstCard = null;
      secondCard = null;
      firstClick = false;
    });
    
  } else if(theme === "icon" && gridSize === "4x4" && numPlayers === 1) {
      gameboard6x6Multi.style.display = "none";
      gameSetup.style.display = "none";
      gameboard4x4Multi.style.display = "none";
      gameboard6x6Solo.style.display = "none";
      gameboard4x4Solo.style.display = "block";
      const iconValues4x4Solo = iconValues.slice(0, 8).concat(iconValues.slice(0, 8)).sort(() => Math.random() - 0.5);
      const iconCards4x4Solo = document.querySelectorAll(".card4x4_solo");
      iconCards4x4Solo.forEach((card, index) => {
      const icon = document.createElement('i');
      icon.className = "fa " + iconValues4x4Solo[index];
      card.appendChild(icon);
      });

      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (clickedCards < 2) {
            clickedCards++;
      
            if (clickedCards === 1) {
              firstCard = card;
              firstCard.querySelector("i").style.opacity = 1;
              card.style.backgroundColor = "#BCCED9";
            } else {
              secondCard = card;
              secondCard.querySelector("i").style.opacity = 1;
              card.style.backgroundColor = "#BCCED9";
             
              if (firstCard.querySelector("i").className === secondCard.querySelector("i").className) {
                // Match
                firstCard.classList.add("matched-card");
                secondCard.classList.add("matched-card");
                firstCard.style.backgroundColor = "#FDA214";
                secondCard.style.backgroundColor = "#FDA214";
                firstCard.removeEventListener("click", null);
                secondCard.removeEventListener("click", null);
                const matchedCards = document.querySelectorAll(".matched-card");
                if (matchedCards.length === 16) {
                  stopTimer();
                  displayModalSolo();
              }
              } else {
                // No match
                setTimeout(() => {
                  firstCard.style.backgroundColor = "";
                  secondCard.style.backgroundColor = "";
                  firstCard.querySelector("i").style.opacity = 0;
                  secondCard.querySelector("i").style.opacity = 0;
                  clickedCards = 0;
                }, 200);
              }
              clickedCards = 0;
            }
          }
        });
      });
      restartBtn1.addEventListener("click", () => {
        stopTimer()
         // Shuffle the icon values array using the Fisher-Yates shuffle algorithm
        for (let i = iconValues.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [iconValues[i], iconValues[j]] = [iconValues[j], iconValues[i]];
        }
        // Use the shuffled array to create the icon values for the cards
        const iconValues4x4Solo = iconValues.slice(9, 17).concat(iconValues.slice(9, 17));
        // Set the icons on the cards using the shuffled icon values
        const iconCards4x4Solo = document.querySelectorAll(".card4x4_solo");
        iconCards4x4Solo.forEach((card, index) => {
          const icon = document.createElement('i');
          icon.className = "fa " + iconValues4x4Solo[index];
          card.innerHTML = "";
          card.appendChild(icon);
        });
        // Reset all matched cards to their default state
        cards.forEach(card=> {
          card.classList.remove("matched-card");
          card.querySelector("i").style.opacity = 0;
          card.style.backgroundColor = "";

          moves = 0;
          movesCount.innerText = moves;
          // Reset the timer
          time = 0;
          timeCount.innerText = "0:00";
          // Reset the clicked cards
          clickedCards = 0;
          firstCard = null;
          secondCard = null;
          firstClick = false;
      });     
          	
      });
  } else if(theme === "number" && gridSize === "4x4" && numPlayers === 1) {
      gameboard6x6Multi.style.display = "none";
      gameSetup.style.display = "none";
      gameboard4x4Multi.style.display = "none";
      gameboard6x6Solo.style.display = "none";
      gameboard4x4Solo.style.display = "block";
      const numberValues4x4Solo = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
      const numberCards4x4Solo = document.querySelectorAll(".card4x4_solo");
      numberCards4x4Solo.forEach((card, index) => {
      card.dataset.value = numberValues4x4Solo[index];
      });

      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (clickedCards < 2) {
            clickedCards++;
      
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
                firstCard.style.backgroundColor = "#FDA214";
                secondCard.style.backgroundColor = "#FDA214";
                firstCard.removeEventListener("click", null);
                secondCard.removeEventListener("click", null);
                  const matchedCards = document.querySelectorAll(".matched-card");
                  if (matchedCards.length === 16) {
                    stopTimer();
                    displayModalSolo();
                }
              }
              else {
                // No match
                setTimeout(() => {
                  firstCard.style.backgroundColor = "";
                  secondCard.style.backgroundColor = "";
                  firstCard.textContent = ""; // remove the displayed dataset.value
                  secondCard.textContent = ""; // remove the displayed dataset.value
                  clickedCards = 0;
                }, 200);
              }
              clickedCards = 0;
            }
          }
        });
      });
      restartBtn1.addEventListener("click", () => {
        stopTimer()
        const numberValues4x4Solo = numberValues.slice(0, 8).concat(numberValues.slice(0, 8)).sort(() => Math.random() - 0.5);
        const numberCards4x4Solo = document.querySelectorAll(".card4x4_solo");
        numberCards4x4Solo.forEach((card, index) => {
        card.dataset.value = numberValues4x4Solo[index];
      });
        // Reset all matched cards to their default state
        cards.forEach(card => {
          card.classList.remove("matched-card");
          card.style.backgroundColor = "";
          card.textContent = "";
      });
        // Reset the moves count
        moves = 0;
        movesCount.innerText = moves;
        // Reset the timer
        time = 0;
        timeCount.innerText = "0:00";
        // Reset the clicked cards
        clickedCards = 0;
        firstCard = null;
        secondCard = null;
        firstClick = false;
      });
  } else if(theme === "number" && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )) {
      gameboard6x6Multi.style.display = "block";
      gameSetup.style.display = "none";
      gameboard4x4Multi.style.display = "none";
      gameboard6x6Solo.style.display = "none";
      gameboard4x4Solo.style.display = "none";
      const numberValues6x6Multi = numberValues.slice(18, 36).concat(numberValues.slice(18, 36)).sort(() => Math.random() - 0.5);
      const numberCards6x6Multi = document.querySelectorAll( ".card6x6_multi");
      numberCards6x6Multi.forEach((card, index) => {
      card.dataset.value = numberValues6x6Multi[index];
      });

      let players = [player16x6, player26x6, player36x6, player46x6].filter(player => player.style.display !== "none");
      let currentPlayer = 0;

      function switchPlayer() {
        let previousPlayer = currentPlayer;
        if (previousPlayer < 0) {
          previousPlayer = players.length - 1;
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

      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (clickedCards < 2) {
            clickedCards++;
      
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
              } else {
                // No match
                setTimeout(() => {
                  firstCard.style.backgroundColor = "";
                  secondCard.style.backgroundColor = "";
                  firstCard.textContent = ""; 
                  secondCard.textContent = "";  
                  clickedCards = 0;
                  switchPlayer();
                }, 200);
              }
      
              clickedCards = 0;
            }
          }
        });
      });
      restartBtn4.addEventListener("click", () => {
        const numberValues6x6Multi = numberValues.slice(18, 36).concat(numberValues.slice(18, 36)).sort(() => Math.random() - 0.5);
        const numberCards6x6Multi = document.querySelectorAll( ".card6x6_multi");
        numberCards6x6Multi.forEach((card, index) => {
        card.dataset.value = numberValues6x6Multi[index];
        });
        // Reset all matched cards to their default state
        cards.forEach(card => {
          card.classList.remove("matched-card");
          card.style.backgroundColor = "";
          // cards.querySelector("i").style.opacity = 0;
          card.textContent = "";
        });
        // Reset the clicked cards
        clickedCards = 0;
        firstCard = null;
        secondCard = null;
        // Reset the score
        players.forEach(player => {
          player.querySelector(".score").textContent = 0;
        });
      });      
  } else if((theme === "icon") && gridSize === "6x6" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4 )) {
      gameboard6x6Multi.style.display = "block";
      gameSetup.style.display = "none";
      gameboard4x4Multi.style.display = "none";
      gameboard6x6Solo.style.display = "none";
      gameboard4x4Solo.style.display = "none";
      const iconValues6x6Multi = iconValues.slice(18, 36).concat(iconValues.slice(18, 36)).sort(() => Math.random() - 0.5);
      const iconCards6x6Multi = document.querySelectorAll(".card6x6_multi");
      iconCards6x6Multi.forEach((card, index) => {
      const icon4 = document.createElement('i');
      icon4.className = "fa " + iconValues6x6Multi[index];
      card.appendChild(icon4);
      });

      let players = [player16x6,player26x6,player36x6,player46x6].filter(player => player.style.display !== "none");
      let currentPlayer = 0;

      function switchPlayer() {
        let previousPlayer = currentPlayer;
        if (previousPlayer < 0) {
          previousPlayer = players.length - 1;
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
      
      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (clickedCards < 2) {
            clickedCards++;
      
            if (clickedCards === 1) {
              firstCard = card;
              firstCard.querySelector("i").style.opacity = 1;
              card.style.backgroundColor = "#BCCED9";
            } else {
              secondCard = card;
              secondCard.querySelector("i").style.opacity = 1;
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
              } 
              else {
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
          }
        });
      });
      restartBtn4.addEventListener("click", () => {
         // Shuffle the icon values array using the Fisher-Yates shuffle algorithm
        for (let i = iconValues.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [iconValues[i], iconValues[j]] = [iconValues[j], iconValues[i]];
        }
        // Use the shuffled array to create the icon values for the cards
        const iconValues6x6Multi = iconValues.slice(9, 17).concat(iconValues.slice(9, 17));
        // Set the icons on the cards using the shuffled icon values
        const iconCards6x6Multi = document.querySelectorAll(".card6x6_multi");
        iconCards6x6Multi.forEach((card, index) => {
          const icon4 = document.createElement('i');
          icon4.className = "fa " + iconValues6x6Multi[index];
          card.innerHTML = "";
          card.appendChild(icon4);
        });
        players[currentPlayer].classList.remove('currentplayer');
        players[currentPlayer].querySelector(".current_turn").style.visibility = "hidden";
  
        cards.forEach(card => {
          firstCard.classList.add("matched-card");
          secondCard.classList.add("matched-card");
          card.style.backgroundColor = "";
          let icon = card.querySelector("i");
          if(icon){
            icon.style.opacity = 0;
          }
        });
        players.forEach(player => {
          player.querySelector(".score").textContent = "0";
        });
        currentPlayer = 0;
        players[currentPlayer].classList.add('currentplayer');
        players[currentPlayer].querySelector(".current_turn").style.visibility = "visible";

      });
  } else if (theme === "icon" && gridSize === "4x4" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4)) {
      gameboard6x6Multi.style.display = "none";
      gameSetup.style.display = "none";
      gameboard4x4Multi.style.display = "block";
      gameboard6x6Solo.style.display = "none";
      gameboard4x4Solo.style.display = "none";
      const iconValues4x4Multi = iconValues.slice(9, 17).concat(iconValues.slice(9, 17)).sort(() => Math.random() - 0.5);
      const iconCards4x4Multi = document.querySelectorAll(".card4x4_multi");
      iconCards4x4Multi.forEach((card, index) => {
      const icon2 = document.createElement('i');
      icon2.className = "fa " + iconValues4x4Multi[index];
      card.appendChild(icon2);
      });

      let players = [player14x4,player24x4,player34x4,player44x4].filter(player => player.style.display !== "none");
      let currentPlayer = 0;

      function switchPlayer() {
        let previousPlayer = currentPlayer;
        if (previousPlayer < 0) {
          previousPlayer = players.length - 1;
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

      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (clickedCards < 2) {
            clickedCards++;
      
            if (clickedCards === 1) {
              firstCard = card;
              firstCard.querySelector("i").style.opacity = 1;
              card.style.backgroundColor = "#BCCED9";
            } else {
              secondCard = card;
              secondCard.querySelector("i").style.opacity = 1;
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
          }
        });
      });
      restartBtn3.addEventListener("click", () => {
        // Shuffle the icon values array using the Fisher-Yates shuffle algorithm
        for (let i = iconValues.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [iconValues[i], iconValues[j]] = [iconValues[j], iconValues[i]];
        }
        // Use the shuffled array to create the icon values for the cards
        const iconValues4x4Multi = iconValues.slice(9, 17).concat(iconValues.slice(9, 17));
        // Set the icons on the cards using the shuffled icon values
        const iconCards4x4Multi = document.querySelectorAll(".card4x4_multi");
        iconCards4x4Multi.forEach((card, index) => {
          const icon2 = document.createElement('i');
          icon2.className = "fa " + iconValues4x4Multi[index];
          card.innerHTML = "";
          card.appendChild(icon2);
        });
        // Reset all matched cards to their default state
        players[currentPlayer].classList.remove('currentplayer');
        players[currentPlayer].querySelector(".current_turn").style.visibility = "hidden";

        cards.forEach(cards => {
          firstCard.classList.add("matched-card");
          secondCard.classList.add("matched-card");
          cards.style.backgroundColor = "";
          let icon = cards.querySelector("i");
          if(icon){
            icon.style.opacity = 0;
          }
        });
        // Reset the clicked cards
        clickedCards = 0;
        firstCard = null;
        secondCard = null;

        players.forEach(player => {
          player.querySelector(".score").textContent = "0";
        });
        currentPlayer = 0;
        players[currentPlayer].classList.add('currentplayer');
        players[currentPlayer].querySelector(".current_turn").style.visibility = "visible";
      });

  } else if (theme === "number" && gridSize === "4x4" && (numPlayers === 2 || numPlayers === 3 || numPlayers === 4)) {
      gameboard6x6Multi.style.display = "none";
      gameSetup.style.display = "none";
      gameboard4x4Multi.style.display = "block";
      gameboard6x6Solo.style.display = "none";
      gameboard4x4Solo.style.display = "none";
      const numberValues4x4Multi = numberValues.slice(9, 17).concat(numberValues.slice(9, 17)).sort(() => Math.random() - 0.5);
      const numberCards4x4Multi = document.querySelectorAll( ".card4x4_multi");
      numberCards4x4Multi.forEach((card, index) => {
      card.dataset.value = numberValues4x4Multi[index];
      });

      let players = [player14x4,player24x4,player34x4,player44x4].filter(player => player.style.display !== "none");
      let currentPlayer = 0;

      function switchPlayer() {
        let previousPlayer = currentPlayer;
        if (previousPlayer < 0) {
          previousPlayer = players.length - 1;
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
      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (clickedCards < 2) {
            clickedCards++;
      
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
          }
        });
      });     
    restartBtn3.addEventListener("click", () => {
      // Reset all matched cards to their default state
      players[currentPlayer].classList.remove('currentplayer');
      players[currentPlayer].querySelector(".current_turn").style.visibility = "hidden";
     
      const numberValues4x4Multi = numberValues.slice(9, 17).concat(numberValues.slice(9, 17)).sort(() => Math.random() - 0.5);
      const numberCards4x4Multi = document.querySelectorAll( ".card4x4_multi");
      numberCards4x4Multi.forEach((card, index) => {
      card.dataset.value = numberValues4x4Multi[index];
      
      cards.forEach(card => {
        card.classList.remove("matched-card");
        card.style.backgroundColor = "";
        card.textContent = "";
    });
    });
      clickedCards = 0;
      firstCard = null;
      secondCard = null; 

      players.forEach(player => {
        player.querySelector(".score").textContent = "0";
  });    
        currentPlayer = 0;
        players[currentPlayer].classList.add('currentplayer');
        players[currentPlayer].querySelector(".current_turn").style.visibility = "visible";
  });
}
}



// the time and move set up
      const timeCount = document.querySelector(".timecount_solo");
      const timeCount6x6 = document.querySelector(".timecount_solo6x6");
      const movesCount = document.querySelector(".movescount_solo");
      const movesCount6x6 = document.querySelector(".movescount_solo6x6");

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
          timeCount6x6.innerText = `${minutes}:${seconds < 10 ? "0": ""}${seconds}`;
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
      // Update the moves count whenever a move is made
      function updateMoves() {
        moves++;
        movesCount.innerText = moves;
        movesCount6x6.innerText = moves;
      }
      // Add an event listener to each card element to increment the moves count when clicked
      cards.forEach(card => {
        card.addEventListener("click", updateMoves);
      });
      // newgame button click
      newGameBtn1.addEventListener("click", () => {
        location.reload();
      });
      newGameBtn2.addEventListener("click", () => {
        location.reload();
      });
      newGameBtn3.addEventListener("click", () => {
        location.reload();
      });
      newGameBtn4.addEventListener("click", () => {
        location.reload();
      });

      // modal function
      function displayModalSolo() {
        modalTime.innerText = timeCount.innerText;
        modalTime.innerText = timeCount6x6.innerText;
        modalMove.innerText = movesCount.innerText;
        modalMove.innerText = movesCount6x6.innerText;
        modalSolo.style.display = "block";
        modalRestartBtn.addEventListener("click", () => {
          restartBtn1.click();
          modalSolo.style.display = "none";
        });
        modalNewGameBtn.addEventListener("click", () => {
          location.reload();
        })
      }
      function displayModalSolo6x6() {
        modalTime.innerText = timeCount6x6.innerText;
        modalMove.innerText = movesCount6x6.innerText;
        modalSolo.style.display = "block";
        modalRestartBtn.addEventListener("click", () => {
          restartBtn2.click();
          modalSolo.style.display = "none";
        });
        modalNewGameBtn.addEventListener("click", () => {
          location.reload();
        })
      }

    ;