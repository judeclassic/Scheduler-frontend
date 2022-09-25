const CountryDropdown = ({name, onChange, list}) => {
    return (
        <div className='mb-3'>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">Select a country</label>
            <select id={name} name={name} onChange={onChange} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-800 focus:border-violet-800 block w-[97%] p-2.5">
                <option key={'123aa'} value={''}>Choose {name}</option>
                {list.map((data, index)=> {
                    return <option key={index} value={index}> {data[name]} </option>
                })}
            </select>
        </div>
    )
}

export default CountryDropdown;