var colorbtn1=document.querySelector("#btnr")
var colorbtn2=document.querySelector("#btnb")
var colorbtn3=document.querySelector("#btny")
var colorbtn4=document.querySelector("#btng")
var colorbtn5=document.querySelector("#btnreset")
colorbtn1.addEventListener("click",fun1)
colorbtn2.addEventListener("click",fun2)
colorbtn3.addEventListener("click",fun3)
colorbtn4.addEventListener("click",fun4)
colorbtn5.addEventListener("click",fun5)

var col=["red","blue","green","yellow"]

var tiger=document.querySelectorAll(".circle");
for(var i=0;i<tiger.length;i++){
    var ran=Math.floor(Math.random()*4)
    tiger[i].style.background=col[ran];
}


function fun1() {
    for(var i=0;i<tiger.length;i++){
      if(tiger[i].style.background!=="red"){
            tiger[i].style.visibility="hidden"
        }else{
            tiger[i].style.visibility="visible"
        }
   }
}
function fun2() {
        for(var i=0;i<tiger.length;i++){
        if(tiger[i].style.background!=="blue"){
            tiger[i].style.visibility="hidden"
        }else{
            tiger[i].style.visibility="visible"
        }
   }
}
function fun3() {
    for(var i=0;i<tiger.length;i++){
        if(tiger[i].style.background!=="green"){
            tiger[i].style.visibility="hidden"
        }else{
            tiger[i].style.visibility="visible"
        }
   }
}
function fun4() {
    for(var i=0;i<tiger.length;i++){
        if(tiger[i].style.background!=="yellow"){
            tiger[i].style.visibility="hidden"
        }else{
            tiger[i].style.visibility="visible"
        }
   }
}
function fun5() {
    for(var i=0;i<tiger.length;i++){
        tiger[i].style.visibility="visible"
}
    }
