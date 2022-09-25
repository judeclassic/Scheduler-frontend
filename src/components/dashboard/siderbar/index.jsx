//@ts-check
import { useState } from 'react';
import { GoHome } from 'react-icons/go'
import { GiTestTubes } from 'react-icons/gi'
import { MdMarkEmailUnread, MdLiveHelp } from 'react-icons/md'
import { TbTemplate } from 'react-icons/tb'
import { RiSettings4Fill } from 'react-icons/ri'
import { VscSignIn } from 'react-icons/vsc'

import Bar from './bar';

const Sidebar = ({handleClick}) => {
    const [ colorState, setColorState ] = useState(1)
    const [ isExpanded, setIsExpanded ] = useState(true)

    const setClick = (name) => {
        setColorState(name);
        handleClick(name);
    }

    const click = () => {
        if (isExpanded)
            return setIsExpanded(false);
        else
            return setIsExpanded(true);
    }

    return (
        <div className={` h-screen ${isExpanded ? 'xl:w-[93px] md:w-[93px]' : 'w-[200px]'} md:flex hidden bg-purple-800 pl-2`}>
            <ul className={`${isExpanded ? 'xl:w-[85px] md:w-[85px]' : 'w-[200px]'}`}>
                <div className=' pb-[30px] pt-[30px] text-white p-[20px] bg-purple-800'>
                    <a className={`flex flex-row justify-start items-center `} onClick={click}>
                        <span className="pl-2 pr-3"> <MdMarkEmailUnread size={40} /> </span>
                        <span className={`${isExpanded ? 'hidden' : ''} `}> Scheduler </span>
                    </a>
                </div>

                <Bar isExpanded={isExpanded} icon={undefined} name='' colorState={colorState} setClick={setClick} index={0} />
                <Bar isExpanded={isExpanded} icon={<GoHome size={22}/>} name='Dashboard' colorState={colorState} setClick={setClick} index={1} />
                <Bar isExpanded={isExpanded} icon={<GiTestTubes size={22}/>} name='Testing' colorState={colorState} setClick={setClick} index={2} />
                <Bar isExpanded={isExpanded} icon={<TbTemplate size={22}/>} name='Template' colorState={colorState} setClick={setClick} index={3} />
                <Bar isExpanded={isExpanded} icon={<MdLiveHelp size={22}/>} name='Help' colorState={colorState} setClick={setClick} index={4} />
                <Bar isExpanded={isExpanded} icon={<RiSettings4Fill size={22}/>} name='Setting' colorState={colorState} setClick={setClick} index={5} />
                <Bar isExpanded={isExpanded} icon={<VscSignIn size={22}/>} name='Sign Out' colorState={colorState} setClick={setClick} index={6} />
                <Bar isExpanded={isExpanded} icon={undefined} name='' colorState={colorState} setClick={setClick} index={7} />
            </ul>
        </div>
    )
}

export default Sidebar;