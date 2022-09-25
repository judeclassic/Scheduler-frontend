//@ts-check
import { useContext, useState } from "react"
import { AccountsTab, APIKeysTab, Popup, ProfileTab, Tabs } from "../../../components/dashboard/settings";

import { UserContext } from "../../../context/userContext"

const SettingsTab = () => {
    // @ts-ignore
    const { userRequest, user } = useContext(UserContext);
    const [ tabIndex, setTabIndex ] = useState('apiKeys');

    const saveAPIDetails = ({webHooks, secretKey}) => {
        userRequest.updateApiSettings({webHooks, secretKey})
    }

    const saveUserDetails = ({users}) => {
        console.log({...users, name: `${users.firstName} ${users.surName}`})
        userRequest.updateUserSettings({...users, name: `${users.firstName} ${users.surName}`})
    }
    
    return (
        <div className="">
            <Tabs setTabIndex={setTabIndex} tabIndex={tabIndex}/>
            {tabIndex === 'apiKeys' && <APIKeysTab user={user} onSave={saveAPIDetails} />}
            {tabIndex === 'profileTab' && <ProfileTab user={user} onSave={saveUserDetails}/>}
            {tabIndex === 'accountsTab' && <AccountsTab />}
            {tabIndex === 'popup' && <Popup />}
        </div>
    )
}

export default SettingsTab