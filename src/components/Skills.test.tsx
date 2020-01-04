import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Skills from './Skills';

test('renders learn react link', () => {
	const { getByText } = render(<Skills />);
	const languagesElement = getByText(/Languages/i);
	expect(languagesElement).toBeInTheDocument();
	
	const frameworksElement = getByText(/Frameworks & Tools/i);
	expect(frameworksElement).toBeInTheDocument();
	
	const systemsElement = getByText(/Systems & Databases/i);
	expect(systemsElement).toBeInTheDocument();
});
