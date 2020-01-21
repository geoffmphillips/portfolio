import React from 'react';

const DownloadButton: React.FC = props => {
	return (
		<a className='download-button' href="/portfolio/assets/Geoff_Phillips_Resume" download="Geoff_Phillips_Resume" target='_blank'>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" className="icon-arrow-thick-down-circle"><circle cx="12" cy="12" r="10" className="primary"/><path className="secondary" d="M10 12V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h2a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 0 1 8 12h2z"/></svg>
			
		</a>
	)
}

export default DownloadButton;