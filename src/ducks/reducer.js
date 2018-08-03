import axios from 'axios';

let initialState = {
	houses: [],
	name: '',
	address: '',
	city: '',
	state: '',
	zip: 0
}

const FULFILLED = '_FULFILLED'
const GET_HOUSES = 'GET_HOUSES'
const ADD_HOUSE = 'ADD_HOUSE'
const DELETE_HOUSE = 'DELETE_HOUSE'
// const CHANGE_NAME = 'CHANGE_NAME'
// const CHANGE_ADDRESS = 'CHANGE_ADDRESS'
// const CHANGE_CITY = 'CHANGE_CITY'
// const CHANGE_STATE = 'CHANGE_STATE'
// const CHANGE_ZIP = 'CHANGE_ZIP'

export function getHouses(){
	let houses = axios.get('/api/houses').then(res=>{
		return res.data
	})
	return {
		type: GET_HOUSES,
		payload: houses
	}

}

export function addHouse(obj){
	let houses = axios.post(`/api/houses`, obj).then(res=>{
		return res.data
	})
	return {
		type: ADD_HOUSE,
		payload: houses
	}
}

export function deleteHouse(id){
	let houses = axios.delete(`/api/houses/${id}`).then(res=>{
		return res.data;
	})
	return {
		type: DELETE_HOUSE,
		payload: houses
	}
}

// export function changeName(){
// 	return {
// 		type:CHANGE_NAME,
// 		payload: name
// 	}
// }

export default function reducer(state = initialState, action){
	switch (action.type) {
		case GET_HOUSES + FULFILLED:
		return ({...state, houses:action.payload})

		case ADD_HOUSE + FULFILLED:
		return ({...state, houses: action.payload})

		case DELETE_HOUSE + FULFILLED:
		return ({...state, houses:action.payload})

		default:
			return state;
	}

}