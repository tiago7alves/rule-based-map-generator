'use strict';

var chalk = require('chalk');
var world1Config = require('./configurations/world1.json');
var builder = require('./../src/builder.js');
var myUtils = require('./../src/utils/utils.js');

var worldInstance;
var map;

console.log(chalk.bgBlue('Running Example 1'));

worldInstance = builder.parse(world1Config);
console.log('start world');
worldInstance.start();
console.log('get 0,0');
map = worldInstance.getPartialMap(-2, -2, 2, 2);
myUtils.logTable(map);
map = worldInstance.getPartialMap(-3, -3, 1, 1);
map = worldInstance.getMap();
myUtils.logTable(map);

// TMP
myUtils.saveMap(map);
