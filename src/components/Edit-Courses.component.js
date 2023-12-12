import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import DatePicker from 'react-datepicker';

export default class EditCourses extends Component {
    constructor(props) {
        super(props);


        this.onChangecode = this.onChangecode.bind(this);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeuploader = this.onChangeuploader.bind(this);
        this.onChangefile = this.onChangefile.bind(this);
        this.onChangeDatet = this.onChangeDatet.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            code: '',
            title: '',
            uploader: '',
            file: '',
             Datet: new Date(),
            Courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Courses/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    code: response.data.code,
                    title: response.data.title,
                    uploader: response.data.uploader,
                    file: response.data.file,
                    Datet: new Date(response.data.Datet),
                   
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Courses/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Courses: response.data.map(Courses => Courses.code),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangecode(e) {
        this.setState({
            code: e.target.value
        })
    }

   

    onChangetitle(e) {
            this.setState({
                title: e.target.value
            })
        }
        
    onChangeuploader(e) {
        this.setState({
            uploader: e.target.value
        })
    }

   

    onChangefile(e) {
        this.setState({
            file: e.target.value
        })
    }

    

   


    onChangeDatet(datet) {
        this.setState({
            Datet: datet
        })
    }

   

    onSubmit(e) {
        e.preventDefault();

        const Courses = {
            code: this.state.code,
            title: this.state.title,
            uploader: this.state.uploader,
            Datet: this.state.Datet,
            file: this.state.file,
         

        }

        console.log(Courses);

        axios.post('http://localhost:5000/Courses/update/' + this.props.match.params.id, Courses)
            .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Courses material Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });

    }

    render() {
        return (<div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <img src = "https://c.tenor.com/L5g2mZgoLykAAAAS/office-of-course.gif"
            width = "90%"
            height = "60% " />
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > 
            Update Course Material</font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Course material code: </label>
            <input type = "Text"
            required className = "form-control"
            placeholder = "Enter Code"
            value = { this.state.code }
            onChange = { this.onChangecode }/>
             </div > <div className = "form-group" >
            <label > Related Course name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Title"
            value = { this.state.title }
            onChange = { this.onChangetitle }/> </div > 
             <div className = "form-group" >
            <label > Uploader Name: </label> 
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Uploader"
           
            value = { this.state.uploader }
            onChange = { this.onChangeuploader }/>
            </div > 
    
            <div className = "form-group" >
                <label > Date: </label> <div >
                <DatePicker selected = { this.state.Datet }
                onChange = { this.onChangeDatet } /> </div>
    
    <div className = "form-group" >
                <label > Update File: </label> <
                input type = "file"
                required className = "form-control"
                placeholder = "Enter file"
               
                onChange = { this.onChangefile }/>  </div> </div > <div className = "form-group" >
                <input type = "submit"
                value = "Update"
                className = "btn btn-primary" />
                </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
                 </div>
        )
    }
}