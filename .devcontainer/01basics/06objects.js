
const mySym = Symbol("key1");

const user={
    fullname:"Anjali Rawat",
    age:21,
    [mySym]:"key2",
    gender:"female",
    city:"Lucknow",
    "email":"anjalirawat3443@gmail.com",
    isLogin:true,
    loginDays:["Monday","Tuesday","Thrusday"]
}
console.log(user.age);
console.log(user["email"]);
console.log(user["loginDays"][0]);
console.log(user.isLogin);
console.log(user[mySym]);

user.email = "anj17062002@gmail.com";
console.log(user["email"])
Object.freeze(user);
user.email ="anjalirawat3443@gmail.com"
console.log(user["email"])


obj1={1:"a",2:"b",1:"p"};
console.log(obj1[1]);
// p
obj2 = {3:"a",4:"b"};
obj3 = Object.assign(obj1,obj2);
console.log(obj3);
//obj3= { '1': 'p', '2': 'b', '3': 'a', '4': 'b' }


// obj3 = Object.assign({},obj1,obj2);
// objectName = Object.assign(target,source)
// spread operator -> obj3 = {...obj1, ...obj2}

console.log(Object.keys(obj3));
// [ '1', '2', '3', '4' ]
console.log(Object.values(obj3));
// [ 'p', 'b', 'a', 'b' ]
console.log(Object.entries(obj3));
// [ [ '1', 'p' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ] ]