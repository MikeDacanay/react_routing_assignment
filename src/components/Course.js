import React from 'react';

// import {NavLink} from 'react-router-dom';


import './Course.module.css';

const course = (props) => {	
	return (
		<article 
			className='Course' 
			onClick={props.clicked}	
			id={props.id}	
			>
			{props.title}
		</article>
	)
}

export default course;