const ErrorText = ({array}) => {
    console.log({array})
    return (
        <div className="justify-center">
            {array && array.length > 0 && array.map((value, index) => {
                return (<p key={index} className="text-red-900 text-sm w-[250px]">{value}</p>);
            })}
        </div>
    );
}

export default ErrorText;