import React from 'react';

import Education from './components/Education';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Squiggle from './components/Squiggle';

const Home: React.FC = () => (
    <div>
		<section>
			<div className='description-container' data-testid="test-header">
				<p className='description first'>
					Hello world! My name is Geoff. I am a coder. I build things. First I break things. I'm always trying to learn - new tools, new approaches to problems, new skills outside of tech. 
				</p>
			
			</div>
			<div className='description-container'>
				<p className='description'>
					And maybe something else could go here too? Maybe there's something else to say
				</p>	
			</div>
		</section>
		<Squiggle />
		<Employment />
		<Skills />
		<Projects />
		<Education />
		<Squiggle />
		<div className='footer'>
			<div className='block'></div>
		</div>
    </div>
);


export default Home;
