const Episodes = require('./models/episodes.js');
const EpisodeSelectView = require('./views/episode_select_view.js');
const EpisodeListView = require('./views/episode_list_view.js');
const Characters = require('./models/characters.js');
const CharacterSelectView = require('./views/character_select_view.js');
const CharacterInfoView = require('./views/character_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const characterInfoElement = document.querySelector('#character-info');
  const characterInfoView = new CharacterInfoView(characterInfoElement);
  characterInfoView.bindEvents();

  const characterSelectElement = document.querySelector('#characters');
  const characterSelectView = new CharacterSelectView(characterSelectElement);
  characterSelectView.bindEvents();

  const characters = new Characters;
  characters.bindEvents();
  characters.getCharacterData();

  const episodeSelectElement = document.querySelector('#episodes');
  const episodeSelectView = new EpisodeSelectView(episodeSelectElement);
  episodeSelectView.bindEvents();

  const episodesContainer = document.querySelector('#episode-list');
  const episodeList = new EpisodeListView(episodesContainer);
  episodeList.bindEvents();

  const episodes = new Episodes();
  episodes.bindEvents();
  episodes.getEpisodeData();


})
