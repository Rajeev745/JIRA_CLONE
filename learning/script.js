// var a1=document.querySelector(".btn-1")
// console.log(a1)
// var a2=document.querySelector(".btn-2")
// console.log(a2)
// var a3=document.querySelector(".btn-3")
// console.log(a3)
for(var i=0;i<10;i++){
    console.log(i);
}

function fun(){
    console.log("hello")
}
function Irecieve(name,fun){
    console.log(name);
    fun()
}
Irecieve("hello js",fun)