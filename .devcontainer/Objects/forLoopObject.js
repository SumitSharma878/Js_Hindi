/*const myobjects ={
    js:'javascript' ,
    cpp:'c++',
    rb:'ruby',
    py:'python'
}
 for (const key in myobjects) {
    // console.log(key)
    //console.log(myobjects[key])
    console.log(`${key} shortcut is for ${myobjects[key]}`);
 }
*/
/*
 // for each loop isme 
 const ar=["sumit","cpp",'python','java'];
 //ar.forEach(function (item){  // callback ka name ni hota h iske andr kch v parameter daal skte h
   // console.log(item)
 //})
 /*ar.forEach((val)=>{
    console.log(val)
 })*/

 /*function printMe(item){
    console.log(item)
 }
 ar.forEach(printMe)*/
/*
 ar.forEach((item,index,arr)=>{
    console.log(item,index,arr)
 })
*/
 //
 const myCoding =[
    {
        languageName:"java",
        languageFilename:"js",
    },
    {
         NickeName:'Golu',
         original:'sumit'
    },
    {

    }

]
 myCoding.forEach((item)=>{
   // console.log(item)
   console.log(item.languageFilename)
 })