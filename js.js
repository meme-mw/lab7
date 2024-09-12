let red=document.querySelector("#stopLight");
let orange=document.querySelector("#slowLight");
let green=document.querySelector("#goLight");
let stop=document.querySelector("#stopButton");
let slow=document.querySelector("#slowButton");
let go =document.querySelector("#goButton");

// stop.addEventListener('click', function() {
//     console.log("m");
//     if(this.id=="stopLight"){
//         this.style.backgroundColor="red";
//     }
//     if(this.id="slowLight"){
//         this.style.backgroundColor="orange";
//     }
//     if(this.id="goLight"){
//         this.style.backgroundColor="green";
//     }
  
// });

stop.addEventListener('click', function() {
    red.style.backgroundColor="red";
    orange.style.backgroundColor="black";
    green.style.backgroundColor="black";
  });

  slow.addEventListener('click', function() {
    red.style.backgroundColor="black";
    orange.style.backgroundColor="orange";
    green.style.backgroundColor="black";
  });

  go.addEventListener('click', function() {
    red.style.backgroundColor="black";
    orange.style.backgroundColor="black";
    green.style.backgroundColor="green";
  });