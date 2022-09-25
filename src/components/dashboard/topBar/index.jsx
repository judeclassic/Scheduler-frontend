//@ts-check

import { useState } from "react";

const TopBar = ({user}) => {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className=" h-[40px] flex flex-row justify-between">
                <p className='text-base font-bold'>30 Days Performance</p>
                <div className="flex flex-col">
                    <img onClick={toggleMenu} className="w-10 h-10 rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/25759838?s=400&u=0bdd8f8abb1038406124bb0bd55f18d4aad98d80&v=4" alt="User dropdown"/>

                    {isOpen && 
                        <div>
                            <div id="userDropdown" className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-[20px]">
                                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                                    <div className="py-2 px-4">{user && `${user.firstName} ${user.surName}`}</div>

                                    <div className="font-medium truncate py-2 px-4">{user && user.email}</div>
                                </div>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
    )
}

export default TopBar