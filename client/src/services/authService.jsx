
import { api } from '../api/api'
export const loginService = async(username,password) => {
    const data = await api.post("/api/login", { username,password});
    console.log('error is',data);
    return { message : 'logged in', success : true}
}