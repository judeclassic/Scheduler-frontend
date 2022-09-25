
const SubmitButton = ({value}) => {
    return (
        <button
              type="submit"
              value={value}
              className="inline-block px-7 py-3 w-full bg-gradient-to-t from-violet-700 to-violet-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {value}
        </button>
    )
}

export default SubmitButton;