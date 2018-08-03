import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getHouses, deleteHouse } from '../ducks/reducer'

import House from './House'


class Dashboard extends Component  {
	componentDidMount(){
		this.props.getHouses()
	}
	render(props){
		let houseList = this.props.houses.map(house=>{
			return (<House
				id={house.id}
				name={house.name}
				address={house.address}
				city={house.city}
				state={house.state}
				zip={house.zip}
				delete = {this.props.deleteHouse}
				/>
			)
		})
		return (
			<div>
				Dashboard
				<Link to='/wizard'><button>Add New Property</button></Link>
				{houseList}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		houses:state.houses
	}
}
export default connect(mapStateToProps, {getHouses, deleteHouse})(Dashboard)