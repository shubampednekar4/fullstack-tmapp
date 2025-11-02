import { api } from "../api/api";

export const loginService = async(creds) => {
    try {
         const response = await api.post('/auth/login',creds);
    return response.data;
    } catch (error) {
        console.log('error is', error)
        return error
    }
   
}

export const registerService = async(creds) => {
    try {
         const response = await api.post('/auth/register',creds);
         return response.data;
    // return { message : "valid creds" , success : true}
    } catch (error) {
        console.log('error is', error)
        return error
    }
   
}