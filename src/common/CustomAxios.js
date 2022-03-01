import axios from "axios";

export function getAxios(url, callback) {
	console.log(`Request GET [url='${url}']`);
	
	axios(
		{
			url: url,
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			withCredentials: false,
		}
	).then(function (response) {
		console.log(`Response GET [${response.data}]`);
		
		callback(response.data);
	});
}

export function postAxios(url, data, callback) {
	console.log(`Request POST [url='${url}'][data='${data}']`);
	
	axios(
		{
			url: url,
			method: "POST",
			data: data,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			withCredentials: false,
		}
	).then(function (response) {
		console.log(`Response POST [${response.data}]`);
		
		callback(response.data);
	});
}