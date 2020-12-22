var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn1 = document.querySelector(".btn");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function setRandomColor(){
	//var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	return color;
}

btn1.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

