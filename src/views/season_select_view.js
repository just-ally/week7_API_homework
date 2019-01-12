// const PubSub = require('../helpers/pub_sub.js')
//
// const SeasonSelectView = function(element){
//   this.element = element;
// }
//
// SeasonSelectView.prototype.bindEvents = function(){
//   this.element.addEventListener('change', (event) => {
//     const selectedSeason = event.target.value;
//     console.log("Season selected in SeasonSelectView:", selectedSeason);
//     PubSub.publish('SeasonSelectView:season-selected', selectedSeason);
//   });
// }
//
// module.exports = SeasonSelectView;
