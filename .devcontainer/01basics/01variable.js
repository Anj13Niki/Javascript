const ame = "Anjali";
let n = "Anjali"
var na = "Anjali";
fname = "Anjali";
let lname;

// name="Nikita" reinitialization not allowed in const

// prefer not to use var in block and functional scope

n="Nikita";
na="Nikita"
fname="Nikita";

console.table([ame,n,na,fname,lname])


// ┌─────────┬───────────┐
// │ (index) │  Values   │
// ├─────────┼───────────┤
// │    0    │ 'Anjali'  │
// │    1    │ 'Nikita'  │
// │    2    │ 'Nikita'  │
// │    3    │ 'Nikita'  │
// │    4    │ undefined │
// └─────────┴───────────┘