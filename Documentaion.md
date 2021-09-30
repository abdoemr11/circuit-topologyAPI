#TopologyAPI Documentaion

 ##readJSON(jsonFile)
 *  Read Topology from a given JSON file and store it in the memory pool
 *  In case that file is not found it will output error  message
 *  In case that there is a topology with the same id in the pool it will be overwriten with the new one
 * Return `true` in case of sucess and return `false` otherwise.
