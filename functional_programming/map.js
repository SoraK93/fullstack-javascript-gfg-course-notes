/**
 * key types
 * key order
 * size
 * iteration
 * performance (insertion, deletion)
 */


const newMap = new Map();
newMap.set(10, 'value will be here');
newMap.set(20, 'amazing');
// Can even have empty object as key like below
// newMap.set({}, 'value will be here');
console.log(newMap.get(10)); // gets the value of specified key
// newMap.delete(10);
console.log(newMap);
console.log(newMap.size);
console.log(newMap.keys());
console.log(newMap.values());
newMap.forEach((value) => console.log(value));
console.log(newMap.has(10));
console.log(newMap.has(12));

