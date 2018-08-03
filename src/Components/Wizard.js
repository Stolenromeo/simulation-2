import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addHouse } from '../ducks/reducer'

class Wizard extends Component {
	
	render(){
		return (
			<div>
				Wizard
				<Link to='/'> <button>Cancel</button></Link>
				{this.props.children}
			</div>
		)
	}

}

function mapStateToProps(state){
	return{
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

export default connect(mapStateToProps, {addHouse})(Wizard)