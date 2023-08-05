import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';

class MessageForm extends Component {
    state = {
        visitor:{
            visitor_name: "",
            visitor_email: "",
            visitor_message:"" 
        },
        errors: {}
      } 
    //Joi validator schema
    schema = {
        visitor_name: Joi.string().required().label('Name'),
        visitor_email: Joi.string().email().required().label('Email')
    }
    

    validate = () =>{
        const options = {abortEarly: false}
        const result =Joi.validate(this.state.visitor, this.schema, options)
       
        if(!result.error){
            return null
        }

        const errors = {};
        for(let item of result.error.details){
            errors[item.path[0]] = item.message;
        }
        return errors;

    }
    
    handleSubmit = e => {
        e.preventDefault();
        
        const errors = this.validate();
      
        this.setState({errors:errors||{}});
        console.log("submitting form")
        if (errors) return;


        //call the server
        console.log("Submitted");
    }
    validateProperty = ({name, value}) =>{
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        
        return error? error.details[0].message : null;
    }

    handleChange = e =>{
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);
        if(errorMessage){
            errors[e.currentTarget.name] = errorMessage;
        }
        else{
            delete errors[e.currentTarget.name];
        }

        const visitor ={...this.state.visitor};
        visitor[e.currentTarget.name] = e.currentTarget.value

        this.setState({visitor, errors})

    }
    render() { 
        const {visitor, errors} = this.state;
        return (
            <div>
                    <div className="message-form">
                        <h1>Sent me an email</h1>
                        <form onSubmit={this.handleSubmit}>
                                <div className="form-container">
                                    <div className="form-container-grid-1">
                                        <Input 
                                            name="visitor_name" 
                                            label="Name" 
                                            value={visitor.visitor_name} 
                                            onChange={this.handleChange} 
                                            className="form-control"
                                            error={errors.visitor_name}
                                        />
                                        <Input 
                                            name="visitor_email" 
                                            label="Email" 
                                            value={visitor.visitor_email} 
                                            onChange={this.handleChange} 
                                            className="form-control"
                                            error={errors.visitor_email}
                                        />
                                    </div>
                        
                                    <div className="form-container-grid-2">
                                        <div className="form-group form-group--message">
                                            <label htmlFor="visitor_message">Message</label>
                                            <textarea 
                                                autoFocus
                                                name="visitor_message"
                                                value={visitor.message}
                                                onChange={this.handleChange}
                                                id="visitor_message"  
                                                className="form-control" />
                                        </div>
                        
                                    </div>
                                </div>
                                <div className="form--submit-container">
                                    <button 
                                        disabled={this.validate()}
                                        className='form--submit-container__button'
                                    >Send Email
                                    </button>
                                </div>
                               
                        </form>
                    </div>
                       
            </div>
        );
    }
}
 
export default MessageForm;