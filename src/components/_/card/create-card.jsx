//@ts-check
import { IoIosCreate } from 'react-icons/io'

const CreateCard = ({value}) => {
    return(
        <div className="p-5 bg-purple-800 rounded-xl w-full flex flex-row justify-around items-center" >
            <span className="text-white"><IoIosCreate size={32}/></span>
            <span className="text-base font-semibold text-white">{value}</span>
        </div>
    )
}

export default CreateCard;