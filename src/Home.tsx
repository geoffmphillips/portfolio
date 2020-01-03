import React from 'react';

import Squiggle from './components/squiggle';

interface Skill {
	name: string,
	tools: string[],
}

const skills: Skill[] = [
	{
		name: "Languages",
		tools: [ "Javascript", "Typescript", "Ruby", "SQL" ]
	},
	{
		name: "Frameworks & Tools",
		tools: [ "React", "React Native", "Redux", "Gatsby", "Jest", "Vue", "Ruby on Rails", "RSpec", "jQuery", "Node", "socket.io", "Stripe" ]
	},
	{
		name: "Systems & Databases",
		tools: [ "SQL", "PostgreSQL", "MongoDB", "Ansible", "Docker", "Git", "Github" ]
	}
]

interface Role {
	title: string,
	time: string,
	notes: string[],
}

interface Employment {
	name: string,
	roles: Role[],
}

const employers: Employment[] = [
	{
		name: "Idyaflow",
		roles: [
			{
				title: 'Junior Web Developer',
				time: 'Dec. 2018 to Current',
				notes: [
					'ansible? Designed and built payment and subscription managment microservice',
					'Used React Native to build mobile app',
					'Other tools used include React, Redux, Node, jQuery, MongoDB, Stripe, Bootstrap, socket.io',
				]
			}
		]
	},
	{
		name: 'Bench Accounting',
		roles: [
			{
				title: "Accounting Team Lead",
				time: "May 2016 to May 2018",
				notes: [
					'Created team-specific metrics and dashboards enabling team members to track their performance',
					'Worked with sales team to create and maintain client qualification standards and documentation',
					'Team consistently had operations-best monthly bookkeeping KPIs',
				]
			},
			{
				title: 'Senior Accounting Associate',
				time: 'February 2015 to May 2016',
				notes: [
					'Held largest portfolio of clients by quantity and KPI measures',
					'Helped shape company-wide bookkeeping standards as part of the Quality & Standards team',
					'???',
				]
			}
		]
	}
]

const Home: React.FC = () => (
    <div>
		<div>
			this is the part where I talk about myself.
			
			{/* Web developer with a passion for clean code and solving problems. Self-motivated, driven by pushing the boundaries of my knowledge. With experience working as an accounting team lead, I know know that collaboration and teamwork will bring out everyone's best. */}
		</div>
		<Squiggle />
		<div>
			<h3>Employment</h3>
			{ employers.map(function(employer, index) {
				return (
					<React.Fragment key={index+200}>
						<h4>{ employer.name }</h4>
						{ employer.roles.map(function(role, roleIndex) {
							return (
								<div key={roleIndex + 300}>
									<p>{ role.title } - { role.time }</p>
									<ul>
										{ role.notes.map(function(note, noteIndex) {
											return <li key={ noteIndex + 400 }>{ note }</li>	
										})}
									</ul>
								</div>	
							)
						})}
					</React.Fragment>
				)	
			})}
		</div>
		<Squiggle />
		<div>
			<h3>Skills</h3>
			{ skills.map((skill, index) => (
				<div key={index + 100}>
					<h4>{skill.name}</h4>
					{ skill.tools.map(function(tool, index) {
						return <span key={index + 1000}>{tool}</span>
					})}
				</div>
			)) }
		</div>
		<Squiggle />
		<div>
			Projects
		</div>
		<Squiggle />
		<div>
			Education
		</div>
    </div>
);


export default Home;
