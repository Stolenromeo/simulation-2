import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Dashboard'
import Wizard from './Wizard'
import Step2 from './step2'
import Step3 from './step3'

export default function Routes(){
	return (
		<Switch>
			<Route exact path='/' component={Dashboard}/>
			<Route path='/wizard/step2' component={Step2}/>
			<Route path='/wizard/step3' component={Step3}/>
			<Route path='/wizard' component={Wizard}/>
		</Switch>
	)

}