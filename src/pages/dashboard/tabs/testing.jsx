//@ts-check
import { useContext } from "react";
import { TestingTabView } from "../../../components/dashboard"
import { UserContext } from "../../../context/userContext";

const TestingTab = () => {
    // @ts-ignore
    const { userRequest, templates } = useContext(UserContext);

    

    return (
        <TestingTabView />
    )
}

export default TestingTab