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
    
    <td ><Link to = { "/edit/" + props.Courses._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteCourses(props.Courses._id) }}>Delete</a > </td > 
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


    deleteCourses(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Courses/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Courses: this.state.Courses.filter((el) => el._id !== id),
            });
        }
    }


    CoursesList() {
        return this.state.Courses.map(currentCourses => {
            return <Courses Courses = { currentCourses }
            deleteCourses = { this.deleteCourses }
            key = { currentCourses._id }
            />;
        })
    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Courses/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.title.includes(searchKey)
            )

            this.setState({ Courses: result })

        });

    }

    render() {return (
         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Courses Materials </h4> </div >
            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search" name = "searchQuery"
            onChange = { this.handleSearchArea } ></input> 
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
            < th > Action </th> 
            </tr >
            </thead> <tbody > {this.state.Courses.map(props =>
                    <tr key = { props.code } >
                    <td > { props.code } </td> 
                    <td > { props.title } </td> 
                    <td > { props.uploader } </td> 
                    < td > {props.Datet.substring(0, 10) } </td>
                    < td > { props.file } </td> 
                     <td >
                     <
                    Link to = { "/edit/" + props._id } >  <Button variant = "warning btn-sm"> Update </Button> </Link>  
                    <a href="" onClick={() => { this.deleteCourses(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button> </a > 
                    </
                    td ></tr>
                )

            }

            </tbody> </table >

            <div style = {{ float: 'left' }} >
            <Link to = "/report/" >
                        <button type="button" class="btn btn-danger" variant = "primary" > Report </button></Link ></div>
            
           
            
            </div>

            
        )
    }
}