let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e => 
	document.querySelector("#x").value = accelerometer.x;
	document.querySelector("#y").value = accelerometer.y;
	document.querySelector("#z").value = accelerometer.z;
});
accelerometer.start();