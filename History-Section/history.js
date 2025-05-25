// history.js
console.log("history.js is running");

// Get stored history from localStorage
let history = JSON.parse(localStorage.getItem('mealHistory')) || [];

let historyHTML = '';
history.forEach((meal) => {
  historyHTML += `
    <div class="profile">
      <div class="hello">
        <img class="profile-picture" src="${meal.image}">
        <p class="name">${meal.title}</p>
        <div class="mutual-friends-row"></div>
        <button class="add-friend-button">
          Check Food History Info
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-grid').innerHTML = historyHTML;

document.querySelector('.js-history').addEventListener('click', () => {
  window.location.href = '../Main-Page/index.html';
});

/*
document.querySelectorAll('.add-friend-button').forEach((button) => {
  button.addEventListener('click', () => {
   
  });
});
*/


document.querySelector('.js-breakfast').addEventListener('click', () => {
  const breakfastOnly = history.filter(meal => meal.category === 'Breakfast');
});

