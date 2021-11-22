import axios from 'axios';


/**
 * Api call
 */
class Api {
	constructor() {
		this.urlApi = 'http://localhost:3001';
	}
	getUserProfile(id) {
		return axios.get(`http://localhost:3001/user/${id}`)
	}
	getUserPerformance(id) {
		return axios.get(`http://localhost:3001/user/${id}/performance`)
	}
	getUserActivity(id) {
		return axios.get(`http://localhost:3001/user/${id}/activity`)
	}
	getUserAverageSessions(id) {
		return axios.get(`http://localhost:3001/user/${id}/average-sessions`)
	}

}

/**
 * data mock
 */

class ApiMock {
	getUserProfile(){
		return Promise.resolve({
			data: {
				data: {
					id: 18,
					userInfos: {
						firstName: 'Maxime',
						lastName: 'Ratorez',
						age: 34,
					},
					score: 0.16,
					keyData: {
						calorieCount: 2500,
						proteinCount: 90,
						carbohydrateCount: 150,
						lipidCount: 120
					}
				}
			}
		})
	}
	getUserPerformance() {
		return Promise.resolve({
			'data': {
				'data': {
					'userId':18,
					'kind': {
						'1':'cardio',
						'2':'energy',
						'3':'endurance',
						'4':'strength',
						'5':'speed',
						'6':'intensity'
					},
					'data': [
						{'value':200,'kind':1},
						{'value':240,'kind':2},
						{'value':80,'kind':3},
						{'value':80,'kind':4},
						{'value':220,'kind':5},
						{'value':110,'kind':6}
					]
				}
			}
		})
	}
	getUserActivity() {
		return Promise.resolve({
			'data': {
				'data': {
					'userId':18,
					'sessions':[
						{
							'day':'2020-07-01',
							'kilogram':70,
							'calories':240
						},
						{
							'day':'2020-07-02',
							'kilogram':69,
							'calories':220
						},
						{
							'day':'2020-07-03',
							'kilogram':70,
							'calories':280
						},
						{
							'day':'2020-07-04',
							'kilogram':70,
							'calories':500
						},
						{
							'day':'2020-07-05',
							'kilogram':69,
							'calories':160
						},
						{
							'day':'2020-07-06',
							'kilogram':69,
							'calories':162
						},
						{'day':'2020-07-07',
						'kilogram':69,
						'calories':390
					}
					]
				}
			}
		})
	}
	getUserAverageSessions() {
		return Promise.resolve({
			'data' : {
				'data': {
					'userId':18,
					'sessions':[
						{
							'day':1,
							'sessionLength':30
						},
						{
							'day':2,
							'sessionLength':40
						},
						{
							'day':3,
							'sessionLength':50
						},
						{
							'day':4,
							'sessionLength':30
						},
						{
							'day':5,
							'sessionLength':30
						},
						{
							'day':6,
							'sessionLength':50
						},
						{
							'day':7,
							'sessionLength':50
						}
					]
				}
			}
		})
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

