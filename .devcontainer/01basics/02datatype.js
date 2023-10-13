"use strict";    
// treat all js code as a newer version

// ***********************************************DATATYPES***************************************************

let fanme ="Anjali";
let age = 21;
let isLogin = true;

let s = "21";

let num = Number(s);
let sc = "21adi";
// String Type
console.log(typeof(s));
// Integer type
console.log(typeof(num));

// null type is object
console.log(typeof(null));

// symbol type
console.log(typeof(Symbol(fanme)));

// type is bigint
console.log(typeof 234567890123456789012345678901234567890n );

// Collection of data in key-value pairs

var obj1 = {
    x:  43,
    y:  "Hello world!",
    z: function(){
       return this.x;
    }
 }
      
 console.log(obj1);
//  { x: 43, y: 'Hello world!', z: [Function: z] }

 // Collection of data as an ordered list
     
var array1 = [5, "Hello", true, 4.1];

console.log(array1);
// [ 5, 'Hello', true, 4.1 ]

console.log(typeof(sc));

// type of sc number
console.log(typeof(Number(sc)));
// value of sc is NAN
console.log(Number(sc))

console.log(typeof(""));
// String

console.log(Boolean(""));
// false


let Num = 17;
let stringnumber = String(Num);
console.log(stringnumber);
// string type
console.log(typeof(stringnumber));


// ***********************************************OPERATIONS***************************************************

console.log("1"+2);
// 12
console.log(1+"2");
// 12
console.log("1"+2+2);
// 122
console.log(typeof("1"+2+2));
// string


console.log(1+2+"2");
// 32
console.log(typeof(1+2+"2"));
// string

console.log(null==0);
// false;
console.log(null>0);
// false
console.log(null>=0);
// true


console.log(undefined==0);
// false
console.log(undefined>0);
// false
console.log(undefined>=0);
// false

console.log("2"==2);
// true because only values are compared
console.log("2"===2);
// false because with values data type is also compared