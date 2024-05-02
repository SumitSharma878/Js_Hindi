 /*const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // db calls,cryptography ,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // bina iske promise consumed ni hoga
    },1000)
})
  
     promiseOne.then(function(){
        console.log("promise consumed");
     })

    //  second type se v kr skte h 

    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Async task 2")
            resolve();
        },1000)
    }).then(function(){
        console.log("Async 2 resolved")
    })
       // promise three
       const promiseThree =new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username:"sumit",email:"chaiSumit@gmail.com"})
        },1000)
       })
       promiseThree.then(function(user){
        console.log(user)
       })
     
       // promise four
      const promiseFour =new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=false;
            if(!error){
                resolve({username:"sumitSharma",password:"12345klj"})
            }else{
                reject('Error : Something went wrong')
            }
        },1000)
      })
      promiseFour.then((user)=>{
        console.log(user)
        return user.username
      }).then((username)=>{
        console.log(username)

      }).catch(function(error){
        console.log(error)
      })

      promiseFour.then((user)=>{
        console.log(user)
        return user.username
      }).then((username)=>{
        console.log(username)

      }).catch(function(error){
        console.log(error)
      }).finally(()=>console.log("The promise is either resolved or rejected"))

      // c
      const promiseFive = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error =true;
            if(!error){
                resolve({username:"JavaScript",password:"12345klj"})
            }else{
                reject('Error : Js went wrong')
            }
        },1000)
      })

      async function consumepromiseFive (){
       try {
        const response = await promiseFive
        console.log(response)
       }catch(error){
        console.log(error)
       }
      }
      consumepromiseFive()
  */
      async function getAllUsers(){
        try{
            const response =await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            console.log(data)
        }catch(error){
            console.log("E: ",error)
        }
      }
      getAllUsers()
      fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))