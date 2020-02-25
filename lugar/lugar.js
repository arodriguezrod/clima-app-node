const axios = require('axios');

//const clima = require('../clima/clima.js');



const getLugarLatLng = async (dir) => {


	const encodedUrl = encodeURI( dir );
	
	const instance =  axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
	  headers: {'x-rapidapi-key': '46e68725acmshd17402bd2dbc022p1054c5jsn742d9dad337b'}
	});

	const resp = await instance.get();

	if( resp.data.Results.length === 0  ){
		throw new Error(`No hay resultados para ${ dir }`);
	}


	const data = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;


	return {
		direccion,
		lat,
		lng,

	}
}


module.exports = {
	getLugarLatLng
}