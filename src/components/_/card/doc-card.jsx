//@ts-check

import { useState } from "react";
import DocTabs from "../../_/tabs/doc-tabs";

const DocCard = ({title, discription, tabIndex, forPython, forJavaScript, forFlutter, forNodeJs}) => {

    return(
        <div>
            <div>
                <h2>{title}</h2>
                {discription}
            </div>
            <div className=' min-h-[100px]'>
                <div>{tabIndex === 'JavaScript' && forJavaScript} </div>
                <div>{tabIndex === 'Python' &&  forPython}</div>
                <div>{tabIndex === 'Flutter' && forFlutter}</div>
                <div>{tabIndex === 'NodeJs' && forNodeJs}</div>
            </div>
        </div>
    )
}

export default DocCard;