const AuthInput = ({name, value, onChange}) => {
    return (
        <div className='mb-3'>
            <label className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
            <input 
                type={name}
                autoComplete={'scheduler'}
                required
                name={name}
                placeholder={`Enter your ${name}`}
                value={value}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-800 focus:border-violet-800 block w-full p-2.5"></input>
        </div>
    )
}

export default AuthInput;