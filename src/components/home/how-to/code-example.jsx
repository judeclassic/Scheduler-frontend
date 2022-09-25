//@ts-check
import { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

const CodeExample = ({rotation, example, type}) => {
    const [code, setCode] = useState(example);
      return (
        <div className={`md:w-[350px] w-[80%] h-[400px] rounded-lg bg-[#f5f5f5] p-5 ${rotation} mt-[100px]`}>
            <CodeEditor
                value={code}
                language={type}
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>
      );
}

export default CodeExample;