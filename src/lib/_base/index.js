class Base {
    constructor(host, {setError, setIsLoading, cookies, setPopError}) {
        this.host = host;
        this.setIsLoading = setIsLoading; 
        this.isLoading = false;
        this.setPopUpError = setPopError
        this.error = setError;
        this.token = cookies.token || '';
        this.reconfigureHeader();
    }

    reconfigureHeader = () => {
        this.HEADER = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${this.token}`
        }
    }

    request = async ({path, body, method, contentType}) => {
        const host = `${this.host}${path}`
        try {
            this.HEADER["Content-Type"] = contentType;

            const response = await fetch(host, { body, headers: this.HEADER, method });
            if (method === 'delete') {console.log('Response: ',await response.json());}
            if (response.status === 200 || response.status === 403 || response.status === 201 || response.status === 401 ) {
                return await response.json();
            }
            return { status: false, error: response.statusText }
        } catch (error) {
            console.log('ERROR: ',error);
            return { status: false, error }
        }
    }

    setDelayLoading = (state) => {
        setTimeout(() => {
            this.setIsLoading(state);
        }, 2000);
    }

    setError = (error) => {
        if (typeof(error) === 'string') {
            return this.error([error])
        }
        return this.error(error);
    }

    setPopError = (error) => {
        if (typeof(error) === 'string') {
            return this.setPopUpError([error])
        }
        return this.error(error);
    }

    _toPage = (page) => {
        window.location.href = page
    }

    _toAuth = ()=> {
        this._toPage('/auth');
    }

    _toDashBoard = () => {
        this._toPage('/dashboard');
    }

    _toHomePage = () => {
        this._toPage('/');
    }
}

export default Base;