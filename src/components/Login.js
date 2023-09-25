import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {

    const nav = useNavigate()
    const usernameRef = useRef()
    const passwordRef = useRef()


    function login () {

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        };
        fetch('http://localhost:8000/login', options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(!data.error)  nav ("/lobby")
            });

    }


    return (
        <div className="d-flex f-col login">
            <h1>Login</h1>
            <div>
                <input type="text" placeholder="username" ref={usernameRef}/>
            </div>
            <div>
                <input type="text" placeholder="password" ref={passwordRef}/>
            </div>
            <div>
                <button onClick={login}>LOGIN</button>
            </div>
        </div>
    );
};

export default Login;