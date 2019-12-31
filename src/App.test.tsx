import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

const WrappedApp: React.FC = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>	
);

test('renders learn react link', () => {
	const { getByText } = render(<WrappedApp />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
