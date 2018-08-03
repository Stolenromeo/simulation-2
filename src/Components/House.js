import React from 'react'




function House(props){
	let {name, address, city, state, zip} = props
	return (
		<div>
			<p>Property Name: {name}</p>
			<p>Address: {address}</p>
			<p>City: {city}</p>
			<p>State: {state}</p>
			<p>Zip: {zip}</p>
		</div>
	)

}
export default House