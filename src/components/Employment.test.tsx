import React from 'react';
import { render } from '@testing-library/react';
import Employment from './Employment';

test('renders employment headers', () => {
	const { getByText } = render(<Employment />);
	
	const idyaflowElement = getByText(/Idyaflow/i);
	expect(idyaflowElement).toBeInTheDocument();
	
	const benchElement = getByText(/Bench Accounting/i);
	expect(benchElement).toBeInTheDocument();
});
