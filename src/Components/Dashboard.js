import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import House from './House'


export default class Dashboard extends Component {
	constructor(){
		super()
	}

	render(){
		return (
			<div>
				Dashboard
				<Link to='/wizard'><button>Add New Property</button></Link>
				<House />
			</div>
		)
	}

}