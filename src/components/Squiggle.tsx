import React from 'react';

import './Squiggle.css';

interface SquiggleProps {
	color?: string,
	length?: number,
	height?: string,
	width?: string,
	viewbox?: string,
}

const getD = function(length: number): string {
	let d = 'M 0, 0.5';
	for (let i = 0; i < length; i++) {
		d += ' c 5, 0, 5, 3, 10, 3 s 5, -3,10,-3 c 5, 0, 5, 3, 10, 3 s 5, -3, 10, -3';
	}
	return d;
}

const Squiggle = ({ color = '#ffab0f', length = 6, height = '20px', width = '400px', viewbox = '0 0 200 4' }: SquiggleProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} style={{ height, width }}>
            <path fill="none" stroke={color} stroke-width="1" className="squiggle" d={getD(length)}/>
        </svg>
    )
}

export default Squiggle;