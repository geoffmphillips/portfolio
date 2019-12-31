import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

import './App.css';

const App: React.FC = () => (
	<main className='App'>
		<div className='brand-bar'></div>
		<Switch>
			<Route path='/' component={Home} />
		</Switch>
	</main>
);


export default App;
