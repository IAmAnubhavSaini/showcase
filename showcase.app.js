var app = angular.module('showcase', []);

app.controller("AboutTagsController", function(){
  this.tags = AboutTags;
});

var AboutTags = [
  'developer',
  'counter-strike-er',
  'open-source-er',
  'web-developer',
  'linux-kernel-builder',
  'writer',
  'music-listener',
  'machine-learning-learner',
  'blogger',
  'movie-criticiser',
  'helper',
  'javascript-er',
  'python-er',
  'angularjs-er',
  'a-very-complex-human-being-with-simple-ideas',
  'designer', 'dreamer', 'thinker'
];
