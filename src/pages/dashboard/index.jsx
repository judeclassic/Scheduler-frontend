//@ts-check
import { useState, useContext, useEffect } from 'react'
import { HomeTab, TestingTab, TemplateTab, SettingsTab } from './tabs';
import { Sidebar, TopBar } from '../../components/dashboard';

import { UserContext } from '../../context/userContext';

const Dashboard = () => {
    const [ page, setPage ] = useState(1);
    // @ts-ignore
    const { userRequest, user } = useContext(UserContext);

    const handleClick = (name) => {
        setPage(name)
    }

    useEffect(()=>{
        userRequest.getUserData();
    },[]);

    return (
        <div className='flex flex-row justify-start'>
            <Sidebar handleClick={handleClick}/>
            <div className=' h-[100vh] w-full overflow-x-clip p-5 overflow-y-scroll'>
                <TopBar user={user} />
                { page === 1 && <HomeTab/> }
                { page === 2 && <TestingTab/> }
                { page === 3 && <TemplateTab/> }
                { page === 4 && <HomeTab/> }
                { page === 5 && <SettingsTab/> }
                { page === 6 && <HomeTab/> }
            </div>
        </div>
    );
}

export default Dashboard; 