const Episodes = require('./models/episodes.js');
const EpisodeSelectView = require('./views/episode_select_view.js');
const EpisodeListView = require('./views/episode_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const episodeSelectElement = document.querySelector('#episodes');
  const episodeSelectView = new EpisodeSelectView(episodeSelectElement);
  episodeSelectView.bindEvents();

  const episodesContainer = document.querySelector('#episode-list');
  const episodeList = new EpisodeListView(episodesContainer);
  episodeList.bindEvents();

  const episodes = new Episodes();
  episodes.bindEvents();
  episodes.getData();

})
