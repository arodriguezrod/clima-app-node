

const lugar = require('./lugar/lugar.js');

const clima = require('./clima/clima.js');


const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		descripcion: 'Direccion de la ciudad para obtener el clima',
		demand: true
	}
}).argv;

 //console.log(argv.direccion);
 //const zona = lugar.getLugarLatLng(argv.direccion);
//zona
	//.then( console.log );

//clima.getClima(41.389999,2.160000)
//	.then(console.log)
//	.catch( console.log );


const getInfo = async (direccion) => {

	
	try {
		const zona = await lugar.getLugarLatLng(direccion);
		const tiempo = await clima.getClima(zona.lat,zona.lng);

		return `El clima de ${ zona.direccion } es de ${ tiempo }`;

	} catch(e) {
		return `No se pudo determinar la temperatura de ${ direccion }`;
	}



	

	

}

getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);




