import { VscCopy } from "react-icons/vsc";

const SpecialInput = ({name, title, value, icon, type, onChange}) => {
    
    return (
        <div className='mb-3'>
            <label className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
            <div class="mt-1 relative rounded-lg shadow-sm">
                <input 
                    type={type}
                    autoComplete={'scheduler'}
                    required
                    name={name}
                    placeholder={`Enter your ${name}`}
                    value={value}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-800 focus:border-violet-800 block w-full p-2.5"/>
                <div class="absolute inset-y-0 right-0 flex items-center bg-slate-300 rounded-r-lg px-[15px]">{ icon || <VscCopy /> }</div>
            </div>
        </div>
    )
}

export default SpecialInput;