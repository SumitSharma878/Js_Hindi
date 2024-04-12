const arr=[1,2,3,4,8]
for (const a of arr) {
    console.log(a)
}
const greetings= "Hello World!"
for (const greet of greetings) {
    console.log(`${greet}`)
}

// Maps
const map=new Map();
map.set('in',"india")
map.set('aus',"austrailia")
map.set('us',"america")
console.log(map);
for(const key of map){
    console.log(key)
}
for(const [key,value ]of map){
    console.log(key,':-', value)
}