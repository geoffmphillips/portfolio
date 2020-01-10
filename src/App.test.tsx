import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

const WrappedApp: React.FC = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>	
);

test('renders hello world!', () => {
	const { getByText } = render(<WrappedApp />);
	const helloElement = getByText(/Hello world!/i);
	expect(helloElement).toBeInTheDocument();
});
