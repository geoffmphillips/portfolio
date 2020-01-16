import React from 'react';

interface Project { 
	imageSource: string,
	description: string,
	name: string,
}

const projects: Project[] = [
	{
		name: 'Bucket List',
		description: `Save and share your travelling bucket list. Location data pulled from <strong class='project-tool'>Google Places API</strong>. Built with <strong class='project-tool'>Vue</strong>, <strong class='project-tool'>Rails</strong>, <strong class='project-tool'>Bootstrap</strong>, and <strong class='project-tool'>Sass</strong>.`,
		imageSource: '/portfolio/assets/bucket_list.png',
	},
	{
		name: 'todo',
		description: `mart to-do list that categorizes your to-dos for you. Built with <strong class='project-tool'>jQuery</strong>, <strong class='project-tool'>Express</strong>, <strong class='project-tool'>Knex/PostgreSQL</strong>.`,
		imageSource: '/portfolio/assets/todo.png',
	},
	{
		name: 'Chatty',
		description: `Simple chat app for sending pictures and text. Built with <strong class='project-tool'>React</strong> and <strong class='project-tool'>websockets</strong>.`,
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
					<p dangerouslySetInnerHTML={{ __html: project.description }}></p>
				</div>
			)	
		})}
	</section>
)

export default Project;
