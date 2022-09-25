import { FcTemplate } from 'react-icons/fc';
import {  FaEdit } from 'react-icons/fa';
import {  MdDeleteForever } from 'react-icons/md';

const Template = ({name, templeteId, editTemplate, deleteTemplate}) => {
    let id = `${templeteId} ${Math.random() * 1000000})}`;
    return (
        <div key={id} className="h-[100px] w-full outline-dashed rounded-3xl flex flex-row justify-between items-center p-5 m-2">
           <div className='flex flex-row justify-center items-center'>
                <FcTemplate size={80} />
                <div className='flex flex-col'>
                    <h1 className=' text-lg'>{name}</h1>
                    <h1 className=' text-base'>{templeteId}</h1>
                </div>
           </div>

           <div className='flex flex-row mr-[15px] space-x-4' >
               <a className='cursor-pointer text-violet-800' onClick={() => editTemplate(templeteId)}><FaEdit size={24}/></a>
               <a className='cursor-pointer text-violet-800' onClick={() => deleteTemplate(templeteId)}><MdDeleteForever size={28}/></a>
           </div>
        </div>
    )
}

export default Template;