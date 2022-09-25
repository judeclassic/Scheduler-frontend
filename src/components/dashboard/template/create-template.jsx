//@ts-check
import MainEditor from '../../_/editor';

const CreateModal = ({name, id, templateLink, onGenerate, handleSave, cancelModal}) => {
    return (
        <>
            <div className="h-[1400px] w-screen bg-white " style={{zIndex: '7'}}>
                <div className="h-full w-[85%] bg-white shadow-md rounded-2xl p-[20px]">
                    <MainEditor name={name} id={id} templateLink={templateLink} onSave={handleSave} onGenerate={onGenerate} onCancel={cancelModal} />
                </div>
            </div>
        </>
    )
}

export default CreateModal;