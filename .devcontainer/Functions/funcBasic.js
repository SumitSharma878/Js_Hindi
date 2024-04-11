 function addTwoNumber(num1,num2){
    console.log(num1+num2);
    
 }
 //addTwoNumber(3,5);
// const result =addTwoNumber(3,5);
 // console.log("Result :",result)
 /* function addTwoNumber(num1,num2){
    return num1+num2;
    
 }
 const result =addTwoNumber(3,5);
 console.log("Result :",result)
 */
/*
 function loginUserMessg(username){
    if(username===undefined){
        console.log("please enter your good name")
        return;
    }
    return `${username}just logged in`
 } 
 console.log(loginUserMessg());
 console.log(loginUserMessg("sumit sharma ")); */
/*
 // ... is rest mtlb ab jitna data denge sb lega
 function calculateCartPrice(...num){
    return num;
 }
 console.log(calculateCartPrice())
 //console.log(calculateCartPrice(200,500,600,700,3847))
 
 function calculateCartPrice(val1,val2,val3,...num){
    return num;
 }
 console.log(calculateCartPrice(100,200,300,400,500,600,700));// 100 gya val1 me 200 gya val2,300 gya val3

*/

const user ={
    username :"sumit",
    price :1099
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);