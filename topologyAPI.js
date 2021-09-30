const topPool = require("./topologypool");
const jsonIO = require("./jsonio");
/**********************************************************
 * isValidTop v1.0:
 * - check if the givin topology is a valid
 * - check if it has topology Id
 * -                 - component
 *                   - component.id
**********************************************************/
function isValidTop(top){
	if(!top.hasOwnProperty("id"))
		return false;
	else if (!top.hasOwnProperty("components"))
		return false;
	for(let comp of top.components){
		if(!comp.hasOwnProperty("id"))
			return false;
	}
	return true;
}

/***********************************************************
 * readJSON():
 * - Read Topology from a given JSON file and store it in 
 * the memory pool
 * - In case that file is not found it will output error 
 * message
 * - In case that there is a topology with the same id in 
 *   the pool it will be overwriten with the new one
 *
 *
***********************************************************/
function readJSON(jsonFile)
{
	let top = jsonIO.jsonReader(jsonFile);
	if(!top){
		
		console.log("Error! Can't read the Json file check name and format then try again");
		return false;
	}
	if(!isValidTop(top))
		return false;
	//if read json file successfully add it to the pool
	myPool.addTop(top);
	return true;
}
/***********************************************************
 * writeJSON():
 * - output a topology from the pool to JSON file
 * - arguments: topology id, name of the file
 *   future modification may include saving the file by its
 *   id
***********************************************************/
function writeJSON(topId, fileName){
	let top = myPool.queryTop(topId);
	console.log(top.id);
	//check if it retrived the topology correctly
	if(!(top.id == topId))
	{
		console.log("Couldn't retrive the topology from the memory. Check that the topology id is correct and then try again");
		return false;
	}	
	let writeCondition = jsonIO.jsonWriter(fileName, top);
	return writeCondition;
}
/***********************************************************
 * deleteTopology():
 * Delete topology from the memory pool
 * if exist delete it and return true
 * if not raise an error message and return false
***********************************************************/
function deleteTopology(topId){
	if(myPool.removeTop(topId) > -1 ){
		//deleted sucessfully
		return true;
	}
	console.log("Can't delete topology with id : ", topId);
	return false;
}
/***********************************************************
 * queryTopologies():
 * - retrive all topologies from the memory pool
 * - infrom the user if the pool is empty and return -1
***********************************************************/
function queryTopologies(){
	let tops= myPool.showAllTop();
	if(Array.isArray(tops) && tops.length)
		return tops;
	console.log("There is no topology in the memory");
	return -1;
}
/***********************************************************
 * queryDevices():
 * - retrive all devices that are in certain topology
 * - if failed return -1
***********************************************************/
function queryDevices(topId){
	let devices= myPool.showCompInTop(topId);
	if(Array.isArray(devices) && devices.length)
		return devices;
	console.log("Couldn't retrive devices from topology with ID : ", topId);
	return -1;
}
/***********************************************************
 * querydeviceswithnetlistnode():
 * - retrive all deviced that are connected to a certain 
 *   node in a given topology
 * - return -1 otherwise
***********************************************************/
function queryDevicesWithNetListNode(topId, nodeId){
	let devices = myPool.showDevicesConectToNet(topId, nodeId)	;
	if(Array.isArray(devices) && devices.length)
		return devices;
	console.log("Couldn't retrive devices from topology with ID : ", topId, " and node id ", nodeId);
	return -1;
}

/***********************************************************
 * - initialize the memory pool object 
***********************************************************/
let myPool = new topPool.TopPool();

/*********** Export the API functions **********************/
module.exports = {
	myPool,
	readJSON,
	writeJSON, 
	queryTopologies,
	queryDevices, 
	queryDevicesWithNetListNode,
	deleteTopology

};
