// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// {a: 1 , b : 2, c: 3}    returns.  {1:"a", 2:"b", 3:"c"}

const keyValueSwap = function(object) {
  let swappedObject = {}
  for (let key in object) {
    let objectValue = object[key];
    swappedObject[objectValue] = key;
  }
  return swappedObject
}

const example = { 
  key1: "Value1",
  key2: "Value2"
}

console.table(keyValueSwap(example))