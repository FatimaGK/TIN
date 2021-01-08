// var fs = require('fs');
// fs.watch('C:\\Users\\Tami\\Desktop\\Assigment 7\\TaskFile', 
//         { persistent: true }, function (event, fileName) {
//     console.log("Event: " + event);
//     console.log(fileName + "\n");
//   });



// I used fs at the beginning but the information printing 
//was not satisfying me so I decided to use chokidar module
var chokidar = require('chokidar');

const watcher = chokidar.watch('TaskFile', {
    ignored: /(^|[\/\\])\../, 
    persistent: true
  });

watcher
  .on('add', function(path) {console.log('File', path, 'has been added');})
  .on('change', function(path) {console.log('File', path, 'has been changed');})
  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
  .on('addDir', function(path) {console.log('Directory', path, 'has been added');})
  .on('unlinkDir', function(path) {console.log('Directory', path, 'has been removed');})
  //.on('error', function(error) {console.error('Error happened', error);})
