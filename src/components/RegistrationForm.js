import React from 'react'; 
import Form from './Form'; 

export default function RegistrationForm(props){
return (
    <Form 
    render={ form => {
        return (
            <div>
                <h1>Registration Form </h1>
                <input 
                type="text"
                name="name"
                placeholder="name"
                onChange={form.handleChange}
                />
                <input
                type="text"
                placeholder="email"
                name="email"
                onChange={form.handleChange}
                />
                 <input
                type="password"
                placeholder="password"
                name="passowrd"
                onChange={form.handleChange}
                />
                  <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                onChange={form.handleChange}
                />

                <button onClick={form.handleSubmit}>Submit</button>
            </div>
        )
    }}
    />
)
}