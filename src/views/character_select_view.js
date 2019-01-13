const PubSub = require('../helpers/pub_sub.js');

const CharacterSelectView = function(element){
  this.element = element;
}

CharacterSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Characters:characters-data-loaded', (event) => {
    this.populate(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    const selectedCharacter = event.target.value;
    PubSub.publish('CharacterSelectView:character-selected', selectedCharacter);
    console.log('Published on character-selected:', selectedCharacter);
  });
}

CharacterSelectView.prototype.populate = function(characters){
  characters.forEach((character, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = character.name;
    this.element.appendChild(option);
  });
}

module.exports = CharacterSelectView;
