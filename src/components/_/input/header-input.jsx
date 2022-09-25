
const HeaderInput = ({value, setNewValue}) => {
    return (
        <div>
            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-lg font-semibold "
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
                value={value}
                onChange={(e)=>setNewValue(e.target.value)}
            />
        </div>
    )
}

export default HeaderInput;