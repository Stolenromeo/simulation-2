import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Dashboard'
import Wizard from './Wizard'

export default function Routes(){
	return (
		<Switch>
			<Route exact path='/' component={Dashboard}/>
			<Route path='/wizard' component={Wizard}/>
		</Switch>
	)

}