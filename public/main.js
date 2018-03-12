const main = () => {
  // document.querySelector('h1').textContent += '?';
  // Initialize the current scores.
  let teamOneScore = 0;
  let teamTwoScore = 0;

  let teamOneName = "Team 1";
  let teamTwoName = "Team 2";

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

  teamOneNameUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    teamOneNameDisplay.textContent = currentNameUpdateOne.value;
    console.log(currentNameUpdateOne.value);
  });

  teamTwoNameUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    teamTwoNameDisplay.textContent = currentNameUpdateTwo.value;
    console.log(currentNameUpdateTwo.value);
  });

  // Selecting the score buttons and adding event listeners
  document.querySelector('.add-team-1').addEventListener('click', (e) => {
    e.preventDefault();
    teamOneScore++;
    teamOneScoreDisplay.textContent = teamOneScore;
    console.log(`Current score: ${teamOneScore}`);
  });

  document.querySelector('.subtract-team-1').addEventListener('click', (e) => {
    e.preventDefault();
    teamOneScore--;
    teamOneScoreDisplay.textContent = teamOneScore;
    console.log(`Current score: ${teamOneScore}`);
  });

  document.querySelector('.add-team-2').addEventListener('click', (e) => {
    e.preventDefault();
    teamTwoScore++;
    teamTwoScoreDisplay.textContent = teamTwoScore;
    console.log(`Current score: ${teamTwoScore}`);
  });

  document.querySelector('.subtract-team-2').addEventListener('click', (e) => {
    e.preventDefault();
    teamTwoScore--;
    teamTwoScoreDisplay.textContent = teamTwoScore;
    console.log(`Current score: ${teamTwoScore}`);
  });

}

document.addEventListener('DOMContentLoaded', main);