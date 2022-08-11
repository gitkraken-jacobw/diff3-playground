const { diff2Merge, diff3Merge } = require("../diff3/diff3");
const fs = require("fs");
const deepEqual = require("deep-equal");

const readFileToLines = file => fs.readFileSync(file).toString().split("\n");

console.log(diff2Merge(readFileToLines("RecordTypes.cls-a"), readFileToLines("RecordTypes.cls-b")));
