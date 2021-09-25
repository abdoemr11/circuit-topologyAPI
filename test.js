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
class topPool {
	constructor(top){
		this.topologies = [];
		this.topologies[0] = top;	
	}	
	addTop(top)
	{
		this.topologies.push(top)	
	}

	removeTop(topId) {
	  var i = 0;
	  while (i < arr.length) {
		if (arr[i] === value) {
		  arr.splice(i, 1);
		} else {
		  ++i;
		}
	  }
	  return arr;
	}
}
let myPool = new topPool(topologyJson);

console.log(myPool.topologies[0].id);
myPool.addTop(top2);
console.log(myPool.topologies[1].id);
//topologObject = JSON.parse(topologyJson);


