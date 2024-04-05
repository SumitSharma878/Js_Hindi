/*primitive - 
String ,Number ,boolean,undefined,Symbol,BigInt,null
*/
// js is dynamic lang
 const id =Symbol('1478')
 const anotherId= Symbol('1478');
  console.log(id==anotherId);
/* Non-primitive (reference)
 array,objects,Function
*/
  const arr = ["sumit","suuu","jfklsf"];
  let myobj ={
    name :"Golue"
    
  }
   const myFunction =function(){
    console.log("hello world")
   }
   console.log(typeof null); // null is object when print
   console.log(typeof undefined); // undefined hi aaega
   console.log(typeof myFunction);// object function