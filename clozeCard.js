
// function ClozeCard(text,cloze){
	
	// if(!text.includes(cloze)){
	// 	console.log("Error Doesn't include Cloze" );
	// 	return; 
	// }
// 	this.fullText = text;
// 	this.cloze = cloze;
// 	function setPartial(text, cloze){
// 		// returns partial text after deletion
// 		this.partial = text.replace(cloze, "...");
// 	};
// 	setPartial(this.text, this.cloze);

// }

module.exports = ClozeCard;

function ClozeCard(text,cloze) {
		// Catch errors
		if(!text.includes(cloze)){
			console.log("Error: Doesn't include Cloze" );
			return; 
		}
		// set text and cloze from args
		this.fullText = text;
		this.cloze = cloze;

		// call prototype function to set this.partial
		this.setPartial(text,cloze);
}
// prototype function setPartial can be called within
// the class ClozeCard via this.setPartial as above
ClozeCard.prototype.setPartial = function(text,cloze) {
	return this.partial = text.replace(cloze, "___");
};




