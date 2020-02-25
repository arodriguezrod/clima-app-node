const axios = require('axios');


const getClima = async ( lat,lng ) => {


	const tiempo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=772c1af542ad5cc4cc456c41a56b22d2&units=metric`);


	return tiempo.data.main.temp;

}

module.exports = {
	getClima
}