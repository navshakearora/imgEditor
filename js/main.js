(function() {
  "use strict";
console.log("SEAF has fired");  

 var button1 = document.querySelector ("#blur");

 var button2 = document.querySelector ("#grayscale");

 var button3 = document.querySelector ("#contrast");

 var button4 = document.querySelector ("#brightness");

 var button5 = document.querySelector ("#hue");

 var button6 = document.querySelector ("#blackwhite");

 var button7 = document.querySelector ("#rotate");

 var button8 = document.querySelector ("#sepia");

 var chngImg = document.querySelector ("#chngImg");


  
  function blur(){
     chngImg.style.WebkitFilter = "blur(20px)";
    }
    function grayscale(){
     chngImg.style.WebkitFilter = "grayscale(50%)";
    }
    function contrast(){
     chngImg.style.WebkitFilter = "contrast(60%)";
    }
    function brightness(){
     chngImg.style.WebkitFilter = "brightness(150%)";
    }
    function hue(){
     chngImg.style.WebkitFilter = "hue-rotate(90deg)";
    }
    function blackwhite(){
     chngImg.style.WebkitFilter = "grayscale(100%)";
    }
    function rotate(){
     chngImg.style.WebkitTransform = "rotate(180deg)";
    }
    function sepia(){
     chngImg.style.WebkitFilter = "sepia(100%)";
     console.log("sepia called")
    }

  //listeners

  button1.addEventListener("click", blur, false);
  button2.addEventListener("click", grayscale , false);
  button3.addEventListener("click", contrast , false);
  button4.addEventListener("click", brightness , false);
  button5.addEventListener("click", hue , false);
  button6.addEventListener("click", blackwhite , false);
  button7.addEventListener("click", rotate , false);
  button8.addEventListener("click", sepia , false);

})();