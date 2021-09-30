# TopologyAPI
Javascript module to deal with electronic circuit topology.

## Why Javascript
I used js with nodejs runtime because its native support for JSON files. No need to external libraries and wrappers. 

## Requirements
* nodejs >= 14.0
* Jest for unit testing >= 6.14.0
* JsLint for code analysis >= 0.12.0

## Documentaion
See [here](./Documentaion.md) for full documentaion.

## Code testing and analysis
* I used Jest for automatice testing. The test module reside in `__test__` folder.
Use `npm test` to run the test and use `npm test -- --coverage` to see how much the test module cover the code.

* I used JsLint to analyze the code and tried my best to make it follow the latest standard.
