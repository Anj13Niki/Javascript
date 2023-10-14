const arr = [4,5,6,7];

const nums = new Array("Anjali",6,21);
console.log(nums);

nums.push(3);
nums.push(0);
console.log(nums);
// [ 'Anjali', 6, 21, 3, 0 ]  -> push() add element at end
nums.pop();
console.log(nums);
// [ 'Anjali', 6, 21, 3 ] -> pop() remove element from end
nums.unshift(8);
nums.unshift(9);
console.log(nums);
// [ 9,8, 'Anjali', 6, 21, 3 ] -> unshift() method add element at start

nums.shift();
console.log(nums);
// [ 8, 'Anjali', 6, 21, 3 ] ->shift() method remove element from start

console.log(nums.includes(21));
// true
console.log(nums.includes(29));
// false


// ******************************************DIFFERENCE BETWEEN SLICE() AND SPLICE()************************************************



const a = [1,2,4,5,6,7,0];
console.log("A-> "+a);
const newa = a.slice(1,3);
console.log(newa);
console.log("B-> "+a);

const othera = a.splice(1,3);
console.log(othera);
console.log("C-> "+a);

// A-> 1,2,4,5,6,7,0
// [ 2, 4 ]
// B-> 1,2,4,5,6,7,0
// [ 2, 4, 5 ]
// C-> 1,6,7,0


console.log(Array.isArray("Anjali"));
// false
console.log(Array.from("Anjali"));
// [ 'A', 'n', 'j', 'a', 'l', 'i' ]
console.log(Array.of(1,2,3));
// [ 1, 2, 3 ]