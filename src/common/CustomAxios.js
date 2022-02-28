import axios from 'axios';

export function getAxios(url, callback) {
	axios(
		{
			url: url,
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': "*"
			},
			withCredentials: false,
		}
	).then(function (response) {
		callback(response.data);
	});
}

export function postAxios(url, callback) {
	axios(
		{
			url: url,
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': "*"
			},
			withCredentials: false,
		}
	).then(function (response) {
		callback(response.data);
	});
}