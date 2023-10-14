const name = "Anjali";
const repoCount =50;
console.log(name+repoCount+" value");

// String Interpolation
console.log(`My name is ${name} and my repocount is ${repoCount}.`);

const gameName = new String("Anjaliar");
console.log(gameName.__proto__);
// output : {}

// if we are using substring then it will not consider neg val but if you are using slice then it will consider neg value

const newstr = gameName.substring(-6,4);
console.log(newstr);
// output: Anja

const anoStr = gameName.slice(-6,4);
console.log(anoStr);
// output : ja

// includes() method: checks whether specified substring is the part of string or not

console.log(gameName.includes('ali'));
// true
const gameName2 = new String("Anjaliar-niki");
console.log(gameName2.split('-'));
// [ 'Anjaliar', 'niki' ]