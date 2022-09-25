//@ts-check

import { useEffect, useState } from "react";
import { IoIosCopy } from "react-icons/io"
import {  MdAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SpecialInput } from "../../_/input";

const APIKeysTab = ({user, onSave}) => {
    const [ webHooks, setWebhooks ] = useState(user && user.webHooks);
    const [ secretKey, setSecretKey ] = useState(user && user.secretKey);

    const onChanged = (e) => {
        const { value, name } = e.target;

        
        let newWebHooks = webHooks.map((input) => {
            if (input.name === name) {
                return {name, value};
            }
            return input;
        });
        setWebhooks(newWebHooks);
    };

    const saveConfigurations = (e) => {
        e.preventDefault();
        onSave({webHooks, secretKey});
    }

    const addWebHook = () => {
        setWebhooks((prevWebHooks) => {
            return [...prevWebHooks, {name: `webhook-${prevWebHooks.length}`, value: ''}];
        });
    }

    const copyToClipboard = (name, code) => {
        navigator.clipboard.writeText(code);
        alert(`Copied ${name} to clipboard`);
    }

    const removeWebHook = (name) => {
        setWebhooks((prevWebHooks) => {
            return prevWebHooks.filter(webhook => webhook.name !== name);
        });
    }

    useEffect(()=>{
        if (user) {
            setWebhooks(user.webHooks);
            setSecretKey(user.secretKey);
        }
    }, [user.webHooks])

    return (
        <>
        <form className="flex w-full flex-col" onSubmit={saveConfigurations}>
            <div className="w-[100%] justify-between items-center p-6 flex flex-row ">
                <h5 className="text-md font-medium text-gray-900">API DASHBOARD</h5>
                
            </div>
            <div className="w-[100%] md:w-[500px] p-6">
                <div className="form-horizontal w-full space-y-5">
                    <div className="px-[10px]">
                        <SpecialInput name={'secretKey'} title={'Secret Key'} value={secretKey} onChange={undefined}
                            icon={<IoIosCopy onClick={() => copyToClipboard('Secret Key', secretKey)}/>} type="text"/>
                        <SpecialInput name={'publicKey'} title={'Public Key'} value={user && user.publicKey} onChange={undefined}
                            icon={<IoIosCopy onClick={() => copyToClipboard('Public Key', user && user.publicKey)}/>} type="text"/>
                    </div>
                    <div className="p-[10px] outline-purple-300 outline-2 outline-dotted rounded-xl">
                        <label className="block text-sm font-medium text-gray-900">{'Webhook'}</label>
                        <div className=" space-y-[20px]">
                            {webHooks.map((input)=> {
                                return (<div className="text-sm flex flex-col">
                                    <SpecialInput name={input.name} title={''} value={input.value} onChange={onChanged} type="url"
                                        icon={<RiDeleteBin6Line className="text-red-700" onClick={()=>removeWebHook(input.name)}/>} />
                                </div>);
                            })}
                        </div>
                        <div className="pt-5 flex flex-row itmes-center pl-">
                            <span className="text-xl text-black cursor-pointer"><MdAdd onClick={()=>addWebHook()}/></span>
                            <p className="text-sm font-medium text-gray-900"> add more webhook</p>
                        </div>
                    </div>
                    <input type='submit' className="justify-center text-white text-lg p-[7.5px] px-[25px] bg-purple-700 hover:bg-purple-800 rounded-lg" value="Save" />
                </div>
            </div>
        </form>
        </>
    )
}

export default APIKeysTab;