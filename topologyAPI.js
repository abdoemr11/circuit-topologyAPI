const topPool = require("./topologypool");
const jsonIO = require("./jsonio");



let myPool = new topPool.TopPool();
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
	//check if it retrived the topology correctly
	if(!(top.id == topId))
	{
		console.log("Couldn't retrive the topology from the memory. Check that the topology id is correct and then try again");
		return false;
	}	
	jsonIO.jsonWriter(top, fileName)
	return true;
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
function queryTopolgies(){
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
 * queryDevicesWithNetListNode():
 * - retrive all deviced that are connected to a certain 
 *   node in a given topology
 * - return -1 otherwise
***********************************************************/
function queryDevicesWithNetListNode(topId, nodeId){
	let devices = myPool.showDevicesConectToNet(topI, nodeId)	;
	if(Array.isArray(devices) && devices.length)
		return devices;
	console.log("Couldn't retrive devices from topology with ID : ", topId, " and node id ", nodeId);
	return -1;
}
	

readJSON("./topologies/topology2.json");
console.log(myPool.showAllTop());
