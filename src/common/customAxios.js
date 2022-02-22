import axios from 'axios';

export default function customAxios(url, callback) {
	axios(
		{
			url: '/api' + url,
			method: 'post',
			headers: {
				'Access-Control-Allow-Origin': "*"
			},
			baseURL: 'http://localhost:8080',
			withCredentials: false,
		}
	).then(function (response) {
		callback(response.data);
	});
}