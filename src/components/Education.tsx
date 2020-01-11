import React from 'react';

interface Education { 
	name: string,
	description: string,
	graduatedOn: string,
}

const schools: Education[] = [
	{
		name: 'Lighthouse Labs',
		description: 'Ten week intensive web development program',
		graduatedOn: 'October 2018',
	},
	{
		name: 'University of British Columbia',
		description: 'BA, major in Sociology',
		graduatedOn: 'April 2014',
	}
]

const Education: React.FC = () => (
	<section className='employment-container'>
		<div className='row justify-center'>
			<em>Where I went to school</em>
		</div>
		{ schools.map(function(school, index) {
			return (
				<div className='employer m-t-16' key={index+300}>
					<div className='row space-between'>
						<strong className='title'>{ school.name }</strong>
						<em className='time'>{ school.graduatedOn }</em>
					</div>
					<div>
						<p>{ school.description }</p>
					</div>
				</div>
			)	
		})}
	</section>
)

export default Education;
