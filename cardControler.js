var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');
var fs = require("fs");
var inquirer = require("inquirer");



		inquirer.prompt({
			name: "action",
			type: "List",
			message: "What would you like to do? .. enter basic for Basic Flashcard or cloze for Cloze Card",
			choices: ["basic", "close"]
			
			}).then(function(answer){

			switch(answer.action){
				case "basic":
				basic();
				break;

				case "cloze":
				cloze();
				break;

			}

		});




		var basic = function(){
		
			inquirer.prompt([{
				name:"basicCardFront",
				type: "input",
				message: "Enter the front text for your Basic Card : "
				},

				{ 
				name:"basicCardBack",
				type:"input",
				message: "Enter the text for the back of your card :"

				}]).then(function(answer){

				var frontCard = answer.basicCardFront;
				var backCard = answer.basicCardBack;
				var basicCard = new BasicCard(frontCard,backCard);
				// console.log(answer.basicCardFront);
				// console.log(answer.basicCardBack);
				fs.appendFile("card.txt","Basic Card : " + JSON.stringify(basicCard) + "\n", (err) =>{
			if (err) throw err;
			console.log("New Basic card created");
			console.log("Front: " + basicCard.front);
			console.log("Back: " + basicCard.back);

				});

		});

	};  //close basic();

	



		var cloze = function(){

			inquirer.prompt([{
				name:"fullText",
				type: "input",
				message: "Enter the full text for your Cloze Card : "
				},

				{
				name:"clozeText",
				type:"input",
				message: "Enter the cloze text for your card :"


				}]).then(function(answer){
				var frontCard = answer.fullText;
				var backCard = answer.clozeText;


			var clozeCard = new ClozeCard(frontCard,backCard);
			fs.appendFile("card.txt", "Cloze Card: " + JSON.stringify(clozeCard) + "\n", (err) => {
			if (err) throw err;
			console.log( "New cloze card created");
			});

			console.log("Full text :" + clozeCard.fullText + ",");
			console.log("Partial text :" + clozeCard.partial + ",");
			console.log("Cloze text :" + clozeCard.cloze);


			}); 

		}; //close cloze();
	



// console.log("Basic Card");
// var basicCard = new BasicCard("The first President of the US was ","George Washington");
// console.log("Basic front: " + basicCard.front);
// console.log("Basic back:  " + basicCard.back);
// //var clozeCard1 = new ClozeCard(text,cloze);

// console.log("\n******************\n");
// console.log("Cloze Card 1");
// var cloze1 = new ClozeCard("The first President of the US was George Washington.","George Washington");
// console.log("Full Text:    " + cloze1.fullText);
// console.log("Cloze:        " + cloze1.cloze);
// console.log("Partial Text: " + cloze1.partial);

// console.log("\n******************\n");
// console.log("Cloze Card 2");
// var cloze2 = new ClozeCard("This is a bad cloze example that will flunk the error checking.","Foo");
// console.log("Full Text:    " + cloze2.fullText);
// console.log("Cloze:        " + cloze2.cloze);
// console.log("Partial Text: " + cloze2.partial);

// console.log(basicCard.front + " , " + basicCard.back);
// console.log(basicCard.back);
// //console.log(clozeCard1.front);              





