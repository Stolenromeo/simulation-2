import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateMort, updateRent } from '../ducks/reducer'

function Step3(props){
	return (
		<div>
			<div>Mortgage Rate<br/>
				<input type='text' onChange={e=>{updateMort(e.target.value)}} value={props.mortgage}/>
			</div>
			<div>Rent<br/>
				<input type='text' onChange={e=>{updateRent(e.target.value)}} value={props.rent}/>
			</div>
			<Link to='/wizard/step2'><button>Previous Step</button></Link>
			<Link to='/'><button>Complete</button></Link>
		</div>
	)
}
function mapStateToProps(state){
	return {
		mortgage: state.mortgage,
		rent: state.rent
	}
}

export default connect(mapStateToProps, {updateMort, updateRent})(Step3)