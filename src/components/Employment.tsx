import React from 'react';

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
				time: 'December 2018 to Current',
				notes: [
					'Designed and implemented payment/subscription managment microservice',
					'Built mobile app with React Native',
					'Implemented Ansible playbook to keep certain client data backed up to AWS for the client to download',
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
					'Team consistently had operations-best monthly bookkeeping KPIs',
					'Collaborated with sales team and operations managers to create and maintain client qualification standards and documentation',
					'Created team-specific KPIs and dashboards enabling team members to track their performance',
				]
			},
			{
				title: 'Senior Accounting Associate',
				time: 'February 2015 to May 2016',
				notes: [
					'Helped shape company-wide bookkeeping standards as part of the Quality & Standards team',
					'Created and implemented new process for operations bookkeepers to complete payroll adjustments',
					'Held largest portfolio of clients by number and KPI measures',
				]
			}
		]
	}
]

const Employment: React.FC = () => (
	<section className='employment-container'>
		<div className='row justify-center'>
			<em>Where I've worked</em>
		</div>
		{ employers.map(function(employer, index) {
			return (
				<div className='employer' key={index+200}>
					<p>{ employer.name }</p>
					{ employer.roles.map(function(role, roleIndex) {
						return (
							<div key={roleIndex + 300}>
								<div className='row space-between'>
									<strong className='title'>{ role.title }</strong><em className='time'>{ role.time }</em>
								</div>
								<ul>
									{ role.notes.map(function(note, noteIndex) {
										return <li key={ noteIndex + 400 }>{ note }</li>	
									})}
								</ul>
							</div>	
						)
					})}
				</div>
			)	
		})}
	</section>
)

export default Employment;
