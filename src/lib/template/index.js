//@ts-check
import _Base from "../_base";

class TemplateRequest extends _Base {
    constructor(host, {setTemplates, cookies, setCookie, setError, setIsLoading, setPopError}) {
        super(host, {setError, setIsLoading, cookies, setPopError});
        this.host = host;
        this.token = cookies.token || '';
        this.userID = null;
        this.setTemplates = setTemplates
        this.setCookie = setCookie;
    }

    /**
     * 
     * @param {{name : String, id : String, code : String}} param0 
     */
    updateTemplate = async ({name, id, code})=> {
        const myHeaders = new Headers();
        myHeaders.append("Authorization",  `Bearer ${this.token}`);
        this.setIsLoading(true);
        const host = `${this.host}/template/update`
        try {
            const formdata = new FormData();
            formdata.append("templateName", name);
            formdata.append("templateId", id);
            const blob = new Blob([code]);
            formdata.append("code", blob, "code.html");

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
    
            // @ts-ignore
            const response = await fetch(host, requestOptions)
            if (response.status === 200 || response.status === 403 || response.status === 201 || response.status === 401 ) {
                const json =  await response.json();
                if (json.status) {
                    this.getTemplates();
                    this.setDelayLoading(false);
                    return {status: true, message: json.data};
                }
                this.setDelayLoading(false);
                return { status: false, error: json.message };
            }
            this.setDelayLoading(false);
            return { status: false, error: response.statusText }
        } catch (error) {
            this.setDelayLoading(false);
            return { status: false, error }
        }
    }

    getTemplates = async () => {
        try {
            const response = await this.request({
                path: '/template/',
                body: null,
                method: 'get',
                contentType: 'application/json'
            });
            if ( response.status === true) {
                this.setTemplates(response.template);
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

    deleteTemplate = async ({id}) => {
        try {
            this.setIsLoading(true);
            const response = await this.request({
                path: '/template/delete',
                body: JSON.stringify({templateId: id}),
                method: 'delete',
                contentType: 'application/json'
            });
            console.log(response)
            if ( response.status === false) {
                this.setError(response.error);
                if (response.noToken) {
                    this._toAuth();
                }
            }
            this.getTemplates();
        } catch (error) {
            this.setPopError(error);
        }
        this.setDelayLoading(false);
    }
}

export default TemplateRequest;