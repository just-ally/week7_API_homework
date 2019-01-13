const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Episodes = function(){
  this.episodes = [];
}

Episodes.prototype.bindEvents = function(){
  PubSub.subscribe('EpisodeSelectView:episode-selected', (event) => {
    const index = event.detail;
    const foundEpisode = this.findEpisode(index);
    PubSub.publish('Episodes:episode-found', foundEpisode);
  });
  PubSub.subscribe('CharacterEpisodesSelectView:episode-selected', (event) => {
    const selectedEpisodeURL = event.detail;
    const selectedEpisodeInfo = this.getCharacterEpisodeData(selectedEpisodeURL);
  });
}

Episodes.prototype.findEpisode = function(index){
  return this.episodes[index];
}

Episodes.prototype.getEpisodeData = function(){
  const seasonsElement = document.querySelector('#seasons');
  seasonsElement.addEventListener('change', (event) => {
    const selectedSeason = event.target.value;
    console.log("Season selected in episodes model:", selectedSeason);

    switch(selectedSeason) {
      case 'seasonOne':
      const requestOne = new Request('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11');
      requestOne.get().then((data) => {
        this.episodes = data;
        PubSub.publish('Episodes:series-data-loaded', this.episodes);
        console.log('Published on series-one-data-loaded', this.episodes);
      });
      break;
      case 'seasonTwo':
      const requestTwo = new Request('https://rickandmortyapi.com/api/episode/12,13,14,15,16,17,18,19,20,21');
      requestTwo.get().then((data) => {
        this.episodes = data;
        PubSub.publish('Episodes:series-data-loaded', this.episodes);
        console.log('Published on series-two-data-loaded', this.episodes);
      })
      break;
      case 'seasonThree':
      const requestThree = new Request('https://rickandmortyapi.com/api/episode/22,23,24,25,26,27,28,29,30,31');
      requestThree.get().then((data) => {
        this.episodes = data;
        PubSub.publish('Episodes:series-data-loaded', this.episodes);
        console.log('Published on series-three-data-loaded', this.episodes);
      });
    };
  });
}

Episodes.prototype.getCharacterEpisodeData = function(url){
  const request = new Request(url);
  request.get().then((data) => {
    this.episodes = data;
    PubSub.publish('Episodes:episode-by-character-loaded', this.episodes);
    console.log('Publish on episode-by-character-loaded:', this.episodes);
  })
}

module.exports = Episodes;
