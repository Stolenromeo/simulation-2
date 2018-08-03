import axios from 'axios';

let initialState = {
	houses: [],
	name: '',
	address: '',
	city: '',
	state: '',
	zip: 0,
	img: '',
	mortgage: 0,
	rent: 0
}

const FULFILLED = '_FULFILLED'
const GET_HOUSES = 'GET_HOUSES'
const ADD_HOUSE = 'ADD_HOUSE'
const DELETE_HOUSE = 'DELETE_HOUSE'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MORT = 'UPDATE_MORT'
const UPDATE_RENT = 'UPDATE_RENT'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'

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

export function updateImg(e){
	return {
		type: UPDATE_IMG,
		payload: e
	}
}

export function updateName(e){
	return {
		type: UPDATE_NAME,
		payload: e
	}
}

export function updateAddress(e){
	return {
		type: UPDATE_ADDRESS,
		payload: e
	}
}

export function updateCity(e){
	return {
		type: UPDATE_CITY,
		payload: e
	}
}

export function updateState(e){
	return {
		type: UPDATE_STATE,
		payload: e
	}
}

export function updateZip(e){
	return {
		type: UPDATE_ZIP,
		payload: e
	}
}

export function updateMort(e){
	let num = Number(e)
	return{
		type: UPDATE_MORT,
		payload: num
	}
}

export function updateRent(e){
	let num = Number(e)
	return {
		type: UPDATE_RENT,
		payload: num
	}
}

export default function reducer(state = initialState, action){
	switch (action.type) {
		case GET_HOUSES + FULFILLED:
		return ({...state, houses:action.payload})

		case ADD_HOUSE + FULFILLED:
		return ({...state, houses: action.payload})

		case DELETE_HOUSE + FULFILLED:
		return ({...state, houses:action.payload})

		case UPDATE_IMG:
		return ({...state, img:action.payload})

		case UPDATE_MORT:
		return ({...state, mortgage:action.payload})

		case UPDATE_RENT:
		return ({...state, rent: action.payload})
		
		case UPDATE_NAME:
		return ({...state, name: action.payload})

		case UPDATE_ADDRESS:
		return ({...state, address: action.payload})

		case UPDATE_CITY:
		return ({...state, city: action.payload})

		case UPDATE_STATE:
		return ({...state, state: action.payload})

		case UPDATE_ZIP:
		return ({...state, zip: action.payload})

		default:
			return state;
	}

}