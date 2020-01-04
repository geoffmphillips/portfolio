import React from 'react';

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

const Skills: React.FC = () => (
	<section>
		<h3>Skills</h3>
		<div className='skills-container'>
			{ skills.map((skill, index) => (
				<div key={index + 100}>
					<h4>{skill.name}</h4>
					{ skill.tools.map(function(tool, index) {
						return <span className='tool' key={index + 1000}>{tool}</span>
					})}
				</div>
			))}
		</div>
	</section>
)

export default Skills;