 function SetuserName(username){
    this.username =username
    console.log("called")
 }

 function createUser(username,email,password){
   //SetuserName(username)//  iska reference hold krna pdega qki call to lag rha h fir khtm ho ja rha h
   SetuserName.call(this,username)

    this.email=email;
    this.password=password;
 }

 const chai =new createUser("chai","chai@gmail","48739743")
 console.log(chai)