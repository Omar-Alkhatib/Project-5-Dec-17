import React,{useState} from 'react'
import logo from './pics/logo.png'
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const Signup = () => {

const history = useHistory();    
const [userName,setuserName]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [confPassword,setconfPassword]=useState('')
const [phone,setphone]=useState('')
const [adress,setadress]=useState('')
const [role,setrole]=useState('student')
const [emailErr,setemailErr]=useState('')
const [userErr,setuserErr]=useState('')
const [passErr,setpassErr]=useState('')

const roleHandler=()=>{
    setrole("instructor")
}
const passMatch=(password,confPassword)=>{
    if(password !== confPassword){
        setpassErr(true);
    }
}
const signup=(name,email,adress,password,phone,confPassword)=>{
    axios.post(`http://localhost:5000/registration/register/${role}`,{name,email,adress,password,phone,confPassword})
        .then((response)=>{
            if(response.data === "Email is used.."){
                setemailErr(true)
            }else if(response.data === "User name is used.."){
                setuserErr(true)
            }else if(response.data === "Passwords don't match.."){
                setpassErr(true)
            }
            else{
                history.push("/");
            }
        })
        .catch((err)=>{throw err})
}

    return (
        <div className="register-cont">
            <div className="register">
                <div className="register-logo">
                    <img src={logo} alt=""></img>
                    <p>Sign Up as student or Instructor</p>
                </div>
                <div className="s-border"></div>
                <div className="inputs">
                    <input placeholder="User Name" name="text" onChange={(e)=>{setuserName(e.target.value); setuserErr(false)}} required/>
                    <h5>{userErr?(<span>User is already used...</span>):''}</h5>
                    <input placeholder="Email" name="email" onChange={(e)=>{setemail(e.target.value);setemailErr(false)}} required/>
                    <h5>{emailErr?(<span>Email is already used...</span>):(<span></span>)}</h5>
                    <input placeholder="Password" name="password" type="password" onChange={(e)=>{setpassword(e.target.value);setpassErr(false)}}required/>
                    <input placeholder="Confirm Password" name="password" type="password" onChange={(e)=>{setconfPassword(e.target.value);;setpassErr(false)}} required/>
                    <h5>{passErr?(<span>Passwords doesn't match</span>):''}</h5>
                    <input placeholder="Phone Number" name="number" type="number" onChange={(e)=>setphone(e.target.value)} required/>

                    <input placeholder="Adress" name="text" onChange={(e)=>setadress(e.target.value)} required/>
                </div>
                <div className="check">
                            <input type="checkbox" name="" onClick={roleHandler} ></input>
                            <label > Register as a Instructor</label>
                        </div>
                <div className="signup">

                    <button onClick={()=>{signup(userName,email,adress,password,phone,confPassword)}}>Sign Up</button>
                    <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy . </p>
                </div>
            
            </div>
            <div className="is-sign">
                <p>Have an account?</p><a href="http://localhost:3000/login">Log In</a>
            </div>   
        </div>
        
    )
}

export default Signup

