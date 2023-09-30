import React, {useEffect, useRef, useState} from 'react';
import Avatars from "./Avatars";


const Register = ({setLoginOrRegister}) => {
    const [selectAvatar, setSelectAvatar] = useState()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const password2Ref = useRef()
    const [avatars, setAvatars] = useState()

    useEffect(()=> {
        fetch('http://localhost:8000/avatars')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data)
                setAvatars(data.data)
            });
        console.log("1")

    },[])

    function register () {
        console.log("register")
            const user = {
                avatar: selectAvatar,
                username: usernameRef.current.value,
                password: passwordRef.current.value,
                password2: password2Ref.current.value
            }
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user),
            };
            fetch('http://localhost:8000/register', options)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                });
        console.log("register2")

    }

    return (
        <div className="d-flex f-col login register">
            <div className="d-flex avatars">
                {avatars && avatars.map((x,i)=> <div key={i}>
                        <Avatars x={x} i={i} setSelectAvatar={setSelectAvatar} selectAvatar={selectAvatar}/>
                </div>  )}
            </div>
            <div>
                <input type="text" placeholder="username" ref={usernameRef}/>
            </div>
            <div>
                <input type="text" placeholder="password" ref={passwordRef}/>
            </div>
            <div>
                <input type="text" placeholder="password2" ref={password2Ref}/>
            </div>
            <div>
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
};

export default Register;