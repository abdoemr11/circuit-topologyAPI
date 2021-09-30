# TopologyAPI Documentaion

## readJSON(jsonFile)
 *  Read Topology from a given JSON file and store it in the memory pool.
 *  In case that file is not found it will output error  message.
 *  In case that there is a topology with the same id in the pool it will be overwriten with the new one.
 * Return `true` in case of sucess and return `false` otherwise.

## writeJSON(topologyId, jsonFile)
 *  output a topology from the pool to JSON file.
 *  future modification may include saving the file by its id.
 * Return `true` in case of sucess and return `false` otherwise.

##  deleteTopology(topologyId)
 * Delete topology from the memory pool.
 * if exist delete it and return `true`.
 * if not raise an error message and return `false`.

##  queryTopologies()
 * Retrive `topologiesList` from the memory pool.
 * Infrom the user if the pool is empty and return `-1`.

## queryDevices(topologyID)
 * Retrive `devicesList` that are in certain topology.
 * If failed return `-1`.

##  querydeviceswithnetlistnode(topologyID, netListNodeId)
 * Retrive `devicesList` that are connected to a certain node in a given topology.

 * Return `-1` otherwise.
