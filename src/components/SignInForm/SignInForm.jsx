import googleImg from '../../assets/google.png';
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword, auth, signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';
import './SignInForm.scss';

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert('Password is incorrect. Try again!');
                    break;
                case "auth/user-not-found":
                    alert('Email does not exist. Try again!');
                    break;
                default:
                    console.log("Error encountered during user login", error);
            }
           
        }
    }


    const logGoogleUser = async () => {

        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);

    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <Button type="button" onClick={logGoogleUser} buttonType="google">
                        <div className="sign-google">
                            <img src={googleImg} alt="" />
                            <p>Sign In With Google</p>
                        </div>
                    </Button>


                </div>
                <span>or</span>
                <input type="email" placeholder="Email" required onChange={handleChange} name="email" value={email} />
                <input type="password" placeholder="Password" required onChange={handleChange} name="password" value={password} />
                <a href="#">Forgot your password?</a>
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    );
}
export default SignInForm;