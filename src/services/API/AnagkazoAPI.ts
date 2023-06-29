import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL

const post = (url: string, data: any, headers: object) => {
    const formData = new FormData();
    
    Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
    });
    
    return axios(BASE_URL+url, {
         method: 'POST',
         headers: {
           'Content-Type': '"application/json"',
           ...headers,
         },
         data: formData
       });
}

const get = (url: string, headers: object) => {
    
    return axios(BASE_URL+url, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers,
        },
    });
}

const deleteRequest = (url: string, headers: object) => {
    return axios(BASE_URL+url, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers,
        },
    });
}

const put = (url: string, data: any, headers: object) => {
    return axios(BASE_URL+url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers,
        },
        data: data
    });
}

const auth = (url: string, data: any, headers: object) => {
    return axios(BASE_URL+url, {
        method: 'POST',
        headers: {
            'Content-Type': '"application/json"',
            'Accept': 'application/json',
            ...headers,
        },
        data: JSON.stringify(data)
    });
}

export { post, get, deleteRequest, put, auth}



