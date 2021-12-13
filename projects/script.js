var plusbtn=document.querySelector(".plus")
var close=document.querySelector(".cross")
// var closebtnarr=document.querySelectorAll(".icon3")
// var minimizeicons=document.querySelectorAll(".icon1")

function plusbtnclick(){
    alert("HELLO ");
    if(document.querySelector(".dialog").style.display!=="flex"){
        document.querySelector(".dialog").style.display="flex";
 }
    else{
        document.querySelector(".dialog").style.display="none";}}


plusbtn.addEventListener("click",plusbtnclick)

function dialogbtnclick(){
    document.querySelector(".dialog").style.display="none"
}
function adddeletelogic(){
    var closebtnarr=document.querySelectorAll(".icon3")
    var minimizeicons=document.querySelectorAll(".icon1")
    



function closeTicket(e){
    var box=e.target.closest(".box");
    console.log(box)
    box.style.display="none"
}
for(let i=0;i<closebtnarr.length;i++){
    const closebtn=closebtnarr[i];
    closebtn.addEventListener("click",closeTicket)

}

function minimize(e){
    var box=e.target.closest(".box");
    console.log(box)
    if(box.querySelector("main").style.display !=="none"){
        box.querySelector("main").style.display="none"
    }else{
        box.querySelector("main").style.display="block"
    }

}
for(let i=0;i<minimizeicons.length;i++){
    const closebtn=minimizeicons[i];
    closebtn.addEventListener("click",minimize)

}
}



// var coloursbtnarr=document.querySelectorAll(".colourclass")
// function changecolor(){
//     console.log("hello");
//     document.querySelector(".changecolour10").style.background="cadetblue"
// }

// for(let i=0;i<coloursbtnarr.length;i++){
//     const coloursbtn=coloursbtnarr[i];
//     coloursbtn.addEventListener("click",changecolor)
// }


var color1=document.querySelector("#col1")
function changecolor1(){
    var tiger=document.querySelectorAll(".helicopter");
    for(let i=0;i<tiger.length;i++){
        tiger[i].style.background="cadetblue"

    }
}
color1.addEventListener("click",changecolor1);


var color2=document.querySelector("#col2")
function changecolor2(){
   var lion= document.querySelectorAll(".helicopter")
   for(let i=0;i<lion.length;i++){
       lion[i].style.background="lightgreen"
       lion[i].style.color="red"
   }
}
color2.addEventListener("click",changecolor2)
var color3=document.querySelector("#col3")
function changecolor3(){
    var leopard=document.querySelectorAll(".helicopter")
    for(let i=0;i<leopard.length;i++){
        leopard[i].style.background="lightcoral"
    }
}
color3.addEventListener("click",changecolor3)
close.addEventListener("click",dialogbtnclick)
function addTicket(){
    dialogbtnclick()
    var boxes=document.querySelector(".wrapper main")
    var oldHTML=boxes.innerHTML;
    var boxcontent=document.getElementById("title2");
    var title=document.getElementById("title")
    boxes.innerHTML=oldHTML+`<div class="box">
    <header>
        <div class="boxpro">
            <div class="heading1" style="font-size: 1.5rem; margin: 10px 0px; text-align: center;">${title.value}
            </div>
            <div class="box1" style="margin-left: auto;">
                <div class="icon1">-</div>
            </div>
            <div class="box1">
                <div class="icon2">E</div>
            </div>
            <div class="box1">
                <div class="icon3">X</div>
            </div>
    </header>
    <main><textarea class="helicopter" name="" id="" cols="30" rows="10">${boxcontent.value}</textarea></main>
</div>
`
title.value=``
boxcontent.value=``
adddeletelogic();

}
