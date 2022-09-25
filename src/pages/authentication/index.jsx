import SignUpPage from "./sign-up";
import SignInPage from "./sign-in";
import ForgotPasswordPage from "./forgot-password";
import { useState } from "react";


const Authentication = () => {
    const [ pageState, setPageState] = useState('sign-in');

    return (
        <>
        { pageState === 'sign-up' && <SignUpPage setPageState={setPageState} /> }
        { pageState === 'sign-in' && <SignInPage setPageState={setPageState}/> }

        { pageState === 'forgot-password-page' && <ForgotPasswordPage setPageState={setPageState}/> }
        </>
    )
}

export default Authentication;