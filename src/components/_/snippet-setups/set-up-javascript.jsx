import { useEffect } from "react";
import CodeExample from "./code-example";

const SetUpJavascript = ({parameters}) => {
    console.log(parameters);
    let snippet = `
const schedule = require('scheduler');

const res = await schedule({
  email: "schedule@mail.com", 
  details: ${JSON.stringify(parameters)}
  pubKey: "12344567223421",
  templateKey: "123456789897"
});
    `;

    return (
    <>
        <div className="">
            <CodeExample example={snippet} type="javascript" />
        </div>
    </>
    )
}

export default SetUpJavascript;

