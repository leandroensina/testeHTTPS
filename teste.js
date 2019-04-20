window.addEventListener("devicemotion", accelerometerUpdate, true);

function accelerometerUpdate(event) {
   var aX = event.accelerationIncludingGravity.x*10;
   var aY = event.accelerationIncludingGravity.y*10;
   var aZ = event.accelerationIncludingGravity.z*10;

   document.querySelector("#x").value = aX;
   document.querySelector("#y").value = aY;
   document.querySelector("#z").value = aZ;

}


/*
let option = null;
let sensorConstructor = null;

sensorConstructor = window.Accelerometer;
document.querySelector("#mensagem").value = "ALO 1";
options = {
    frequency: 60
};

if (!sensorConstructor) {
    document.querySelector("#mensagem").value = "Sem suporte";
}

let sensor = new sensorConstructor(options || {});

sensor.onreading = () => {
	
	document.querySelector("#x").value = sensor.x;
	document.querySelector("#y").value = sensor.y;
	document.querySelector("#z").value = sensor.z;
	
}
*/
