/*// slice and splice
const arr= [1,2,3,89,"sumit"]
console.log("A",arr);
const myArr = arr.slice(1,3); // slice vo show krega jo uss indx pr hoga 
console.log("B",myArr);
const myArr1 = arr.splice(1,3);
 console.log("spliced arr", myArr1);
 console.log("A",arr);  // original arr se spliced wala portion nikl jata h
*/
 // array Methods
  const ar1=[1,2,3,4,5,6];
  const ar2=[11,14,88];
//   ar1.push(ar2);
//   console.log(ar1)
 /*  const ar3=ar1.concat(ar2);
   console.log(ar3);
    const spreadValue=[...ar1,...ar2];  // prefer this over concat
    console.log(spreadValue); */

    // remove the array from inside the arr
    /* const AnotherArr= [1,3,4,[4,6,6,[7,8,9,22,44,[8,0,1,2]]]]
     const realAnotherArr =AnotherArr.flat(Infinity)
     console.log(realAnotherArr)
*/
// to check the coming value is arr or not
      console.log(Array.isArray("sumit"));
      console.log(Array.from("sumit"));
      console.log(Array.from({name :"sumit"})); // interesting for interview
       
      let score1=100;
      let score2=200;
      let score3=400;
      console.log(Array.of(score1,score2,score3))
      
