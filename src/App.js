import React from 'react';
import '../src/App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import { Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/Loginpage';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/services' component={Services} />
				<Route path='/products' component={Products} />
				<Route path='/reg' component={RegisterPage} />
				<Route path='/log' component={LoginPage} />
			</Switch>
		</>
	);
}

export default App;
