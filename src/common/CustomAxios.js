import axios from "axios";

export function getAxios(url, callback) {
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
		callback(response.data);
	});
}

export function postAxios(url, data, callback) {
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
		callback(response.data);
	});
}