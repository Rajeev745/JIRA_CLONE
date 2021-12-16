let ball=document.querySelector(".ball");
let main=document.querySelector(".outer");
let box=document.querySelector(".box");
let outer=main.getBoundingClientRect();
let x=true;
let y=true;
let buttons=document.querySelector(".buttons");
let lost=document.querySelector(".lose")


function move(box,val){
    let boxmove=box.getBoundingClientRect();
    if(boxmove.left+val>=outer.left && boxmove.right+val<=outer.right){
        box.style.left=boxmove.left+val+"px";
    }
    
}


function movebox(e){
    if(e.key == "ArrowLeft"){
        move(box,-window.innerWidth*0.05)
    } else if(e.key == "ArrowRight"){
        move(box,window.innerWidth*0.05)
    }
}

document.addEventListener("keydown",movebox)



function movement(){
let ballmove=ball.getBoundingClientRect();
let ballleft=ballmove.left;
let balltop=ballmove.top;
let ballbottom=ballmove.bottom;
let ballright=ballmove.right;
let boxmove=box.getBoundingClientRect();
let boxtop=boxmove.top;
let boxleft=boxmove.left;
let boxbottom=boxmove.bottom;
let boxright=boxmove.right;

if(ballleft<=outer.left||ballright>=outer.right){
    x=!x
}

if(balltop<=boxtop && ballbottom+20>=boxbottom && ballleft+40>=boxleft && ballright-40<=boxright||balltop<=outer.top){
    y=!y
}
if(ballbottom>=outer.bottom){
    
   lost.style.display="flex"
   return;
}

if(y==true){
    ball.style.top=balltop+2+"px"
}else{
    ball.style.top=balltop-2+"px"
}
if(x==true){
    ball.style.left=ballleft+2+"px"
}else{
    ball.style.left=ballleft-2+"px"
}


requestAnimationFrame(movement)

}
requestAnimationFrame(movement);

function refresh(){
    document.location.reload();
}


buttons.addEventListener("click",refresh)
