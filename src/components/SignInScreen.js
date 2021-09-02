import React, { useRef } from 'react';
import './SignInScreen.css';
import { auth } from '../firebase';

function SigninScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return(
        <div className='SignupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4><span className='newtoNetflix'>New to Netflix? </span>
                    <span className='signlink' onClick={register}>Sign up now.</span></h4>
            </form>
        </div>
    );
}

export default SigninScreen;