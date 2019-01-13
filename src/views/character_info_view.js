const PubSub = require('../helpers/pub_sub.js');

const CharacterInfoView = function(containerOne, containerTwo){
  this.containerOne = containerOne;
  this.containerTwo = containerTwo;
};

CharacterInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Characters:found-character-info', (event) => {
    console.log('found-character-info:', event.detail);
    this.renderInfo(event.detail);
    this.renderImage(event.detail);
  });
}

CharacterInfoView.prototype.renderInfo = function(character){
  this.containerOne.innerHTML = '';

  const characterName = document.createElement('h3');
  characterName.textContent = character.name;
  this.containerOne.appendChild(characterName);

  const characterSpecies = document.createElement('p');
  characterSpecies.textContent = `Species: ${character.species}`;
  this.containerOne.appendChild(characterSpecies);

  const characterType = document.createElement('p');
  characterType.textContent = `Type: ${character.type}`;
  this.containerOne.appendChild(characterType);

  const characterStatus = document.createElement('p');
  characterStatus.textContent = `Status: ${character.status}`;
  this.containerOne.appendChild(characterStatus);

  const characterOrigin = document.createElement('p');
  characterOrigin.textContent = `Status: ${character.origin.name}`;
  this.containerOne.appendChild(characterOrigin);
}

CharacterInfoView.prototype.renderImage = function(character){
  this.containerTwo.innerHTML = '';

  const characterImage = document.createElement('img');
  characterImage.id = 'character-image';
  characterImage.src=character.image;
  this.containerTwo.appendChild(characterImage);
}

module.exports = CharacterInfoView;
