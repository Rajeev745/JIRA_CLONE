// function global(x) {
//     function a(){
//         console.log(x);

//     }
//     return a;
// }

// var close=global(10);
// console.log(close);
// close()

// for(var i=1;i<=10;i++){
//     setTimeout(function () {
//         // console.log(i); 
//         function a(i) {
//              console.log(i)
//         }
//         a(i)
//     },i*1000)
// }
// console.log(i);

function close(a,b,c,d,e) {
    var sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];

    }
    console.log(sum);
    
}
close(1,2,3,4,5,6,7,8,9,10)