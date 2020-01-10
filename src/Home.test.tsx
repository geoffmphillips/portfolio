import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders home component', () => {
	const { getByTestId } = render(<Home />);
	const linkElement = getByTestId('test-header');
	expect(linkElement).toBeInTheDocument();
});
