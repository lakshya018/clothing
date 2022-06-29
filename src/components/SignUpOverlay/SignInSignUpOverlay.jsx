import Button from "../Button/Button";
import './SignInSignUpOverlay.scss';

const SignInSignUpOverlay = () => {
    const signUpClicked = () => {
        document.getElementById("signInContainer").classList.add("right-panel-active");
  }
  const signInClicked = () => {
        document.getElementById("signInContainer").classList.remove("right-panel-active");
  }
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Already Have An Account? </h1>
                    <p>Click on Sign In to get logged into your account.</p>
                    <Button buttonType="ghost" id="signIn" onClick={signInClicked}>Sign In</Button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Don't Have An Account?</h1>
                    <p>Create your account by clicking on Sign Up.</p>
                    <Button buttonType="ghost" id="signUp" onClick={signUpClicked} >Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default SignInSignUpOverlay;