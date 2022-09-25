//@ts-check
import TemplateRequest from "../template";

class UserRequest extends TemplateRequest {
    constructor(host, {setUser, setTemplates, cookies, setCookie, setError, setIsLoading, setPopError}) {
        super(host, {setTemplates, cookies, setCookie, setError, setIsLoading, setPopError});
        this.host = host;
        this.token = cookies.token || '';
        this.userID = null;
        this.setUser = setUser
        this.setCookie = setCookie;
    }

    getAllCountries = async () => {
        try {
            let result = await fetch('https://countriesnow.space/api/v0.1/countries/',);
            let res = await result.json();
            if (res.error === false) {
                return res.data;
            }
            return []
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    loginUser = async ({email, password}) => {
        this.setIsLoading(true);
        let body = JSON.stringify({email, password});

        const response = await this.request({
            path: '/sign-in',
            body,
            method: 'post',
            contentType: 'application/json'
        });
        if ( response.status === true ) {
            this.setUser({...response.user.data, _id: undefined, password: undefined});
            this.token = response.user.token;
            this.setCookie('token', response.user.token);
            this.userID = response.user._id;
            this.reconfigureHeader();
            this._toDashBoard();
        } else {
            this.setError(response.error);
        }
        this.setDelayLoading(false);
    }

    registerUser = async ({ name, email, password, country, city }, /** @type {() => any} */ callback) => {
        this.setIsLoading(true);
        try {
            let body = JSON.stringify({ name, email, password, country, city });
            const response = await this.request({
                path: '/sign-up',
                body,
                method: 'post',
                contentType: 'application/json'
            });
            if ( response.status === true ) {
                this.setUser({...response, _id: undefined, password: undefined});
                this.token = response.token;
                this.userID = response.id;
                callback && callback();
            } else {
                this.setError(response.error);
            }
        } catch (error) {
            this.setError(error);
        }
        this.setDelayLoading(false);
    }

    verifyUser = async ({code}) => {
        this.setIsLoading(true);
        try {
            const response = await this.request({
                path: '/verify',
                body: {id: this.userID, code},
                method: 'post',
                contentType: 'application/json'
            });
            if ( response.status === true) {
                this.setUser(response.data);
                this.userID = response.id;
            } else {
                this.setError(response.error);
                if (response.noToken) {
                    this._toAuth();
                }
            }
        } catch (error) {
            this.setError(error);
        }
        this.setIsLoading(false);
    }

    getUserData = async () => {
        try {
            const response = await this.request({
                path: '/',
                body: null,
                method: 'get',
                contentType: 'application/json'
            });
            if ( response.status === true) {
                this.setUser(response.user);
            } else {
                this.setError(response.error)
                if (response.noToken) {
                    this._toAuth();
                }
            }
        } catch (error) {
            this.setPopError(error);
        }
    }

    updateUserSettings = async (users) => {
        this.setIsLoading(true);
        try {
            let body = JSON.stringify(users);
            const response = await this.request({
                path: '/settings/updateUserSettings',
                body,
                method: 'post',
                contentType: 'application/json'
            });
            console.log(response);
            if ( response.status === true ) {
                this.setUser({...response.user, _id: undefined, password: undefined});
                this.userID = response.id;
            } else {
                this.setPopError(response.error);
                if (response.noToken) {
                    this._toAuth();
                }
            }
        } catch (error) {
            this.setPopError(error);
        }
        this.setDelayLoading(false);
    }

    updateApiSettings = async ({webHooks, secretKey}) => {
        this.setIsLoading(true);
        try {
            let body = JSON.stringify({ webHooks, secretKey });
            const response = await this.request({
                path: '/settings/updateApi',
                body,
                method: 'post',
                contentType: 'application/json'
            });
            console.log(response);
            if ( response.status === true ) {
                this.setUser({...response.user, _id: undefined, password: undefined});
                this.userID = response.id;
            } else {
                this.setPopError(response.error);
                if (response.noToken) {
                    this._toAuth();
                }
            }
        } catch (error) {
            this.setPopError(error);
        }
        this.setDelayLoading(false);
    }
}

export default UserRequest;