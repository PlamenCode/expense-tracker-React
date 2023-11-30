const requester = async (method, url, data) => {
    const options = {};

    if(method !== 'GET'){
        options.headers = {
            'Content-Type': 'application/json',
        };
        if(data){
            options.body = JSON.stringify(data);
        }
    };

    if(localStorage.getItem('auth')){
        options.user = localStorage.getItem('auth');
    };

    const responce = await fetch(url, options);

    if(responce.status == 204){ return {} };

    const result = await responce.json();

    if(!responce.ok){ throw result };

    return result;
};

export const requestFactory = () => {
    return{
        get: requester.bind( null, 'GET' ),
        post: requester.bind( null, 'POST' ),
        put: requester.bind( null, 'PUT' ),
        patch: requester.bind( null, 'PATCH' ),
        delete: requester.bind( null, 'DELETE' ),
    }
}