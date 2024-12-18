import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json',
};
export const login = async (user) => {
        return await axiosConfig.post(
                process.env.REACT_APP_AUTH_URL,
                user, 
                {
                    headers: headers
                }
            );
}

export const logout = () => {
    console.log('logout auth service')
    sessionStorage.clear();
}