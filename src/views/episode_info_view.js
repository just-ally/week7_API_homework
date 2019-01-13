const PubSub = require('../helpers/pub_sub.js');

const EpisodeInfoView = function(container){
  this.container = container;
};

EpisodeInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Episodes:episode-found', (event) => {
    this.renderEpisode(event.detail);
  });
}

EpisodeInfoView.prototype.renderEpisode = function(episode){
  this.container.innerHTML = '';

  const name = document.createElement('h2');
  name.textContent = episode.name;
  this.container.appendChild(name);

  const episodeRef = document.createElement('p');
  episodeRef.textContent = episode.episode;
  this.container.appendChild(episodeRef);

  const airDate = document.createElement('p');
  airDate.textContent = episode.air_date;
  this.container.appendChild(airDate);
};

module.exports = EpisodeInfoView;
