import React, { Component } from 'react';
import MessageForm from './messageForm';


class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="content">
                <h1>This is contact page</h1>
                <MessageForm />
            </div>
        );
    }
}
 
export default Contact;