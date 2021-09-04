// document.getElementById('demo').innerHTML= "hello world JAI kumar";

// function test(){
//     var a = "3";
//     var b = "8";


//    [a, b] = [b, a];



//     console.log("a is" + a);
//     console.log("a is" + b);
// }

// test();


document.querySelector("nav-link").addEventListener("click", clikbtn());

function clikbtn(){
    // console.log("btnclike");
   alert("Hello JAI");
}

document.getElementById("btnclik").addEventListener("click", clikbtn());
 
function clikbtn(){
    alert("Click ok");
}

document.getElementById("btncliked").addEventListener("click", handleClick);

function handleClick(){
   console.log("Welcome JAI");
}