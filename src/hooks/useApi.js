import axios from 'axios';

class Api {
	constructor() {
		this.urlApi = 'http://localhost:3001';
	}
	getUserProfile(id) {
		return axios.get(`http://localhost:3001/user/${id}`)
	}


}

class ApiMock {
	getUserProfile(id){
		return Promise.resolve({
			data: 
			{data:{id: 18,
			userInfos: {
				firstName: 'Maxime',
				lastName: 'Ratorez',
				age: 34,
			},
			score: 0.3,
			keyData: {
				calorieCount: 2500,
				proteinCount: 90,
				carbohydrateCount: 150,
				lipidCount: 120
			}}
		}})
	}
}

export default function useApi(mock) {
	const urlApi = 'http://localhost:3001';
	let api = new Api();
	if(mock){
		api = new ApiMock();
	}
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

	return { get, api };
}

