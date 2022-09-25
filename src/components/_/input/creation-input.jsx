const CreationInput = ({name, value, onChange}) => {
    return (
        <div className='mb-3'>
        <input 
            type={name}
            autoComplete={'scheduler'}
            required
            name={name}
            placeholder={`Enter your ${name}`}
            value={value}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-violet-800 focus:border-violet-800 block w-full h-[70px] p-2.5"></input>
        </div>
    )
}

export default CreationInput;