class User {
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
   static createId(){ // static krne k bad kisi ko access krne ni dega
        return `12345`
    }
 }
   const sumit = new User("SumitSharma")
    // console.log(sumit.createId())

    class Teacher extends User {
        constructor(username,email){
            super(username)
            this.email =email;
        }
    }
    const iphone = new Teacher("iphone","i@phone.com")
     console.log(iphone.createId())