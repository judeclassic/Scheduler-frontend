
//@ts-check
import { useEffect, useState } from "react";
import Editor from "./editor";
import { emailTemplateExample } from "../../../examples/snippets/email-template";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa";
import { HeaderInput } from "../input";


const MainEditor = ({name, id, templateLink, onSave, onGenerate, onCancel }) => {
    const [ code, setCode ] = useState('');
    const [ editedCode, setEditedCode ] = useState(code);
    const [ inputText, setInputText ] = useState({});
    const [ open, setOpen ] = useState(false);
    const [ newName, setNewName ] = useState(name || '')
    const regex = /{{.+}}/i;

    const saveTemplate = () => {
        onSave({ newName, id, code });
    }

    const generateAPI = () => {
        onGenerate(code, inputText);
    }

    const checkForValues = (text) => {
        setCode(text);
        if (Object.entries(inputText).length == 0) {
            setEditedCode(text);
            return;
        }
        let newText = text;
        Object.entries(inputText).map((v, index)=> {
            newText = replaceAll(newText, `{{${v[0]}}}`, v[1]);
            if (index === Object.entries(inputText).length - 1) {
                setEditedCode(newText);
            }
        });
    }

    const replaceAll = (value, search, replacement) => {
        return value.split(search).join(replacement);
    };

    const handleChange = (e) => {
        const {value} = e.target;

        setInputText((prevInputs) => {
            prevInputs[e.target.name] = value;
            return prevInputs;
        });

        let newText = code;
        Object.entries(inputText).map((v, index)=> {
            if (e.target.name === v[0]) {
                newText = replaceAll(newText, `{{${v[0]}}}`, value);
            }
            newText = replaceAll(newText, `{{${v[0]}}}`, v[1]);
            if (index === Object.entries(inputText).length -1) {
                setEditedCode(newText);
            }
        });
    }

    const getAllCode = () => {
        const checkForDuplicates = {};
        return code.split('{{').map((value, index) => {
            if (index === 0) return <></>
            let dValue = value.split('}}')[0];
            if (checkForDuplicates[dValue]) {
                return (<></>);
            }
            checkForDuplicates[dValue] = 'exist';
            return (
                <div className="p-5">
                    <label>{dValue}</label>
                    <input name={dValue} value={inputText[dValue] || ''} onChange={handleChange} className='h-[50px] rounded-lg p-2' />
                </div>
            );
        });
    }

    useEffect(()=> {
        const process = async () => {
            try {
                if (templateLink) {
                    const res = await fetch(templateLink);
                    const text = await res.text();
                    checkForValues(text)
                    return;
                }
                checkForValues(emailTemplateExample)
            } catch (err) {
                checkForValues(emailTemplateExample)
            }
        }

        process();
    },[]);

    return (
        <>
        <div className="space-y-[20px]">
            <div className="w-full bg-slate-200 rounded-lg h-[80px] text-black flex flex-row justify-between items-center pr-6 pl-[5%]">
                <HeaderInput value={name} setNewValue={setNewName} />
                <div className=" space-x-4">
                    <button className="border-purple-800 border-2 p-[6px] px-8 h-[45px] rounded-xl justify-center items-center text-xl text-purple-800" onClick={generateAPI}>generate API</button>
                    <button className="bg-purple-800 p-[6px] px-8 h-[45px] rounded-xl justify-center items-center text-xl text-white" onClick={saveTemplate}>save</button>
                    <button className="bg-purple-800 p-[6px] px-8 h-[45px] rounded-xl justify-center items-center text-xl text-white" onClick={onCancel}>cancel</button>
                </div>
            </div>
            <div className="w-full bg-slate-200 rounded-lg h-[500px]">
                <div className="h-full flex flex-row justify-between">
                    
                    <Editor
                        defaultValue={code}
                        onChange={checkForValues}
                    />
                    <NameHolders getAllCode={getAllCode}/>
                </div>
            </div>
            <div className="w-full bg-slate-200 rounded-lg h-[700px] p-[5px]">
                <div>
                    {open ? <FaCompressAlt onClick={()=>setOpen(false)}/> : <FaExpandAlt onClick={()=>setOpen(true)}/>}

                </div>
                <iframe
                    srcDoc={replaceAll(editedCode, regex, '')}
                    title="output"
                    sandbox="allow-scripts" // security reason (e.g. Cookie Steal)
                    frameBorder="0"
                    width="100%"
                    height="95%"
                />
            </div>
        </div>
        </>
    )
};

const NameHolders = ({getAllCode}) => {

    return (
        <>
            <div className="flex flex-col w-[300px]">
                {getAllCode()}
            </div>
        </>
    )
}

export default MainEditor;