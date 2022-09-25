import { createContext, useState } from 'react';
import UserRequest from '../lib/user';
import { useCookies } from 'react-cookie';
import {v4 as uuid} from 'uuid';

export const UserContext = createContext({});

class Snippet {
    generateId = () => {
        return uuid().split('-').join('');
    }
}

const UserProvider = ({children}) => {
    const [cookies, setCookie ] = useCookies(['name', 'token', 'id']);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ popError, setPopError ] = useState([]);
    const [ error, setError ] = useState([]);
    const [ user, setUser ] = useState({});
    const [ templates, setTemplates ] = useState([])
    const host = `${process.env.VITE_APP_BACKEND_ENDPOINT}/v1/api/user`;

    const userRequest =  new UserRequest(host, { setUser, setTemplates, cookies, setCookie, setError, setIsLoading, setPopError });
    const construct = new Snippet();

    return (
        <UserContext.Provider value= {{ isLoading, error, popError, user, templates, userRequest, construct }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;