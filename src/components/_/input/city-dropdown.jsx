const CityDropdown = ({name, onChange, list}) => {
    return (
        <div className='mb-3'>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">Select a city</label>
            <select id={name} name={name} onChange={onChange} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-800 focus:border-violet-800 block w-[97%] p-2.5">
                <option value={''}>Choose {name}</option>
                {list.map((data, index)=> {
                    return <option key={index} value={data} onSelect={()=>{onChange(data)}}> {data} </option>
                })}
            </select>
        </div>
    )
}

export default CityDropdown;