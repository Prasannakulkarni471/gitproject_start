import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [confpass, setConfpass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <body>
            <h2>Sign Up</h2>
        <div className="auth-form-container">
            
        <form className="register-form" onSubmit={handleSubmit}>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email" />
            <input value={college} name="college" onChange={(e) => setCollege(e.target.value)} id="college" placeholder="Enter your college name" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter password" id="password" name="password" />
            <input value={confpass} onChange={(e) => setConfpass(e.target.value)} type="password" placeholder="Confirm password" id="password1" name="password1" />
            <button type="submit" >Sign up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    </body>
    )
}