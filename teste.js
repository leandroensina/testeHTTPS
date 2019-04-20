let option = null;
let sensorConstructor = null;

sensorConstructor = window.Accelerometer;

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
