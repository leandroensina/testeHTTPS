let option = null;
let sensorConstructor = null;

sensorConstructor = window.Accelerometer;

options = {
    frequency: 60
};

if (!sensorConstructor) {
    document.querySelector("#mensagem").value = "Sem suporte";
    return;
}

let sensor = new sensorConstructor(options || {});

sensor.onreading = () => {
	function round(number, precision) {
        let factor = 10 ** precision;
        return Math.round(number * factor) / factor;
    }

	document.querySelector("#x").value = sensor.x;
	document.querySelector("#y").value = sensor.y;
	document.querySelector("#z").value = sensor.z;
	
}
