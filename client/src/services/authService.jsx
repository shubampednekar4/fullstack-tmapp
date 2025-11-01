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