import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
import axios from 'axios'

class Wizard extends Component {
	constructor(){
		super()
		this.state={
			name: '',
			address: '',
			city: '',
			state: '',
			zip: 0
		}
	}
	handleChange=this.handleChange.bind(this)
    handleChange(value, property){
        let obj = {}
        obj[property] = value;
        this.setState(obj)
	}
	
	add = () =>{
		let {name, address, city, state, zip } = this.state;
		let obj = {name, address, city, state, zip}
		axios.post(`/api/houses:`, obj)
		this.setState({
			name: '',
			address: '',
			city: '',
			state: '',
			zip: 0
		})
	}

	render(){
		return (
			<div>
				Wizard
				<Link to='/'><button>Cancel</button></Link>
				<div>Property Name
					<input type='text' onChange={e=>this.handleChange(e.target.value, 'name')}/>
				</div>
				<div>Address
					<input type='text' onChange={e=>this.handleChange(e.target.value, 'address')}/>
				</div>
				<div>City
					<input type='text' onChange={e=>this.handleChange(e.target.value, 'city')}/>
				</div>
				<div>State
					<input type='text' onChange={e=>this.handleChange(e.target.value, 'state')}/>
				</div>
				<div>Zip
					<input type='number' onChange={e=>this.handleChange(e.target.value, 'zip')}/>
				</div>
				<Link to='/'><button onClick={this.add}>Complete</button></Link>
			</div>
		)
	}

}
export default Wizard