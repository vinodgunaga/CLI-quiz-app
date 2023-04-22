var readlineSync = require('readline-sync');

var score = 0;

var questions = [
{
  question : "Who is Elon Musk.?",
  answer : "Billionaire"
},
{
  question : "What is his age.?",
  answer : "51"
},
{
  question : "Recently he bought which company.?",
  answer : "Twitter"
},
{
  question : "He has which car company.?",
  answer : "Tesla"
},
{
  question : "He has which space company.?",
  answer : "Starlink"
},
{
  question : "In which year he is born.?",
  answer : "1971"
}
];

function welcome() {
  var userName = readlineSync.question("What is your name.? ");
  console.log("Welcome " + userName);
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score++;
  } else {
    console.log("Wrong");
  }

  console.log("--------------------");
  console.log("Score is ",score);
}

function game() {
  for(var i=0; i<questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }
}

welcome()
game()






