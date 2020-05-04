import React, { Component } from 'react';

import {Link,Route, Switch, Redirect} from 'react-router-dom';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';


class Blog extends Component{
	render() {
		return (
			<div className="Blog">				
				
				<ul>
					<li><Link to='/courses'>Courses</Link></li>
					<li><Link to='/users'>Users</Link></li>
				</ul>	


				<Switch>

					<Route
						path='/users'
						component={Users}						
					/>												
					<Route
						path='/courses'
						component={Courses}					
					/>
					<Redirect 
						from='/all-courses'
						to='/courses'
					/>
					<Route render={()=><h1>Not Found</h1>}/>
				</Switch>
			</div>
		)
	}
} 

export default Blog;