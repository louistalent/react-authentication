import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './Pages/Sign/Signup';
import Signin from './Pages/Sign/Signin';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Signup}></Route>
				<Route exact path="/signup" component={Signup}></Route>
				<Route exact path="/signin" component={Signin}></Route>
				<Route exact path="*" component={Signup}></Route>
			</Switch>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
