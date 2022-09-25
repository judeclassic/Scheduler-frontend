//@ts-check
import { useState, useContext } from 'react'
import { SignIn } from "../../components/authentication"
import { UserContext } from '../../context/userContext';

const SignInPage = ({setPageState}) => {
    // @ts-ignore
    const { userRequest, error } = useContext(UserContext);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ checked, setChecked ] = useState(false);

    const handleEntry = (e) => {
        if ( e.target.name === 'email' ) {
            setEmail(e.target.value)
        } else
        if ( e.target.name === 'password' ) {
            setPassword(e.target.value)
        } else {
            setChecked((value)=>!value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        userRequest.loginUser({email, password});
    }

    const toRegistration = () => {
        setPageState('sign-up')
    }

    return (
        <SignIn email={email} password={password} checked={checked} handleEntry={handleEntry} handleSubmit={handleSubmit} toRegistration={toRegistration} error={error}/>
    )
}

export default SignInPage