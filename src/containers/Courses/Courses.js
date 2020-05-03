import React, { Component } from 'react';

import {Route} from 'react-router-dom'; 

import FullCourse from '../FullCourse/FullCourse';

import Course from '../../components/Course';

import './Courses.css';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        activeCourse: null,
    }



    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">                    
                    {
                        this.state.courses.map( course => {
                            return (                                 
                                <Course
                                    key={course.id}
                                    title={course.title}
                                    id={course.id}
                                />     
                            )
                        } )
                    }
                </section>                                        
                <Route
                    path='/:title'
                    component={FullCourse}
                    exact
                />  

            </div>            
        );
    }
}

export default Courses;