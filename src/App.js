import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"

import EditCourses from "./components/Edit-Courses.component";
import CreateCourses from "./components/Create-Courses.component";
import CoursesList from "./components/list-Courses.component";
import report from "./components/Report";





function App() {

    return ( <Router >
        <div className = "container" >
       
        <Navbar/ >
        <br/ >
        <Route path = "/" exact component = { CoursesList }/>
        <Route path = "/edit/:id" component = { EditCourses }/> 
        <Route path = "/create" component = { CreateCourses }/> 
        <Route path = "/report/" component = { report }/>
        
        </div > 
      
        </Router>
    );
}

export default App;