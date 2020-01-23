import React from 'react';

import DownloadButton from './components/DownloadButton';
import Education from './components/Education';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Squiggle from './components/Squiggle';

const Home: React.FC = () => (
    <div>
		<DownloadButton />
		<section>
			<div className='description-container' data-testid="test-header">
				<p className='description first'>
					Hello, world! My name is <strong className='emphasis-font'>Geoff</strong>. I build things. And I break things. I'm always learning. New tools, new approaches to problems, new skills. When I'm not coding, being a dad keeps me busy. My two year old daughter has taught me more than I've taught her.
				</p>
			
			</div>
		</section>
		<Squiggle />
		<Employment />
		<Skills />
		<Projects />
		<Education />
		<Squiggle />
		<div className='description-container'>
			<p className='description p-b-0'>
				<span role='img' aria-label='waving-hand emoji'>👋</span> Thanks for stopping by <span role='img' aria-label='waving-hand emoji'>👋</span>
			</p>	
		</div>
		<div className='footer'>
			<div className='block'></div>
		</div>
    </div>
);


export default Home;
