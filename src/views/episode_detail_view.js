const EpisodeDetailView = function(){

};

EpisodeDetailView.prototype.createAllEpisodeDetail = function(episode){
  const episodeDiv = document.createElement('div');

  const name = document.createElement('h3');
  name.textContent = episode.name;
  episodeDiv.appendChild(name);

  // const episodeRef = document.createElement('p');
  // episodeRef.textContent = episode.episode;
  // episodeDiv.appendChild(episodeRef);

  return episodeDiv;
};

EpisodeDetailView.prototype.createIndividualEpisodeDetail = function(episode){
  const episodeDiv = document.createElement('div');

  const name = document.createElement('h2');
  name.textContent = episode.name;
  episodeDiv.appendChild(name);

  const episodeRef = document.createElement('p');
  episodeRef.textContent = episode.episode;
  episodeDiv.appendChild(episodeRef);

  const airDate = document.createElement('p');
  airDate.textContent = episode.air_date;
  episodeDiv.appendChild(airDate);

  // const characterList = document.createElement('ul');

  // episode.characters.forEach((character) => {
  //   const characterInfo = new Character();

  return episodeDiv;
};

module.exports = EpisodeDetailView;
