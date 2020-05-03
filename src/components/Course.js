import React from 'react';

import {NavLink} from 'react-router-dom';


import './Course.module.css';

const course = (props) => (
	<NavLink 
		className='Course' 
		key={props.key}
		to={'/' + props.id}
		>
		{props.title}
	</NavLink>
)

export default course;