var isLightOn = false;

function ToggleLight()
{
	if(isLightOn == false) {
		document.getElementById('lightBulb').src="img/bulb-on.png";
     isLightOn = true;
	}else{
		document.getElementById('lightBulb').src="img/bulb-off.png";
		isLightOn = false;
	}
}
var res = 0;
function AddNumbers(){
	var res= 10+20;
	document.getElementById('numbers').innerHTML = res;
}
