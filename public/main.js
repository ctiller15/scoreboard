const main = () => {
  // document.querySelector('h1').textContent += '?';
  document.querySelector('.add-team-1').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked! :D! Add one! Team 1!");
  });

  document.querySelector('.subtract-team-1').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked! :D! Subtract one! Team 1!");
  });

  document.querySelector('.add-team-2').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked! :D! Add one! Team 2!");
  });

  document.querySelector('.subtract-team-2').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicked! :D! Subtract one! Team 2!");
  });
}

document.addEventListener('DOMContentLoaded', main);
