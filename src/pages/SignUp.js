import classes from './SignUp.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const onName = (event) => {
        setName(event.target.value);
    }
    const onEmail = (event) => {
        setEmail(event.target.value);
    }
    const onPassword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
        let result = await fetch('http://localhost:5000/signup',{
            method:'POST',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if(result){
            navigate('/');
        }
        setName('');
        setEmail('');
        setPassword('');
        
    }
    return (
        <div className={classes.signUp}>
            <h1>Sign Up</h1>
            <form className={classes.signUpForm} onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder="Enter Name"
                    value={name}
                    onChange={onName}
                />
                <input
                    type='text'
                    placeholder="Enter Email"
                    value={email}
                    onChange={onEmail}
                />
                <input
                    type='password'
                    placeholder="Enter Password"
                    value={password}
                    onChange={onPassword}
                />
                <button type='submit' className={classes.button}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;