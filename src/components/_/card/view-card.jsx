const ViewCard = ({topic, value}) => {
    return(
        <div className="p-5 bg-purple-800 rounded-xl w-full views">
            <p className="text-base font-bold text-white opacity-30">{topic}</p>
            <p className="text-base font-semibold text-white">{value}</p>
        </div>
    )
}

export default ViewCard;