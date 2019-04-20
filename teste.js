
function round(number) {
    let factor = 10 ** 3;
    return Math.round(number * factor) / factor;
}


navigator.permissions.query({name:'accelerometer'}).then(function(result) {
	  if (result.state == 'granted') {
		  if (Accelerometer) {
			   document.querySelector("#mensagem").value ="This device has an Accelerometer!";
			   const accelerometer = new Accelerometer({ frequency: 1 });
			   accelerometer.addEventListener("reading", () => {
				   document.querySelector("#x").value =accelerometer.x;
				   document.querySelector("#y").value =accelerometer.y;
				   document.querySelector("#z").value =accelerometer.z;
			   });
			   accelerometer.start();
			} else {
				document.querySelector("#mensagem").value ="This device does NOT have an Accelerometer!";
			}

	  document.querySelector("#mensagem").value ="acesso negado";
});


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
