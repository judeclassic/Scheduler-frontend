//@ts-check
import { useEffect, useState } from "react";
import { SubmitButton } from "../../_/button";
import { AuthInput } from "../../_/input";

const ProfileTab = ({user, onSave}) => {
    const [ users, setUsers ] = useState(user);

    const handleEntry = (e) => {
        const { value, name } = e.target;

        
        setUsers((entry) => {return{...entry, [name]: value}});
    };

    const saveConfigurations = (e) => {
        e.preventDefault();
        onSave({users});
    }

    useEffect(()=>{
        if (user) {
            setUsers(user);
        }
    }, [user])

    return (
        <>
        <form className="justify-center md:w-[400px] w-[100%]" onSubmit={saveConfigurations} >
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            <div className="flex items-center justify-between flex-row">
                <AuthInput value={users.firstName} onChange={handleEntry} name='firstName' />
                <AuthInput value={users.surName} onChange={handleEntry} name='surName' />
            </div>
            <AuthInput value={users.email} onChange={handleEntry} name='email' />
            <div className=" h-[15px] mt-[30px]">
                <input type='submit' className="justify-center text-white text-lg p-[7.5px] px-[25px] bg-purple-700 hover:bg-purple-800 rounded-lg" value="Save" />
            </div>
        </form>
        </>
    )
}

export default ProfileTab;
