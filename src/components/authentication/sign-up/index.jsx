//@ts-check
import { AuthInput, CountryDropdown, CityDropdown } from "../../_/input";
import { FaGithubSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SubmitButton } from "../../_/button";
import { ErrorText } from "../../_/text";

const SignUp = ({name, email, countries, cities, password, checked, handleEntry, handleSubmit, toLogin, error}) => {
    return (
        <div className="grid md:grid-cols-5 grid-cols-1 h-[100vh]">
            <div className="flex justify-center items-center bg-slate-100 col-span-2">
                <form className="justify-center" onSubmit={handleSubmit} >
                    <h1 className="text-4xl mb-3"> Get Started With </h1>
                    <div className="flex flex-row justify-around items-center">
                        <div>Sign up with</div>
                        <div className="cursor-pointer"><FaGithubSquare size={40} /></div>
                        <div className="cursor-pointer"><FcGoogle size={40} color={'#339F'} /></div>
                    </div>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    <AuthInput value={name} onChange={handleEntry} name='name' />
                    <AuthInput value={email} onChange={handleEntry} name='email' />
                    <AuthInput value={password} onChange={handleEntry} name='password' />
                    <div className="grid grid-flow-col w-[270px] mt-2 pt-2">
                        <CountryDropdown onChange={handleEntry} name='country' list={countries} />
                        <CityDropdown onChange={handleEntry} name='city' list={cities} />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                checked={checked}
                                onChange={handleEntry}
                            />
                            <label className="form-check-label inline-block text-gray-800 text-sm justify-between">
                                I agree to the 
                                <a href="#!"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out text-sm">
                                    {`${' Terms of Services '}`}
                                </a>
                                and <br/>
                                <a href="#!"
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out text-sm">
                                    Private Policy
                                </a>
                            </label>
                        </div>
                    </div>
                    <ErrorText array={error} />
                    <div className=" h-[15px]"/>
                    <SubmitButton value={'Sign Up'} />
                    <p className="text-sm font-semibold mt-2 pt-10 mb-0 justify-around flex"> Already have an account? 
                        <a 
                            onClick={toLogin}
                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out cursor-pointer" > Sign In </a> </p>
                </form>
            </div>
            <div className=" md:flex gradient hidden col-span-3 justify-center items-center">
                <div className="md:w-4/5 z-50 h-[60%] bg-[url(src/assets/images/hero.png)] bg-contain bg-no-repeat" />
            </div>
        </div>
    );
}

export default SignUp;