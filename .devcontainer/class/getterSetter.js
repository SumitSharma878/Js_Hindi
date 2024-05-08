class User {
    constructor(email,password){
        this.email =email;
        this.password =password;
    }
    get password(){
        return this._password.toUpperCase(); //`${this._password}sumit`
    }
    set password(value){
          this._password =value
    }
}
 

const sumit = new User("sumit@gmail.com","ab898c")
console.log(sumit.password)