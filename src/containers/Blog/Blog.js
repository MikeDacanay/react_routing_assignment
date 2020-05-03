import React, { Component } from 'react';

import {Link,Route, Switch} from 'react-router-dom';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';
import FullCourse from '../FullCourse/FullCourse';


class Blog extends Component{
	render() {
		return (
			<div className="Blog">				
				
				<ul>
					<li><Link to='/'>Courses</Link></li>
					<li><Link to='/users'>Users</Link></li>
				</ul>	


				<Switch>

					<Route
						path='/users'
						component={Users}						
						exact
					/>
					<Route
						path='/:id'
						exact
						component={FullCourse}
					/>					
					<Route
						path='/'
						component={Courses}					
					/>
				</Switch>
			</div>
		)
	}
} 

export default Blog;