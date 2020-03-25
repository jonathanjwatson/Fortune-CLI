var inquirer = require("inquirer");
var fs = require("fs");

var arrayOfFortunes = [
  "you will lose a shoe unexpectedly.",
  "you will find a great fortune!",
  "you will avoid people for 14-21 days."
];

inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "Welcome to Fortunes Told! What is your first name?"
    }
  ])
  .then(function(response) {
    // console.log(response.userName);
    var randomFortuneIndex = Math.floor(Math.random() * arrayOfFortunes.length);
    var fortuneToWrite = "" + response.userName + ", " + arrayOfFortunes[randomFortuneIndex] + "\n";

    fs.appendFile("fortune.txt", fortuneToWrite, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Your fortune has been written!");
    });
  });
