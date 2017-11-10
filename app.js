require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello('Sarath');
var answer = question.ask('Am I learning something ?');
console.log(answer);
goodbye();