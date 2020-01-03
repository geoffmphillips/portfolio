import React from 'react';

import './Squiggle.css';

const Squiggle: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 4" style={{ height: '20px', width: '400px' }}>
            <path fill="none" stroke="#000000" stroke-width="1" className="st0" d="M 0, 0.5 c 5, 0, 5, 3, 10, 3 s 5, -3,10,-3 c 5, 0, 5, 3, 10, 3 s 5, -3, 10, -3 c 5, 0, 5, 3, 10, 3 s 5, -3,10,-3 c 5, 0, 5, 3, 10, 3 s 5, -3, 10, -3 c 5, 0, 5, 3, 10, 3 s 5, -3,10,-3 c 5, 0, 5, 3, 10, 3 s 5, -3, 10, -3 c 5, 0, 5, 3, 10, 3 s 5, -3,10,-3 c 5, 0, 5, 3, 10, 3 s 5, -3, 10, -3"/>
        </svg>
    )
}

export default Squiggle;