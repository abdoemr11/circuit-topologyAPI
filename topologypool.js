/******************************************************************
 * TopPool: 
 * Topoloies Pool container
 * member function:
 *	-addTop
 *	-removeTop
 *	-queryTop
 *	-showAllTop
 *	-showCompInTop
 *	-showDevicesConectToNet
 *	-countTop
 *
******************************************************************/
class TopPool {
	constructor(){
		this.topologies = [];
	}	
/*******************************************************************
 * addTop v1.1: 
 * add new topologies to the pool
 * v1.1 => check topology to see if it's already on the pool
 * if exist then overwite the current one
 * This step to assure that id is unique key
 * Note : topoloy must be valid toplogy
*******************************************************************/
	addTop(top)
	{
		let index = 0;
		if((index = this.isTopExist(top.id))== -1)
			this.topologies.push(top);
		else
			this.topologies[index] = top;
	}
/*******************************************************************
 * removeTop v1.1: 
 * remove the givin topologyies based on the given id
 * topId must be string
 * v1.1: return index of the top -1 otherwise
*******************************************************************/
	removeTop(topId) {
	  let i = 0;
		let index = this.isTopExist(topId);
	  while (i < this.topologies.length) {
		if (this.topologies[i].id === topId) {
			console.log("removing topology with topology id = ", topId );
		  this.topologies.splice(i, 1);
		} else {
		  ++i;
		}
	  }
		//
		return index;
	}
/*******************************************************************
 * queryTop v1.0
 * return topology object from the Pool 
*******************************************************************/
	queryTop(topId){
		let index = 0;
		if((index = this.isTopExist(topId)) == -1)
			return Object.create(null);
		return this.topologies[index];
	}
/*******************************************************************
 * showAllTop v2.0
 * return array of topologies id that reside in the memory
 * v2.0: return array of topologies
*******************************************************************/
	showAllTop(){
		let topsId = [];
		let topsList = [];
		for(let top of this.topologies)	
		{
			topsId.push(top.id)	;
			topsList.push(top);

		}
		return topsList;
		//return topsId;
	}
/*******************************************************************
 * showCompInTop v1.2
 * Given topology id it will return array of components
 * containing components id and type
 * v1.1 if the topology not in the pool return -1
 * v1.2 return component object not just id
*******************************************************************/
	showCompInTop(topId){
		let compId = [];
		let comps = [];
		let index = 0;
		if((index = this.isTopExist(topId)) == -1)
			return -1;
		for(let comp of this.topologies[index].components)
		{
			comps.push(comp);
			//compId.push(comp.id);
		}
		return comps;
		//return compId;
	}
/*******************************************************************
 * showDevicesConectToNet v1.1
 * given topologyId and node return all devices that are attached
 * to this node
 * v1.1 change it to return devices not just their id
*******************************************************************/
	showDevicesConectToNet(topId, node){
		//check if the topology are in the pool
		let index = 0;
		if((index = this.isTopExist(topId))== -1){
			console.log("no topology found with this id ");
			//error handler 
			return;
		}
		let attachedDevicesId = [];
		let attachedDevices = [];
		for(let comp of this.topologies[index].components)
		{
			for(let terminal in comp.netlist)
			{
				console.log(terminal);
				if(comp.netlist.hasOwnProperty(terminal)&&comp.netlist[terminal] == node){
					attachedDevices.push(comp);
					break;
				}
			}
		}
		//check if there are connected deviced or not 
		return attachedDevices;
	}
/*******************************************************************
 * countTop v1.0: 
 * helper function that count the number of topologies in the pool
*******************************************************************/
	countTop(){
		return this.topologies.length;
	}
/*******************************************************************
 * isTopExist v1.0: 
 * check if given topology is exist and return its index
 * otherwise return -1
*******************************************************************/
	isTopExist(topId){
	  let i = 0;
	  while (i < this.topologies.length) {
		if (this.topologies[i].id === topId) {
			return i;
		}
		  ++i;
		}
		return -1;
	}
}
module.exports = {
	TopPool	
};
/*let myPool = new TopPool();
myPool.addTop(top1);
console.log(myPool.showAllTop());
console.log(myPool.showCompInTop("top1"));
let top2 = myPool.queryTop("top1");
top2.id = "top2";
jsonio.jsonWriter("./topologies/topology2.json", top2);
/*myPool.addTop(top1);
 *
console.log(myPool.showAllTop());
console.log(myPool.showCompInTop("top2"));
myPool.addTop(top3);
console.log(myPool.showAllTop());
console.log(myPool.showCompInTop("top2"));
console.log(myPool.showDevicesConectToNet("top1", "t1"));
*/
