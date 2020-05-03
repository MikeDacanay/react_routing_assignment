import React from 'react';

import {NavLink} from 'react-router-dom';


import './Course.module.css';

const course = (props) => (
	<NavLink 
		className='Course' 
		to={{
			pathname:'/'+props.title,
			id: props.id
		}}
		id={props.id}
		>
		{props.title}
	</NavLink>
)

export default course;