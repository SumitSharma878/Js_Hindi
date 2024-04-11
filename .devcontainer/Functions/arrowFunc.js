/// this refers to current context under scope
// context ka mtlb h value ki varible kya hold kr rhe h
 const user = {
      username :"sumit",
      price :899,
      welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
       // console.log(this);
      }
 }
 /*
  user.welcomeMessage()
 user.username="Golu" // context yaha pr change kr diye n
 user.welcomeMessage();*/
 //console.log(this) // return  empty object browser k andr iska value window ata h
/*
 // this ko ab function k andr run krte h 
 function chai(){
    console.log(this)
 }
 chai()
 */
//  function name(){
//     let username="sumit"
//     console.log(this.username)
//  }
//  const name = function(){
//     let username="sumit"
//     console.log(this.username)
//  }
// name();

// arrow func
const chai = () =>{
    let username="sumit"
   // console.log(this.username)
   console.log(this)
}
 chai()
/// arrow func
//  const addtwo=(num1,num2)=>{
//     return num1+num2
//  }
//  console.log(addtwo(5,5))

// other way of arrow func
//const adtwo =(n1,n2)=>(n1+n2)
const two =(n1,n2)=>({username:"sumit"});
console.log(two)
//console.log(adtwo)