var express = require('express');
var router = express.Router();
var getFromServer = require('../helpers/server').getFromServer;
var postToServer = require('../helpers/server').postToServer;
var BBGlobal = require('../global');
/* GET home page. */


router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'betterbutter' });

	async.parallel({
		collections: function(callback) {
			getFromServer('collections/nav/', function(collectionData){
				callback(null, collectionData)
			});
		},
		banners: function(callback) {
			getFromServer('website-banners/', function(bannerData) {
				callback(null, bannerData)
			});
		},
		currentContest: function(callback) {
			getFromServer('contests/current_new/', function(contestData) {
				if (contestData.count > 0) {
					callback(null, contestData.results[0].slug)
				} else {
					callback(null, 'index')
				}
			}, req.user)
		},
		feed: function(callback) {
			var limit = !empty(req.query.limit) ? req.query.limit : smallPaginationLimit;
			var offset = req.query.offset;
			var apiUrl = 'website-feed/' + '?limit=' + limit;
			if (!empty(offset)) {
				apiUrl = apiUrl + '&offset=' + offset;
			}
			getFromServer(apiUrl, function(feedData) {
				callback(null, feedData)
			}, req.user)
		}
	}, function(err, results) {
		if (err) return next(err);
		panda(req,res, function(){
			var currentUser = clone(req.user);

      if (typeof currentUser != 'undefined') {
			 delete currentUser.token;
      }
      res.locals.dLayer.set('pageName','Home');
			res.render('index',{
				collections:results.collections,
				banners: results.banners,
				currentContestLink: results.currentContest,
				user: currentUser,
				url: 'http://www.betterbutter.in/',
				emoji_data: req.app.locals.emoji_data,
				feedData: results.feed
			});
		});
	});
});

module.exports = router;
