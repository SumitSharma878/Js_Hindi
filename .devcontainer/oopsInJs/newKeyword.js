/*function multiplyBy5(num){
    // this.num =num krta tb  {} parenthesis m referene store hoti or ye dikhta ni h qki iska reference lena pdta h use krna pdta h
    return num*5;
}
// function object v h function function v h jis trh se chahe aap use kr skte h
// array ->object ->null  
// string ->object ->null javascript har chij ko ekdm depth m le jati h
multiplyBy5.power=3;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) // jb .prototype bolte h tb kch bydefault context set hote h
// prototype internal property v deti h to function ki v kch internal property hogi 
 // {} by default kch context set hota h ye uss method ka this h

 */

 // important for interview
 function createUser(username,score){
       this. username=username
        this.score=score
 }
createUser.prototype.increment =function(){
    this.score++;  // jisne v bulaya  h uska bada do 
}
   createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`)
   }

   //const chai = createUser("chai",233) // type error remove krne k liye new use krenge
   //const tea = createUser("tea",45)
  const chai =new createUser("chai",233) // type error remove krne k liye new use krenge
  const tea = new createUser("tea",45)
  chai.increment();// TypeError: Cannot read properties of undefined (reading 'increment')
  chai.printMe();

  /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/