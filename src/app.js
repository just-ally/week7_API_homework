const SeasonSelectView = require('./views/season_select_view.js');
const Episodes = require('./models/episodes.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const episodes = new Episodes();
  episodes.getData();

  // const seasonsElement = document.querySelector('#seasons');
  // const seasonSelectView = new SeasonSelectView(seasonsElement);
  // seasonSelectView.bindEvents();
})
