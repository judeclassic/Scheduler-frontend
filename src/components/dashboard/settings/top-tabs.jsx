const Tabs = ({tabIndex, setTabIndex}) => {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-purple-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
                <a href="#" aria-current="page"
                    onClick={() => setTabIndex('apiKeys')}
                    className={`inline-block ${tabIndex === 'apiKeys' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>API KEYS</a>
            </li>
            <li className="mr-2">
                <a href="#" 
                    onClick={() => setTabIndex('profileTab')}
                    className={`inline-block ${tabIndex === 'profileTab' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>Profile</a>
            </li>
            <li className="mr-2">
                <a href="#"
                    onClick={() => setTabIndex('accountsTab')}
                    className={`inline-block ${tabIndex === 'accountsTab' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>Accounts</a>
            </li>
            <li className="mr-2">
                <a href="#"
                    onClick={() => setTabIndex('popup')}
                    className={`inline-block ${tabIndex === 'popup' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>Pop up</a>
            </li>
            <li>
                <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li>
        </ul>
    )
}

export default Tabs