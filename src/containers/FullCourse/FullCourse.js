import React, { Component } from 'react';

class FullCourse extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.location.id}</p>
            </div>
        );
    }

    componentDidMount = () => {
    	console.log(this.props);
    }
}

export default FullCourse;