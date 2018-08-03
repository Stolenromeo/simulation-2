import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImg } from '../ducks/reducer'


		function step2(props){
		return (
		<div>
			Image URL<br/>
			<input type='text' onChange={e=>{props.updateImg(e.target.value)}} value={props.img}/>
			<Link to='/wizard'><button>Previous Step</button></Link>
			<Link to='/wizard/step3'><button>Next Step</button></Link>
		</div>
		)
	}


function mapStateToProps(state){
	return {
	img: state.img
	}
}

export default connect(mapStateToProps, {updateImg})(step2)