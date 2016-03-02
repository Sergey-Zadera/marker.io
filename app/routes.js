import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CreateMarker from './components/CreateMarker';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default (
	<Route component={App}>
		<Route path='/' component={Home} />
		<Route path='/create-marker' component={CreateMarker} />
		<Route path='/about-us' component={About} />
		<Route path='/contact' component={Contact} />
		<Route path='/login' component={Login} />
		<Route path='/sign-up' component={SignUp} />
		contact
	</Route>
);