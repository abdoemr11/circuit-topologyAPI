const fs = require("fs");
/***************************************************************
 * jsonReader v1.0: 
 * read topology json file from disc then parse it into js object
***************************************************************/
function jsonReader(filePath) {
	if(fs.existsSync(filePath)){
	let dataFile = fs.readFileSync(filePath);
	return JSON.parse(dataFile);
	}
	console.log("file not found");
}
/***************************************************************
 * jsonWriter v1.1: 
 * take topology object and write it to the disc
 * v1.1: alter json.stringify to make the output json file 
 * more readable
***************************************************************/
function jsonWriter(filePath, jsonObject){
	try{
		let jsonData = JSON.stringify(jsonObject, null, 2);	
		//console.log("hi ",jsonData);
		fs.writeFileSync(filePath,jsonData);
		//fs.writeFileSync(filePath,jsonObject);
	}
	catch(err){
		console.log(err);
	}
}
module.exports = {
	jsonReader, 
	jsonWriter
}

