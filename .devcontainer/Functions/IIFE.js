// immediately Invoked Function Expression () jo func immediately excute ho jaye
// global scope k pollution se problem hoti h kai bar to waha k varible ya  declaration ko remove krne k liye iifee ka usse kia
(function chai(){
    console.log(`Db connected`)
})(); // 
// ()() one for func defintion and one for func call
(function aur(){
    //named iife
    console.log(`Db three connected `)
})();
((name)=>{
    // unnamed iife
    console.log(`DB two connected ${name}`)
})('sumit')

