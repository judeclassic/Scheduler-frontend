//@ts-check
import { useEffect, useState } from "react";

import { SetUpJavascript, SetUpDart, SetUpPython, SetUpJavaScriptAxios } from '../../_/snippet-setups';

const GenerateApiPopup = ({codes, onCancel}) => {
    const [ selected, setSeleted ] = useState('Javascript');
    const [ parameters, setParameters ] = useState({});

    const setup = () => {
        const { code } = codes;
        let params = codes.parameters;

        if (Object.values(params).length === 0) {
            console.log('if you want to change')
            const checkForDuplicates = {};
            code.split('{{').map((value, index) => {
                if (index === 0) return <></>
                let dValue = value.split('}}')[0];
                if (checkForDuplicates[dValue]) {
                    return (undefined);
                }
                checkForDuplicates[dValue] = 'exist';
                params[dValue] = '';
            });
        }
        setParameters(params);
    }

    useEffect(() => {
        setup();
    }, [])

    return (
        <>
            <div className="fixed h-full w-full bg-slate-300 opacity-30 blur-2xl" style={{zIndex: '8'}}></div>
            <div className="flex text-2xl fixed w-[100%] h-[100%] p-[50px] items-center " style={{zIndex: '9'}} onClick={onCancel}></div>

            <div className="h-[400px] w-[400px] justify-center items-center text bg-slate-300 rounded-md absolute p-2" style={{zIndex: '10'}} onClick={null}>
                <div className="grid grid-flow-col items-stretch bg-slate-300 border-2 border-purple-800 h-[25px] rounded-full flex-row" style={{zIndex: '11'}} >
                    <div className="border border-purple-800" onClick={()=>setSeleted('Javascript')}>
                        Fetch
                    </div>
                    <div className="border border-purple-800" onClick={()=>setSeleted('Javascript (axios)')}>
                        Axios
                    </div>
                    <div className="border border-purple-800" onClick={()=>setSeleted('Flutter')}>
                        Dart
                    </div>
                    <div className="border border-purple-800" onClick={()=>setSeleted('Python')}>
                        Python
                    </div>
                </div>
                <div className="flex bg-slate-500">
                    {selected === 'Javascript' && <div className="border border-purple-800" >
                        Javascript (fetch)

                        <SetUpJavascript parameters={parameters}/>;
                    </div>}
                    {selected === 'Flutter' && <div className="border border-purple-800" >
                        Flutter

                        <SetUpDart parameters={parameters}/>;
                    </div>}
                    {selected === 'Javascript (axios)' && <div className="border border-purple-800" >
                        Javascript (axios)

                        <SetUpJavaScriptAxios parameters={parameters}/>;
                    </div>}
                    {selected === 'Python' && <div className="border border-purple-800" >
                        Python

                        <SetUpPython parameters={parameters}/>;
                    </div>}
                </div>
            </div>
        </>
    )
}

export default GenerateApiPopup;