/*class user{
    constructor(username,email,password){
        this.username =username;
        this.email = email;
        this.password =password;
    }
    encryptPassword(){
        return `${this.password}abc`
      }
      changeUserName(){
        return `${this.username.toUpperCase()}`
      }
}

  const chai = new user("chai","chai@gmail.com","45840")
  console.log(chai.encryptPassword());
  console.log(chai.changeUserName()) */


  // behind the scence 
   function User(username,email,password){
    this.username =username;
    this.email = email;
    this.password =password;
}
 
User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}

User.prototype.changeUserName = function(){
  return `${this.username.toUpperCase()}`
}
   const tea= new User("tea","tea@yahoo.com","4234");
   console.log(tea.encryptPassword())

   