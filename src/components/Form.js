import React, { Component } from 'react'; 

export default class Form extends Component {
    handleChange = e => {
        let { name, value } = e.target 
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        console.log('values on form', this.state)
    }

    render() {
        return this.props.render({
            handleChange: this.handleChange, 
            handleSubmit: this.handleSubmit
        })
    }
}