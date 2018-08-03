import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateMort, updateRent, addHouse, updateImg, updateName, updateAddress, updateCity, updateState, updateZip   } from '../ducks/reducer'

function Step3(props){
	let {name, address, city, state, zip, img, mortgage, rent} =props;
	let obj={name, address, city, state, zip, img, mortgage, rent}
	return (
		<div>
			<div>Mortgage Rate<br/>
				<input type='text' onChange={e=>{props.updateMort(e.target.value)}} value={props.mortgage}/>
			</div>
			<div>Rent<br/>
				<input type='text' onChange={e=>{props.updateRent(e.target.value)}} value={props.rent}/>
			</div>
			<Link to='/wizard/step2'><button>Previous Step</button></Link>
			<Link to='/' onClick={()=>{props.addHouse(obj)
			props.updateMort(0)
			props.updateRent(0)
			props.updateImg('')
			props.updateName('')
			props.updateAddress('')
			props.updateCity('')
			props.updateState('')
			props.updateZip(0)

			}}><button>Complete</button></Link>
		</div>
	)
}
function mapStateToProps(state){
	return {
		name: state.name,
		address: state.address,
		city: state.city,
		state: state.state,
		zip: state.zip,
		img: state.img,
		mortgage: state.mortgage,
		rent: state.rent
	}
}

export default connect(mapStateToProps, {updateMort, updateRent, addHouse, updateImg, updateName, updateAddress, updateCity, updateState, updateZip })(Step3)