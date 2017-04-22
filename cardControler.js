var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');



console.log("Basic Card");
var basicCard = new BasicCard("The first President of the US was ","George Washington");
console.log("Basic front: " + basicCard.front);
console.log("Basic back:  " + basicCard.back);
//var clozeCard1 = new ClozeCard(text,cloze);

console.log("\n******************\n");
console.log("Cloze Card 1");
var cloze1 = new ClozeCard("The first President of the US was George Washington.","George Washington");
console.log("Full Text:    " + cloze1.fullText);
console.log("Cloze:        " + cloze1.cloze);
console.log("Partial Text: " + cloze1.partial);

console.log("\n******************\n");
console.log("Cloze Card 2");
var cloze2 = new ClozeCard("This is a bad cloze example that will flunk the error checking.","Foo");
console.log("Full Text:    " + cloze2.fullText);
console.log("Cloze:        " + cloze2.cloze);
console.log("Partial Text: " + cloze2.partial);

console.log(basicCard.front + " , " + basicCard.back);
console.log(basicCard.back);
//console.log(clozeCard1.front);              





