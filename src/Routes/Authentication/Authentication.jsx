import './Authentication.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';
import SignInSignUpOverlay from '../../components/SignUpOverlay/SignInSignUpOverlay';



const SignIn = () => {

    return (
        <div className="signInPage">
            <div className="signInContainer" id="signInContainer">
               
                <SignUpForm/>
                <SignInForm />
                <SignInSignUpOverlay/>
            </div>

        </div>

    );
}


export default SignIn;