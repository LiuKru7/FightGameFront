import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {

    const nav = useNavigate()
    const [window, setWindow] = useState(1)
    const usernameRef = useRef()
    const passwordRef = useRef()

    useEffect(()=> {
        if (localStorage.getItem("token")&& localStorage.getItem("token")!=="" )
        {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    "authorization": localStorage.getItem("token")
                },
            };
            fetch('http://localhost:8000/autoLogin',options)
                .then((res) => res.json())
                .then((data) => {
                });
            setWindow(2)
        } else {
            return  setWindow(1)
        }
    },[window])


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
                if(!data.error)  {
                    localStorage.setItem("token", (data.data));
                    setWindow(2)
                }
            });

    }
    function startGame () {
        setWindow(1)
        nav('/lobby')
    }

    return (
        <div >
            {window===1 && <div className="d-flex f-col login">
                <h1>Login</h1>
                <div>
                    <input type="text" placeholder="username" ref={usernameRef}/>
                </div>
                <div>
                    <input type="text" placeholder="password" ref={passwordRef}/>
                </div>
                <div>

                    <button  onClick={login}>LOGIN</button>
                </div>
            </div> }



            {window===2 &&

                <div className="startGameField">
                    <h1 style={{color: "white"}}>YOU ARE LOGGED </h1>
                    <button onClick={startGame}>Start Game</button>
                </div> }

        </div>
    );
};

export default Login;