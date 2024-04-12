/*// falsy  values
false, 0 , -0 ,BigInt 0n, "",null,undefined,Nan
*/
/* truthy Value
"0",'fasle'," ", [],{},function(){}
*/
const userEmail =[]
if(userEmail.length===0){
    console.log("arrys is empty")
}
const emptyobj ={};
if(Object.keys(emptyobj).length===0){
console.log("obj is empty")
}

// Nullish Caolescing operator (??):null undefined
let val1;
val1 =5?? 10;
  val1 =null ?? 500;
  val1 =null ?? undefined
  val1=undefined?? null
  val1 =undefined?? 80
  val1 =null ?? 60?? 900

  // terniary operator 
  // condition ?true:false

console.log(val1)