import React from "react";
import './Register.css'
import { useState, useEffect } from "react";

const Register = () => {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [otp,setotp] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email Format!"
        }

        if (!values.password) {
            errors.password = "password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 charechter."
        }
        return errors;
    };
    // const Demo = () => {
        const handleGenerate = () => {
            console.log("Generate")
            let result = '';
            let counter = 0;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            while (counter < 6) {
                result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
                counter = counter + 1;
            }
            // console.log(result)
            setotp(result)
        };
    // }

    return (
        <>
            <div className="register">

                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1>Registaion Form</h1>
                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">
                                <label>Username</label>
                                <input type="text" name="username" placeholder="UserName"
                                    value={formValues.username} onChange={handleChange} />

                            </div>
                            <p>{formErrors.username}</p>
                            <div className="field">
                                <label>Email</label><br></br>
                                <input type="email" name="email" placeholder="Email"
                                    value={formValues.email} onChange={handleChange} />
                            </div>
                            <p>{formErrors.email}</p>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password"
                                    value={formValues.password} onChange={handleChange} />
                            </div>
                            <p>{formErrors.password}</p>
                            <button className="fluidUi" onClick={handleGenerate}>Submit</button>
                            {otp.length>0?<h2>YOUR OTP IS : {otp}</h2>:null}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register