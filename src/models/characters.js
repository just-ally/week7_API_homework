const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Characters = function(){
  this.characters = [];
}

Characters.prototype.bindEvents = function(){
  PubSub.subscribe('CharacterSelectView:character-selected', (event) => {
    const selectedCharacterIndex = event.detail;
    const foundCharacter = this.findCharacter(selectedCharacterIndex);
    PubSub.publish('Characters:found-character-info', foundCharacter);
    console.log('found character:', foundCharacter);
  });
}

Characters.prototype.getCharacterData = function(){
  const request = new Request('https://rickandmortyapi.com/api/character/1,2,3,4,5,47,244,282,306,329,242,262,162,7,196');
  request.get().then((data) => {
    this.characters = data;
    PubSub.publish('Characters:characters-data-loaded', this.characters);
  });
};



Characters.prototype.findCharacter = function(index){
  return this.characters[index];
};

module.exports = Characters;
