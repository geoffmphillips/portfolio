import React from 'react';

interface Skill {
	name: string,
	tools: string[],
}

const skills: Skill[] = [
	{
		name: "Languages",
		tools: [ "Javascript", "Typescript", "Ruby", "HTML5", "CSS3/SASS" ]
	},
	{
		name: "Frameworks & Tools",
		tools: [ "React", "React Native", "Redux", "Gatsby", "Jest", "Vue", "Ruby on Rails", "RSpec", "jQuery", "Node", "socket.io", "Stripe" ]
	},
	{
		name: "Systems & Databases",
		tools: [ "SQL", "NoSQL", "PostgreSQL", "MongoDB", "Ansible", "Docker", "Git", "Github" ]
	}
]

const Skills: React.FC = () => (
	<section id='skills-container'>
		<div className='row justify-center'>
			<em>Tools I like to work with</em>
		</div>
		<div className='row skills-row'>
			{ skills.map((skill, index) => (
				<div key={index + 100} className='column'>
					<div className='skill-name-container'>
						<h4 className='skill-name'>{skill.name}</h4>
					</div>
					<div className='tool-container'>
						{ skill.tools.map(function(tool, index) {
							return <span className='tool' key={index + 1000}>{tool}</span>
						})}
					</div>
				</div>
			))}
		</div>
	</section>
)

export default Skills;