const main = () => {

  let scores = {
    team1: [],
    team2: []
  };

  let storage = localStorage;

  scores.team1.push(localStorage.getItem("h1T1"));
  scores.team2.push(localStorage.getItem("h1T2"));
  scores.team1.push(localStorage.getItem("h2T1"));
  scores.team2.push(localStorage.getItem("h2T2"));

  console.log(scores);

  // Initialize the current scores.
  let teamOneScore = 0;
  let teamTwoScore = 0;

  let teamOneName = "Team 1";
  let teamTwoName = "Team 2";

  let gameScoreHTML = "";
  let half = 1;

  // Selecting the score and name elements.
  let teamOneScoreDisplay = document.querySelector('.team1-score');
  let teamTwoScoreDisplay = document.querySelector('.team2-score');

  let teamOneNameDisplay = document.querySelector('.team1-name');
  let teamTwoNameDisplay = document.querySelector('.team2-name');

  let currentNameUpdateOne = document.querySelector('.new-team1-name');
  let currentNameUpdateTwo = document.querySelector('.new-team2-name');

  // Selecting the name update buttons and adding event listeners.
  teamOneNameUpdate = document.querySelector('.team1-update-button');
  teamTwoNameUpdate = document.querySelector('.team2-update-button');

  // Selecting the button that switches the half
  gameAdvance = document.querySelector('.switch');

  //Selecting the section that contains the score information.
  gameScoreFullDisplay = document.querySelector('.gameScore');

  // Selecting the timer.
  timer = document.querySelector(".timer");

  let switchHalves = () => {
    if(half < 2) {
      gameScoreHTML += `<section class="half${1}">
        <p>${teamOneName} score: ${teamOneScore}</p>
        <p>${teamTwoName} score: ${teamTwoScore}</p>
        </section>`;
        gameTime = 60 * 45;
        localStorage.setItem("h1T1", teamOneScore);
        localStorage.setItem("h1T2", teamTwoScore);
    } else if (half === 2){
      gameScoreHTML += `<section class="half${1}">
        <p>${teamOneName} score: ${teamOneScore}</p>
        <p>${teamTwoName} score: ${teamTwoScore}</p>
        </section>
        <p>Game over!</p>`;
        gameTime = 1;
        localStorage.setItem("h2T1", teamOneScore);
        localStorage.setItem("h2T2", teamTwoScore);
    }
    // Store the scores to the side, on the screen.
    gameScoreFullDisplay.innerHTML = gameScoreHTML;
    // Reset the scores.
    teamOneScore = 0;
    teamTwoScore = 0;
    // Increase the quarter/half count.
    half++;    
  }

  // initialize the interval, and the timer.
  let gameTime = 60 * 45;

  let interval = setInterval(() => {
    console.log(`${gameTime}`);
    gameTime--;
    let minutes = Math.floor(gameTime / 60);
    minutes < 10 ? minutes = "0" + minutes : minutes;
    let seconds = Math.floor(gameTime % 60);
    seconds < 10 ? seconds = "0" + seconds : seconds;
    timer.textContent = `${minutes} : ${seconds}`;
    if(gameTime <= 0) {
      switchHalves();
      // If we haven't hit the second half, reset the game time.
      if(half <= 2) {
        gameTime = 60 * 45;
      } else {
        clearInterval(interval);
      }
    }
  }, 1000);

  // Advancing the game.

  gameAdvance.addEventListener('click', (e) => {
    // Log the scores.
    console.log(`${teamOneName}: ${teamOneScore}, ${teamTwoName}: ${teamTwoScore}`);
    switchHalves();
    
    console.log(gameScoreHTML);


  });

  // Changing the teamOneName whenever the currentName changes.
  currentNameUpdateOne.addEventListener('input', (e) => {
    teamOneName = currentNameUpdateOne.value;
  });

  currentNameUpdateTwo.addEventListener('input', (e) => {
    teamTwoName = currentNameUpdateTwo.value;
  });

  teamOneNameUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    teamOneNameDisplay.textContent = teamOneName;
  });

  teamTwoNameUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    teamTwoNameDisplay.textContent = teamTwoName;
  });

  // Selecting the score buttons and adding event listeners
  document.querySelector('.add-team-1').addEventListener('click', (e) => {
    e.preventDefault();
    teamOneScore++;
    teamOneScoreDisplay.textContent = teamOneScore;
  });

  document.querySelector('.subtract-team-1').addEventListener('click', (e) => {
    e.preventDefault();
    teamOneScore--;
    teamOneScoreDisplay.textContent = teamOneScore;
  });

  document.querySelector('.add-team-2').addEventListener('click', (e) => {
    e.preventDefault();
    teamTwoScore++;
    teamTwoScoreDisplay.textContent = teamTwoScore;
  });

  document.querySelector('.subtract-team-2').addEventListener('click', (e) => {
    e.preventDefault();
    teamTwoScore--;
    teamTwoScoreDisplay.textContent = teamTwoScore;
  });

}

document.addEventListener('DOMContentLoaded', main);