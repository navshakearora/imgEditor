(function() {
	"use strict";
console.log("SEAF has fired");	

 var rightSide = document.queryselector("#rightSide");
 var chngImg = document.queryselector("#chngImg");


  
  function blur(){
  	 img.style.webkitFilter = "blur(20px)";
  	}
  	 function grayscale(){
  	 img.style.webkitFilter = "grayscale(60%)";
  	}
  	function contrast(){
  	 img.style.webkitFilter = "contrast(60%)";
  	}
 	function brightness(){
  	 img.style.webkitFilter = "brightness(0.4)";
  	}
  	function hue(){
  	 img.style.webkitFilter = "hue-rotate(90deg)";
  	}
  	function blackwhite(){
  	 img.style.webkitFilter = "grayscale(100%)";
  	}
  	function rotate(){
  	 img.style.webkitFilter = "rotate(180deg)";
  	}
  	function sepia(){
  	 img.style.webkitFilter = "sepia(100%)";
  	}

  //listeners

  button.addEventListener("click", Blur, false);
  button.addEventListener("click", greyscale , false);
  button.addEventListener("click", contrast , false);
  button.addEventListener("click", brightness , false);
  button.addEventListener("click", hue , false);
  button.addEventListener("click", blackwhite , false);
  button.addEventListener("click", rotate , false);
  button.addEventListener("click", sepia , false);

})();