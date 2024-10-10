import React from 'react'
import classes from './login.module.css'

const Login = () => {
  return (
    <div>
        <h2 className="text-5xl text-center">Login Page</h2>

        <button className="submit-btn">Login button</button>

        <button className={classes.btn} >Local CSS</button>
    </div>
  )
}

export default Login;