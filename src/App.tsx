import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

import './App.css';

const App: React.FC = () => {
	
	const handleDarkModeButtonClick = function(event: any) {
		event.preventDefault();
		
		let app = document.getElementById('App');
		if (app?.classList.contains('dark-mode')) {
			app?.classList.remove('dark-mode');
		} else {
			app?.classList.add('dark-mode');
		}
	}
	
	return (
		<main id='App'>
			<header className='header'>
				<button 
					className='dark-mode-button'
					onClick={handleDarkModeButtonClick}
				>
					<svg className='moon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 500">
						<g><path d="M413.9,407.2c28.6-28.6,47.6-63.3,57.1-99.8c-74.3,55.9-180.3,50-247.9-17.6c-67.9-67.9-73.6-174.5-16.9-248.9  C169.1,50.1,134,69.2,105,98.2c-85.3,85.3-85.3,223.6,0,309C190.3,492.5,328.6,492.5,413.9,407.2z" /></g>
					</svg>
				</button>
			</header>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</main>
	)
};


export default App;
