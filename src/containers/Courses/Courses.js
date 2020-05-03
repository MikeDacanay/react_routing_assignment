import React, { Component } from 'react';

import {NavLink} from 'react-router-dom'; 

import './Courses.css';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return ( 
                            <div>
                                <NavLink 
                                className="Course"
                                to='/course' 
                                key={course.id}>
                                    {course.title}
                                </NavLink>
                            </div>
                            )
                        } )
                    }
                </section>
          
            </div>
        );
    }

}

export default Courses;