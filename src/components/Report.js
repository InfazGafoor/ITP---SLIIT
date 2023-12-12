import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';




const Courses = props => ( <tr >
    <td > { props.Courses.code } </td> 
    <td > { props.Courses.title } </td>
    <td > { props.Courses.uploader } </td> 
    <td > { props.Datet.substring(0, 10) } </td> 
    <td > { props.Courses.file } </td> 
    
   
    </tr> 
)

export default class CoursesList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Courses: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Courses/')
            .then(response => {
                this.setState({ Courses: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Courses/')
            .then(response => {
                this.setState({ Courses: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }




    CoursesList() {
        return this.state.Courses.map(currentCourses => {
            return <Courses Courses = { currentCourses }
            deleteCourses = { this.deleteCourses }
            key = { currentCourses._id }
            />;
        })
    }


    myfunction(){
   
        window.print();
       }

    

    render() {return (
         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Courses Materials </h4> </div >
            <div className = "col-lg-3 mt-2 mb-2" >
           
            </div > 
            </div> 
            <table  table class="table table-bordered">
            <thead className = "thead-light" >
            <tr >
            <th > Code </th> 
            <th > Related Course </th> 
            <th > Uploader </th>
            < th > Date </th> 
            < th > File </th> 
           
            </tr >
            </thead> <tbody > {this.state.Courses.map(props =>
                    <tr key = { props.code } >
                    <td > { props.code } </td> 
                    <td > { props.title } </td> 
                    <td > { props.uploader } </td> 
                    < td > {props.Datet.substring(0, 10) } </td>
                    < td > { props.file } </td> 
                    </tr>
                )

            }

            </tbody> </table >
            
            <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
                     
                     </div>
            
            </div>
        )
    }
}