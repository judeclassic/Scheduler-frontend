//@ts-check
import { useState } from "react";
import { DocCard } from "../../_/card";
import Codeblocks from "../../_/code-block";
import DocTabs from "../../_/tabs/doc-tabs";
import {javascriptFetchApiExample, nodeJsAxiosApiExample, pythonRequestApiExample, dartApiExample } from '../../../examples/snippets/how-to';

const TestingTab = () => {
    const [ tabIndex, setTabIndex ] = useState('JavaScript');
    
    return (
        <div className="">
            <h2 className="text-base font-bold">30 Days Performance</h2>
            <div className="flex justify-between mt-4 space-y-3 mb-8 flex-col md:flex-col md:space-x-4 md:space-y-0 md:mb-14">
                <DocTabs setTabIndex={setTabIndex} tabIndex={tabIndex}/>

                <DocCard
                    title={'Install The Sdk'}
                    discription={''} 
                    tabIndex={tabIndex}
                    forPython={<Codeblocks code={pythonRequestApiExample()} language={'python'} />}
                    forJavaScript={<Codeblocks code={javascriptFetchApiExample()} language={'js'} />}
                    forFlutter={<Codeblocks code={dartApiExample()} language={'dart'} />}
                    forNodeJs={<Codeblocks code={nodeJsAxiosApiExample()} language={'js'} />}
                />
                <DocCard
                    title={'Install The Sdk'}
                    discription={''} 
                    tabIndex={tabIndex}
                    forPython={<Codeblocks code={pythonRequestApiExample()} language={'python'} />}
                    forJavaScript={<Codeblocks code={javascriptFetchApiExample()} language={'js'} />}
                    forFlutter={<Codeblocks code={dartApiExample()} language={'dart'} />}
                    forNodeJs={<Codeblocks code={nodeJsAxiosApiExample()} language={'js'} />}
                />

            </div>
        </div>
    )
}

export default TestingTab;