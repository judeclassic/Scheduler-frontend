//@ts-check
import MonacoEditor from "@monaco-editor/react";
import { useEffect } from "react";

const Editor = ({ onChange, defaultValue }) => {
	const handleOnChange = (value) => {
		onChange(value)
	}

	useEffect(()=> {
		console.log(defaultValue.substring(0,20))
	},[defaultValue]);
	
  	return (
		<MonacoEditor
			height="500px"
			defaultLanguage='html'
			defaultValue={''}
			value={defaultValue}
			onChange={handleOnChange}
		/>
	);
}

export default Editor;