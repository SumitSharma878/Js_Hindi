//const tinderUser =new Object(); // this is singleton object
 const tinderUser ={}; //  this is non singleton object

 tinderUser.id =124;
 tinderUser.name ="Rohit"
  tinderUser.branch ="cse"
// console.log(tinderUser);

const regularUser ={
    email :"some@gmail.com",
    fullName :{
        userFullName :{
            firstName :"sumit",
            LastName : "sharma"
        }
    }
}
//console.log(regularUser.fullName.userFullName)

// merge the obj
const obj1={1:"q",2:6};
const obj2={3:"a",4:"bb"};
//const obj3 ={obj1,obj2};
//console.log(obj3);
//const obj3 =Object.assign(obj1,obj2);
//const obj4 =Object.assign({},obj1,obj2); // {} dena compulsory h 
//console.log(obj4);

// jada use niche wala hoga 
const obj3 ={...obj1,...obj2};
console.log(obj3);

// jB Data database se aega tb arr ho skta h object ka
const user =[
    {
        id :1244,
        email :"s@gmail.com"
    },
    {
        id :12442,
        email :"s@gmail.com"
    },
    {
        id :14 ,
        email :"s@gmail.com"
    }
    
]
user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'));
