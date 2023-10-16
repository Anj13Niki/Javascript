const user ={
    name:"Anjali",
    mesage:function(){
        console.log(`${this.name},Welcome Back!`);
    }
}
user.mesage();
// Anjali,Welcome Back!
user.name="Nikita";
user.mesage();
// Nikita,Welcome Back!

console.log(this);
// {}

const greet=function(){
    let name = "Anju";
    console.log(this.name);
}
greet()
// undefined


const hello=(n1,n2)=>{
    let n3=n1+n2;
    console.log(this.n3)
}
hello();
// undefined