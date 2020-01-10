import React from 'react';
import { render } from '@testing-library/react';
import Education from './Education';

test('renders education headers', () => {
	const { getByText } = render(<Education />);
	
	const lighthouseElement = getByText(/Lighthouse Labs/i);
	expect(lighthouseElement).toBeInTheDocument();
	
	const ubcElement = getByText(/University of British Columbia/i);
	expect(ubcElement).toBeInTheDocument();
});