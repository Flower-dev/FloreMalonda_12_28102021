import axios from 'axios';

export default function useApi() {
	const urlApi = 'http://localhost:3001';
	

	function get(path, data = {}) {
		return axios
			.get(urlApi + path, {
				params: data,
				responseType: `${'json'}`,
				withCredentials: false
			})
			.then((response) => response)
			.catch((error) => error.response);
	}

	return { get };
}