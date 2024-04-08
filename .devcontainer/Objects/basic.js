// singleton -> koi v constructor se bnate h tb ek singleton obj bnta h literals ki trh krunga tb singleton nhi bnega


// object Literals
 const mySymbol = Symbol("key1")
 const JsUser = {
    name :"sumit" ,// jo marzi value h dijiye
    "full name":"sumitsharma ",  // is value ko dot se access ni kr skte h except square notation
   age :22,
   [mySymbol] :'myKey1', // symbol ko bina [] bracket k ni kr skte use
   mySymbol :"mykey1",// it is wrong string jaisa behave krega
    email : "sumitsharma@gmail.com",
     isLogin : false,
     lastLoginDays : ["mon","sat","sun"]

}
 /*//console.log(JsUser.isLogin)
console.log(JsUser["full name"])
console.log(JsUser["isLogin"]) */
/*
// for access symbol
 console.log( typeof JsUser.mySymbol);
 console.log( JsUser[mySymbol]);
*/
 // to change in obj
 JsUser.email ="sumit.chargpt.com";
 //Object.freeze(JsUser); // value ko change ni koi kr skta h freeze krne se
 JsUser .email ="sumitsharma@microsoft.com" // ye value ni aya print m kuki freeze ise pehle kr dia
 console.log(JsUser)

 // function 
 JsUser.greeting = function(){
    console.log("Hello Js Learner ")
 } 
 JsUser.greetingTwo  = function(){
    console.log(`Hello Js Learner,${this.name} `)
 } 
 console.log(JsUser.greeting())
 console.log(JsUser.greeting) // gives function return back
 console.log(JsUser.greetingTwo())
 console.log(JsUser.greetingTwo)


