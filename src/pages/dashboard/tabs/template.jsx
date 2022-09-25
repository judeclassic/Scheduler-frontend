//@ts-check
import { useContext, useEffect, useState } from "react"
import { TemplateTabView } from "../../../components/dashboard"
import CreateModal from "../../../components/dashboard/template/create-template"
import { UserContext } from "../../../context/userContext"
import GenerateApiPopup from "../../../components/_/modal//generate-api-popup";

const TemplateTab = () => {
    // @ts-ignore
    const { userRequest, construct, templates } = useContext(UserContext);
    const [ isCreationModal, setIsCreationModal ] = useState(false)
    const [ apiPopup, setIsApiPopup ] = useState(null)
    const [ name, setName ] = useState(null);
    const [ templateId, setTemplateId ] = useState(null);
    const [ templateLink, setTemplateLink ] = useState(null);

    const handleSave = async ({ newName, id, code }) => {
        userRequest.updateTemplate({name: newName, id, code});
    }

    const cancelModal = () => {
        setTemplateId(null);
        setName(null);
        setTemplateLink(null);
        setIsCreationModal(false)
    }

    const openCreateTemplateModal = () => {
        setName('New Template');
        setTemplateId(construct.generateId)
        setIsCreationModal(true)
    }

    const generateApi = (code, parameters) => {
        setIsApiPopup({code, parameters});
    };

    const editTemplate = (_name, _id, _link, id) => {
        setTemplateId(id);
        setName(_name);
        setTemplateLink(_link);
        setIsCreationModal(true);
    }
    
    const deleteTemplate = (_id) => {
        userRequest.deleteTemplate({id: _id});
    }

    useEffect(()=>{
        userRequest.getTemplates();
    },[]);

    return (
        <>
            {apiPopup && <GenerateApiPopup codes={apiPopup} onCancel={()=>setIsApiPopup(null)}/>}
            {isCreationModal ? 
                <CreateModal name={name} id={templateId} onGenerate={generateApi} handleSave={handleSave} cancelModal={cancelModal} templateLink={templateLink} />
                :
                <TemplateTabView createTemplate={openCreateTemplateModal} editTemplate={editTemplate} deleteTemplate={deleteTemplate} templates={templates} />
            }
        </>
    )
}

export default  TemplateTab;