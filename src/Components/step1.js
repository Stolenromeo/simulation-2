import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../ducks/reducer'

function Step1(props){
	return (
	<div>
		<div>Property Name
			<input type='text' value={props.name}  onChange={e=>props.updateName(e.target.value)}/>
		</div>
		<div>Address
			<input type='text' value={props.address} onChange={e=>props.updateAddress(e.target.value)}/>
		</div>
		<div>City
			<input type='text' value={props.city}  onChange={e=>props.updateCity(e.target.value)}/>
		</div>
		<div>State
			<input type='text' maxLength='2' value={props.state} onChange={e=>props.updateState(e.target.value)}/>
		</div>
		<div>Zip
			<input type='number' value={props.zip} onChange={e=>props.updateZip(e.target.value)}/>
		</div>
		<Link to='/wizard/step2'><button>Next Step</button></Link>
	</div>
	)
}

function mapStateToProps(state){
	return {
		name: state.name,
		address: state.address,
		city: state.city,
		state: state.state,
		zip: state.zip
	}
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(Step1)