let topologyJson = {
    "id": "top1",
    "components": [
      {
        "type": "resistor",
        "id": "res1",
        "resistance": {
          "default": 100,
          "min": 10,
          "max": 1000
        },
        "netlist": {
          "t1": "vdd",
          "t2": "n1"
        }
      },
      {
        "type": "nmos",
        "id": "m1",
        "m(l)": {
          "deafult": 1.5,
          "min": 1,
          "max": 2
        },
        "netlist": {
          "drain": "n1",
          "gate": "vin",
          "source": "vss"
        }
      }
    ]
  };
let top2= {
    "id": "top2",
    "components": [
      {
        "type": "resistor",
        "id": "res2",
        "resistance": {
          "default": 100,
          "min": 10,
          "max": 1000
        },
        "netlist": {
          "t1": "vdd",
          "t2": "n1"
        }
      },
      {
        "type": "nmos",
        "id": "m2",
        "m(l)": {
          "deafult": 1.5,
          "min": 1,
          "max": 2
        },
        "netlist": {
          "drain": "n1",
          "gate": "vin",
          "source": "vss"
        }
      }
    ]
  };
let top3= {
    "id": "top2",
    "components": [
      {
        "type": "resistor",
        "id": "res3",
        "resistance": {
          "default": 100,
          "min": 10,
          "max": 1000
        },
        "netlist": {
          "t1": "vdd",
          "t2": "n1"
        }
      },
      {
        "type": "nmos",
        "id": "m3",
        "m(l)": {
          "deafult": 1.5,
          "min": 1,
          "max": 2
        },
        "netlist": {
          "drain": "n1",
          "gate": "vin",
          "source": "vss"
        }
      }
    ]
  };
class topPool {
	constructor(top){
		this.topologies = [];
		this.topologies[0] = top;	
	}	
/*******************************************************************
 * addTop v1.1: 
 * add new topologies to the pool
 * v1.1 => check topology to see if it's already on the pool
 * if exist then overwite the current one
 * This step to assure that id is unique key
*******************************************************************/
	addTop(top)
	{
		let index = 0;
		if((index = this.isTopExist(top.id))== -1)
			this.topologies.push(top)	
		else
			this.topologies[index] = top;
	}
/*******************************************************************
 * removeTop v1.0: 
 * remove the givin topologyies based on the given id
 * topId must be string
*******************************************************************/
	removeTop(topId) {
	  let i = 0;
	  while (i < this.topologies.length) {
		if (this.topologies[i].id === topId) {
			console.log("removing topology with topology id = ", topId );
		  this.topologies.splice(i, 1);
		} else {
		  ++i;
		}
	  }
	}
/*******************************************************************
 * showAllTop v2.0
 * return array of topologies id that reside in the memory
*******************************************************************/
	showAllTop(){
		let topsId = [];
		for(let top of this.topologies)	
		{
			topsId.push(top.id)	
		}
		return topsId;
	}
/*******************************************************************
 * showCompInTop v1.0
 * Given topology id it will return array of components
 * containing components id and type
*******************************************************************/
	showCompInTop(topId){
		let compId = [];
		let index = 0;
		if((index = this.isTopExist(topId)) == -1)
			return "not found";
		for(let comp of this.topologies[index].components)
		{
			compId.push(comp.id);
		}
		return compId;
	}
/*******************************************************************
 * showDevicesConectToNet v1.0
 * given topologyId and node return all devices that are attached
 * to this node
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
		for(let comp of this.topologies[index].components)
		{
			for(let terminal in comp.netlist)
			{
				console.log(terminal)
				if(comp.netlist.hasOwnProperty(terminal)&&comp.netlist[terminal] == node){
					attachedDevicesId.push(comp.id);
					break;
				}
			}
		}
		//check if there are connected deviced or not 
		return attachedDevicesId;
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
let myPool = new topPool(topologyJson);
myPool.addTop(top2);
console.log(myPool.showAllTop());
console.log(myPool.showCompInTop("top2"));
myPool.addTop(top3);
console.log(myPool.showAllTop());
console.log(myPool.showCompInTop("top2"));
console.log(myPool.showDevicesConectToNet("top1", "t1"));

