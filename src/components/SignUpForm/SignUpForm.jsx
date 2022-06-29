import googleImg from '../../assets/google.png';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';
import './SignUpForm.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Your Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            }
            else {
                console.log("User creation encountered an error", error);
            }
          
        }
    }
    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <Button buttonType="google">
                        <div className="sign-google">
                            <img src={googleImg} alt="" />
                            <p>Sign In With Google</p>
                        </div>
                    </Button>
                </div>
                <span>or</span>
                <input type="text" placeholder="Name" required onChange={handleChange} name="displayName" value={displayName} />
                <input type="email" placeholder="Email" required onChange={handleChange} name="email" value={email} />
                <input type="password" placeholder="Password" required onChange={handleChange} name="password" value={password} />
                <input type="password" placeholder="Confirm Password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}
export default SignUpForm;