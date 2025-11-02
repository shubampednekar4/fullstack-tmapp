import { api } from "../api/api";

export const loginService = async(creds) => {
    try {
         const data = await api.post('/login',creds);
    console.log('loginService', data)
    return { message : "valid creds" , success : true}
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