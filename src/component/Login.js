import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import "./styles/Login.css"

function Login(){

        const initialValue = {email: "", password: ""};
        const [formValues, setFormValues] = useState(initialValue);
        const[formErrors, setFormErrors] = useState({});
        const[, setIsSubmit] = useState(false);
        const navigate = useNavigate();
        const { signIn } = UserAuth();
        const {signInWithGoogle} = UserAuth();
    

        const validate = (values) => {
            const errors = {};
            const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            const regexPass =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (!values.email) {
              errors.email = "Email is required!";
            } else if (!regexMail.test(values.email)) {
              errors.email = "This is not a valid email format!";
            }
            if (!values.password) {
              errors.password = "Password is required!";
            } else if (!regexPass.test(values.password)) {
              errors.password = "This is not a valid email format!";
            }
            return errors;
          };

          const handleChange = (e) => {
            const {name, value } = e.target;
            console.log(e.target)
            setFormValues({...formValues, [name]:value});
          };

          const handleSubmit = async (e) => {
            e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
            try {
                await signIn(formValues.email, formValues.password)
                navigate('/home')
            }
            catch(e){
                setIsSubmit(false)
            }
          }

          const signinGoogle = async(e) => {
            try{
                e.preventDefault();
                await signInWithGoogle();
                navigate('/home')
            }
            catch(err){
                alert(err)
                navigate('/')
            }
        }

        

          useEffect(() => {
            if(Object.keys(formErrors).length === 0){}
          },[formErrors])
        
        return (
            <div>
                <div className="container">
                    <div><h1>Login Page</h1></div>
                    <button className="googleLogin" onClick={signinGoogle}>Login with google</button>
                    <div className="manualLogin">
                        <label>Email</label>
                        <input name="email" placeholder="Enter email" value={formValues.email} onChangeText={handleChange} type="email"></input>
                        <span style={{color:"red"}}>{formErrors.email}</span>
                        <label>Password</label>
                        <input name="password" placeholder="Enter Password" value={formValues.password} onChangeText={handleChange} type="password"></input>
                        <span style={{color:"red"}}>{formErrors.password}</span>
                        <button onClick={handleSubmit}>Login</button>           
                    </div>
                    <div className="signUpLink">                        
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                    
                </div>
            </div>
        )
}

export default Login