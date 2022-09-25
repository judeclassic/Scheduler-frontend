//@ts-check
import { SignUp } from '../../components/authentication';

import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext';

const SignUpPage = ({setPageState}) => {
    // @ts-ignore
    const { userRequest, error } = useContext(UserContext);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ countries, setCountries ] = useState([]);
    const [ city, setCity ] = useState('');
    const [ cities, setCities ] = useState([]);
    const [ password, setPassword ] = useState('');
    const [ checked, setChecked ] = useState(false);

    const handleEntry = (e) => {

        if ( e.target.name === 'name' ) {
            setName(e.target.value)
        } else
        if ( e.target.name === 'email' ) {
            setEmail(e.target.value)
        } else
        if ( e.target.name === 'country' ) {
            let st = countries[e.target.value];
            setCountry(st.country);
            setCities(st.cities);
        } else
        if ( e.target.name === 'city' ) {
            setCity(e.target.value)
        } else
        if ( e.target.name === 'password' ) {
            setPassword(e.target.value)
        } else {
            setChecked((value)=>!value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        userRequest.registerUser({ name, email, password, country, city }, toLogin);
    }

    const toLogin = () => {
        setPageState('sign-in');
    }

    const getAllCountries = async () => {
        let res = await userRequest.getAllCountries();
        setCountries(res);
    }

    useEffect(()=>{
        getAllCountries();
    },[])

    return (
        <SignUp 
            name={name}
            email={email}
            countries={countries}
            cities={cities}
            password={password}
            checked={checked}
            handleEntry={handleEntry}
            handleSubmit={handleSubmit}
            toLogin={toLogin}
            error={error} />
    )
}

export default SignUpPage;