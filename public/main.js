const main = () => {
  // document.querySelector('h1').textContent += '?';
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

  // Advancing the game.

  gameAdvance.addEventListener('click', (e) => {
    // Log the scores.
    console.log(`${teamOneName}: ${teamOneScore}, ${teamTwoName}: ${teamTwoScore}`);
    gameScoreHTML += `<section class="half${1}">
                      <p>${teamOneName} score: ${teamOneScore}</p>
                      <p>${teamTwoName} score: ${teamTwoScore}</p>
                      </section>`;
    
    console.log(gameScoreHTML);
    // Store the scores to the side, on the screen.
    gameScoreFullDisplay.innerHTML = gameScoreHTML;
    // Reset the scores.
    teamOneScore = 0;
    teamTwoScore = 0;
    // Increase the quarter/half count.
    half++;

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