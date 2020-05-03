import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog/>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

        // <ol style={{textAlign: 'left'}}>
              //1   <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
              //2   <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
              //3   <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
              //4   <li>Pass the course ID to the "Course" page and output it there</li>
              //5   <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
        //6   <li>Load the "Course" component as a nested component of "Courses"</li>
        //7   <li>Add a 404 error page and render it for any unknown routes</li>
        //8   <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        // </ol>
