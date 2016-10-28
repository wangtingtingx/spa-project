var mainlist = require('./main-list');
var searchlist = require('./search-list');
var moreproductlist = require('./detail-moreproduct');
var refreshlist = require('./main-refresh-list');
var morelist = require('./main-more-list');

module.exports = function(){
  return {
    "list":mainlist,
    "searchlist":searchlist,
    "moreproductlist":moreproductlist,
    "refreshlist":refreshlist,
    "morelist":morelist
  }
}
