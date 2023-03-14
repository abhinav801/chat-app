import React, { useState } from 'react'
import "./Join.css";
import logo from "../../images/chat_app_logo.jpg";
import { Link } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
    document.getElementById('joinInputPassword').value = "";
}


const Join = () => {

    const [name, setname] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                {/* <h1>Chat App</h1> */}
                <div className="input">
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" className='inputPlace' type="text" id="joinInput" />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" className='inputPlace' type="password" id="joinInputPassword" />
                </div>
               
                <Link onClick={(event) => !name || !password ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
export { user }
