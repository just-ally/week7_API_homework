const PubSub = require('../helpers/pub_sub.js')

const EpisodeSelectView = function(element){
  this.element = element;
}

EpisodeSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Episodes:series-data-loaded', (event) => {
    this.populate(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('EpisodeSelectView:episode-selected', selectedIndex);
  })
};

EpisodeSelectView.prototype.populate = function(episodes){
  episodes.forEach((episode, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = episode.name;
    this.element.appendChild(option);
  });
}

module.exports = EpisodeSelectView;
