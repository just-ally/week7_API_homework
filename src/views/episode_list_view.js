const PubSub = require('../helpers/pub_sub.js');
const EpisodeDetailView = require('./episode_detail_view.js')

const EpisodeListView = function(container){
  this.container = container;
};

EpisodeListView.prototype.bindEvents = function(){
  PubSub.subscribe('Episodes:series-data-loaded', (event) => {
    this.renderSeries(event.detail);
  });

  PubSub.subscribe('Episodes:episode-found', (event) => {
    this.container.innerHTML = '';
    this.renderEpisode(event.detail);
  });
}

EpisodeListView.prototype.renderSeries = function(episodes){
  episodes.forEach((episode) => {
    const episodeDetail = new EpisodeDetailView();
    const episodeDiv = episodeDetail.createAllEpisodeDetail(episode);
    this.container.appendChild(episodeDiv);
  });
}

EpisodeListView.prototype.renderEpisode = function(episode){
  const episodeDetail = new EpisodeDetailView();
  const episodeDiv = episodeDetail.createIndividualEpisodeDetail(episode);
  this.container.appendChild(episodeDiv);
}

module.exports = EpisodeListView;
