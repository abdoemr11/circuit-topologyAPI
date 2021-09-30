const topAPI = require("../topologyAPI");
const jsonIO = require("../jsonio");
let top2 = jsonIO.jsonReader("./topologies/topology2.json");
let top1 = jsonIO.jsonReader("./topologies/topology.json");
top2.id = "top5";
test(" Test the normal operation", () =>{
	expect(topAPI.readJSON("./topologies/topology.json")).toBe(true);
	
	expect(topAPI.readJSON("./topologies/topologyWithtop1id.json")).toBe(true);
	expect(topAPI.writeJSON( "top1","./topologies/test1.json")).toBe(true);
	expect(topAPI.queryTopologies()[0]).toStrictEqual(top1)
	expect(topAPI.deleteTopology("top2")).toBe(false);
	expect(topAPI.queryTopologies()[0]).toStrictEqual(top1)
	expect(topAPI.deleteTopology("top1")).toBe(true);
	expect(topAPI.readJSON("./topologies/topology.json")).toBe(true);
	expect(topAPI.queryDevices("top1")).toStrictEqual(top1.components);
	expect(topAPI.queryDevicesWithNetListNode("top1","n1")).toStrictEqual(top1.components);
});
test("Test the abnormal operation", () =>{
	
	expect(topAPI.deleteTopology("top1")).toBe(true);
	expect(topAPI.queryTopologies()).toBe(-1);
	expect(topAPI.readJSON("./topologies/topology.json")).toBe(true);
	expect(topAPI.readJSON("./topologies/wrongName.json")).toBe(false);
	expect(topAPI.readJSON("./topologies/wrongTop.json")).toBe(false);
	expect(topAPI.readJSON("./topologies/wrongComp.json")).toBe(false);
	expect(topAPI.readJSON("./topologies/wrongComp0.json")).toBe(false);
	expect(topAPI.writeJSON( "top1","./wrongCategory/test1.json")).toBe(false);
	expect(topAPI.writeJSON( "top5","./wrongCategory/test1.json")).toBe(false);
	expect(topAPI.readJSON("./topologies/topology2.json")).toBe(true);
	expect(topAPI.queryTopologies()[0]).not.toStrictEqual(top2);
	expect(topAPI.queryDevices("top10")).toBe(-1);
	expect(topAPI.queryDevicesWithNetListNode("top10","n1")).toBe(-1);
	expect(topAPI.queryDevicesWithNetListNode("top1","nonet")).toBe(-1);
	expect(topAPI.deleteTopology("top2")).toBe(true);
})
