import React from 'react';

interface Project { 
	imageSource: string,
	description: string,
	name: string,
}

const projects: Project[] = [
	{
		name: 'Bucket List',
		description: 'Save and share your travelling bucket list. Location data pulled from Google Places API. Built with Vue, Rails, JWT, Bootstrap, Sass',
		imageSource: '/portfolio/assets/bucket_list.png',
	},
	{
		name: 'todo',
		description: 'Smart to-do list that categorizes your to-dos for you. Built with Javascript, jQuery, Express, EJS, Knex/PostgreSQL',
		imageSource: '/portfolio/assets/todo.png',
	},
	{
		name: 'Chatty',
		description: 'Simple chat app for sending pictures and text. Built with React and websockets',
		imageSource: '/portfolio/assets/chatty.png',
	}
]

const Project: React.FC = () => (
	<section className='employment-container'>
		<div className='row justify-center'>
			<em>Projects I've made</em>
		</div>
		{ projects.map(function(project, index) {
			return (
				<div className='project m-t-16' key={index+800}>
					<img className='project-image' src={project.imageSource} alt={project.name} />
					<strong className='title'>{ project.name }</strong>
					<p>{ project.description }</p>
				</div>
			)	
		})}
	</section>
)

export default Project;
