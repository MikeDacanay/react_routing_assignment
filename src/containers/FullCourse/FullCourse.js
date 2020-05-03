import React, { Component } from 'react';

class FullCourse extends Component {
    render () {
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: _ID_</p>
            </div>
        );
    }

    componentDidMount(){
			console.log('asdfasdf');    	
    }
}

export default FullCourse;