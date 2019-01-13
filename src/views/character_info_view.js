const PubSub = require('../helpers/pub_sub.js');

const CharacterInfoView = function(container){
  this.container = container;
};

CharacterInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Characters:found-character-info', (event) => {
    console.log('found-character-info:', event.detail);
    this.render(event.detail);
  });

}

CharacterInfoView.prototype.render = function(character){
  this.container.innerHTML = '';

  const characterName = document.createElement('h2');
  characterName.textContent = character.name;
  this.container.appendChild(characterName);

  const characterSpecies = document.createElement('p');
  characterSpecies.textContent = `Species: ${character.species}`;
  this.container.appendChild(characterSpecies);

  const characterType = document.createElement('p');
  characterType.textContent = `Type: ${character.type}`;
  this.container.appendChild(characterType);

  const characterImage = document.createElement('img');
  characterImage.src=character.image;
  this.container.appendChild(characterImage);

  const characterEpisodesIntro = document.createElement('p');
  characterEpisodesIntro.textContent = `${character.name} appears in the following episodes:`;
  const characterEpisodes = document.createElement('ul');
  character.episode.forEach((episode) => {
    const episodeListItem = document.createElement('li');

    const episodeLink = document.createElement('a');
    episodeLink.href = episode;
    episodeLink.innerText = episode;
    episodeListItem.appendChild(episodeLink);
    
    characterEpisodes.appendChild(episodeListItem);
  });
  this.container.appendChild(characterEpisodesIntro);
  this.container.appendChild(characterEpisodes);
}

module.exports = CharacterInfoView;
