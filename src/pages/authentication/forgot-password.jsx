import { SignIn } from "../../components/authentication"

const ForgotPasswordPage = ({setPageState}) => {
    const goToSignIn = ()=> {
        setPageState('')
    }
    return (
        <SignIn handleEntry={goToSignIn}/>
    )
}

export default ForgotPasswordPage;