import React from 'react';

interface Project { 
	imageSource: string,
	description: string,
	name: string,
	link: string,
}

const projects: Project[] = [
	{
		name: 'Bucket List',
		description: `Save and share your travelling bucket list. Location data pulled from <strong class='project-tool'>Google Places API</strong>. Built with <strong class='project-tool'>Vue</strong>, <strong class='project-tool'>Rails</strong>, <strong class='project-tool'>Bootstrap</strong>, and <strong class='project-tool'>Sass</strong>.`,
		imageSource: '/portfolio/assets/bucket-list.png',
		link: 'https://github.com/geoffmphillips/bucket-list',
	},
	{
		name: 'todo',
		description: `Smart to-do list that categorizes your to-dos for you. Built with <strong class='project-tool'>jQuery</strong>, <strong class='project-tool'>Express</strong>, <strong class='project-tool'>Knex/PostgreSQL</strong>.`,
		imageSource: '/portfolio/assets/todo.png',
		link: 'https://github.com/geoffmphillips/to-do-midterm',
	},
	{
		name: 'Chatty',
		description: `Simple chat app for sending pictures and text. Built with <strong class='project-tool'>React</strong> and <strong class='project-tool'>websockets</strong>.`,
		imageSource: '/portfolio/assets/chatty.png',
		link: 'https://github.com/geoffmphillips/chatty-app',
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
					{/* <a
						href={project.link}
						target='_blank'
						rel="noopener noreferrer"
					>
						<img className='project-image' src={project.imageSource} alt={project.name} />
					</a> */}
					<a
						href={project.link}
						target='_blank'
						rel="noopener noreferrer"
					>
						<strong className='title'>{ project.name }</strong>
					</a>
					<p dangerouslySetInnerHTML={{ __html: project.description }}></p>
				</div>
			)	
		})}
	</section>
)

export default Project;
