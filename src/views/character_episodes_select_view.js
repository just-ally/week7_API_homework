const PubSub = require('../helpers/pub_sub.js');

const CharacterEpisodesSelectView = function(element){
  this.element = element;
}

CharacterEpisodesSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Characters:found-character-info', (event) => {
    const selectedCharacter = event.detail;
    this.populate(selectedCharacter);
  });
  this.element.addEventListener('change', (event) => {
    const selectedEpisode = event.target.value;
    PubSub.publish('CharacterEpisodesSelectView:episode-selected', selectedEpisode);
  })
}

CharacterEpisodesSelectView.prototype.populate = function(character){
  character.episode.forEach((show) => {
    const option = document.createElement('option');
    option.value = show;
    option.textContent = show;
    this.element.appendChild(option);
  })
}

module.exports = CharacterEpisodesSelectView;
