import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [text, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <body>
        <h2>Sign in</h2>
        <button>Google</button>
        <h5>or with</h5>
        <div className="auth-form-container">
            
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Enter your username" id="username" name="username" />
                <h5>or</h5>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" />
                <button type="submit"><b>Log In</b></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </body>
    )
}