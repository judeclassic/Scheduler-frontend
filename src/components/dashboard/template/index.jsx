//@ts-check
import { CreateCard } from "../../_/card";
import Template from './template';

const TemplateTab = ({createTemplate, editTemplate, deleteTemplate, templates }) => {

    return (
        <div className="">
            <h2 className="text-base font-bold">View Email Templates</h2>
            <div className="flex justify-between mt-4 space-y-3 mb-4 flex-col md:flex-row md:mb-4">
                <a className=" w-[250px]" onClick={createTemplate}><CreateCard value={'Create Template'}/></a>
            </div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" />
            <div className="mt-4 p-[20px] space-y-6">
                {templates && templates.map(({ name, id, link, _id }) => {
                    return <Template name={name} templeteId={_id} editTemplate={()=>editTemplate(name, id, link, _id)} deleteTemplate={()=>deleteTemplate(_id)}/>
                })}
            </div>
        </div>
    )
}

export default TemplateTab;