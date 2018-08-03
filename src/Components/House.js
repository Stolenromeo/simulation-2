import React from 'react'
import { connect } from 'react-redux'
import { deleteHouse } from '../ducks/reducer'



function House(props){
	let {name, address, city, state, zip, id} = props
	return (
		<div>
			<p>Property Name: {name}<button onClick={()=>props.deleteHouse(Number(id))}>X</button></p>
			<p>Address: {address}</p>
			<p>City: {city}</p>
			<p>State: {state}</p>
			<p>Zip: {zip}</p>
		</div>
	)

}
export default connect(null, {deleteHouse})(House)