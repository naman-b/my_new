var unirest = require('unirest');
var BBGlobal = require('../global');

var postToServer = function(params, endpoint, callback, user) {
var headers = (user != undefined)? ({ 'Accept': 'application/json', 'Authorization' : 'Token '+user.token}) : { 'Accept': 'application/json' };
// console.log(headers);
  unirest.post(BBGlobal.apiUrl + endpoint)
    .headers(headers)
    .send(params)
    .end(function (response) {
      callback(response);
  });
}

var postToPandaServer = function(params, endpoint, callback, user) {
var headers = (user != undefined)? ({ 'Accept': 'application/json','Authorization' : 'Token '+user.token, 'Content-Type': 'application/json;charset=utf-8'}) : ({ 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8'});
// console.log(headers);
  unirest.post(BBGlobal.apiUrl + endpoint)
    .headers(headers)
    .send(params)
    .end(function (response) {
      callback(response);
  });
}

var postToCookbookServer = function(params, endpoint, callback, user) {
var headers = (user != undefined)? ({ 'Accept': 'application/json','Authorization' : 'Token '+user.token, 'Content-Type': 'application/json;charset=utf-8'}) : ({ 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8'});
console.log(headers);
  unirest.post(BBGlobal.apiUrl + endpoint)
    .headers(headers)
    .send(params)
    .end(function (response) {
      callback(response);
  });
}

var getFromServer = function(endpoint, callback, user) {
var headers = (user != undefined)? ({ 'Accept': 'application/json', 'Authorization' : 'Token '+user.token}) : { 'Accept': 'application/json' };
  var Request = unirest.get(BBGlobal.apiUrl + endpoint)
    .headers(headers)
    .end(function (response) {
      if (response.status == 200) {
        callback(response.body);
      } else {
        callback(response);
      }
  });
  return Request;
}

var putToServer = function(params, endpoint, callback, user) {
var headers = (user != undefined)? ({ 'Accept': 'application/json' ,'Authorization' : 'Token '+user.token, 'Content-Type': 'application/json;charset=utf-8'}) : ({ 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8'});
  unirest.put(BBGlobal.apiUrl + endpoint)
    .headers(headers)
    .send(params)
    .end(function (response) {
      if (response.status == 200) {
        callback(response);
      } else {
        callback(response);
      }
  });
}

var deleteFromServer = function(endpoint, callback, user) {
var headers = (user != undefined)? ({ 'Accept': 'application/json' }, {'Authorization' : 'Token '+user.token}) : { 'Accept': 'application/json' };
  var Request = unirest.delete(BBGlobal.apiUrl + endpoint)
    .headers(headers)
    .end(function (response) {
      if (response.status == 200) {
        callback(response.body);
      } else {
        callback(response);
      }
  });
  return Request;
}

exports.deleteFromServer = deleteFromServer;
exports.getFromServer = getFromServer;
exports.postToServer = postToServer;
exports.postToCookbookServer = postToCookbookServer;
exports.postToPandaServer = postToPandaServer;
exports.putToServer = putToServer;