const Tabs = ({tabIndex, setTabIndex}) => {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-purple-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mr-2">
                <a href="#" aria-current="page"
                    onClick={() => setTabIndex('JavaScript')}
                    className={`inline-block ${tabIndex === 'JavaScript' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>Javascript</a>
            </li>
            <li className="mr-2">
                <a href="#" 
                    onClick={() => setTabIndex('Python')}
                    className={`inline-block ${tabIndex === 'Python' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>Python</a>
            </li>
            <li className="mr-2">
                <a href="#"
                    onClick={() => setTabIndex('Flutter')}
                    className={`inline-block ${tabIndex === 'Flutter' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>Flutter</a>
            </li>
            <li className="mr-2">
                <a href="#"
                    onClick={() => setTabIndex('NodeJs')}
                    className={`inline-block ${tabIndex === 'NodeJs' ? 'bg-purple-800 text-white' : 'hover:bg-gray-100 text-white-600 bg-white'} p-4 rounded-t-lg`}>NodeJs</a>
            </li>
        </ul>
    )
}

export default Tabs