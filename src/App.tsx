import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import logo from './logo.svg';

import './App.css';

const App: React.FC = () => (
    <div className="App">
	    <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <p>
	          Edit <code>src/App.tsx</code> and save to reload.
	        </p>
	        <a
	          className="App-link"
	          href="https://reactjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          Learn React
	        </a>
	    </header>
		<main>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</main>
    </div>
);


export default App;
