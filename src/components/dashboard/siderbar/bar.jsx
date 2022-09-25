//@ts-check

//'text-[#4F46BA]

const Bar = ({isExpanded, icon, name, colorState, setClick, index}) => {
    const color = colorState === index ? 'text-purple-800 bg-white rounded-l-full p-[10px]' : 'text-white p-[20px] bg-purple-800';
    const after = colorState === index + 1 ? 'rounded-br-2xl pb-[30px]' : '';
    const before = colorState === index - 1 ? 'rounded-tr-2xl pt-[30px]' : '';

    const click = ()=>{
        if (index === 0 || index === 7 || index === colorState) return;
        setClick(index)
    }

    return (
        <div className='bg-white rounded-l-full'>
            <a className={`flex flex-row justify-start items-center ${color} rounded-r-[-30px] ${after} ${before}`} onClick={click}>
                <span className="pl-2 pr-3"> {icon} </span>
                <span className={`${isExpanded ? 'hidden' : 'flex'}`}> {name} </span>
            </a>
        </div>
    )
}

export default Bar;