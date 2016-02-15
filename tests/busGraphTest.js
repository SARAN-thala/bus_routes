var fs = require('fs');
var file = '../data/All_Routes_By_Number.txt';
var data = fs.readFileSync(file, 'utf-8').split(/\r\n|:/g);
var busRoutes = require('../lib/busGraph.js');
var assert = require('chai').assert;
var ld = require('lodash');
// var b = new graph.busRoutes();

function getBusNo() {
  var busNo = [];
  for (var i = 0; i < data.length; i++) {
    if (i % 2 == 0)
      busNo.push(data[i])
  }
  return busNo;
}
getBusNo();

function getBusRoutes() {
  var busRoutes = [];
  for (var i = 0; i < data.length; i++) {
    if (i % 2 != 0)
      busRoutes.push(data[i])
  }
  console.log(busRoutes);
  return busRoutes;
}
getBusRoutes();

describe('add Edges', function() {
  it('should be able to determine if an edge is present', function() {

  });
});