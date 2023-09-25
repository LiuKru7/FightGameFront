import React, {useState} from 'react';
import Login from "../components/Login";
import Register from "../components/Register";

const IndexPage = () => {

    const [loginOrRegister, setLoginOrRegister] = useState(0)

    return (
        <div className="container">
            <div>
                <button style={{backgroundColor: loginOrRegister===0 ? "green" : "darkgray"}} onClick={()=>{setLoginOrRegister(0)}}>Login</button>
                <button style={{backgroundColor: loginOrRegister===1 ? "green" : "darkgray"}} onClick={()=>{setLoginOrRegister(1)}}>Register</button>
            </div>
            {loginOrRegister===0 &&
            <div>
                <Login></Login>
            </div>}
            {loginOrRegister===1 &&
                <div>
                    <Register setLoginOrRegister={setLoginOrRegister}></Register>
                </div>}
        </div>
    );
};

export default IndexPage;