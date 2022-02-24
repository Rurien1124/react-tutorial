import axios from 'axios';

export default function customAxios(url, callback) {
	axios(
		{
			url: '/api' + url,
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