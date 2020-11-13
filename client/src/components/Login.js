import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';


  // make a post request to retrieve a token from the api
  const Login = props => {
    const [credentials, setCredentials] = useState({
      username: "",
      password: ""
    });
  
    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
    };
  
    const login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/login", credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubblepage")
        })
    }
  
    // when you have handled the token, navigate to the BubblePage route
    return (
      <>
      
        <h1>Welcome to the colorful Bubble App!</h1>
          
        <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={credentials.password}
            onChange={handleChange} />
          <button>Login!</button>
        </form>
        
      </>
    );
  };


export default Login;
