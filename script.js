// Select the contact cards
const cards = document.querySelectorAll('.card');

// Set the current index to 0
let currentCardIndex = 0;

// Rotate the cards every 3 seconds
setInterval(() => {
  // Hide the current card
  cards[currentCardIndex].classList.remove('show');

  // Increment the current index or go back to 0 if at the end
  currentCardIndex = (currentCardIndex + 1) % cards.length;

  // Show the next card
  cards[currentCardIndex].classList.add('show');
}, 3000);

const data = {
  labels: [
    'Easy',
    'Medium',
    'Hard'
  ],
  datasets: [{
    label: 'LeetCode Progress',
    data: [95/207,97/207,15/207],
    backgroundColor: [
      '#90EE90',
      'orange',
      'red'
    ]
  }]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

var myChart = new Chart(
  document.getElementById('pie-chart'),
  config
);

