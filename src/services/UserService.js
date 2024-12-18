import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'accept': '*/*',
    'Content-Type': 'application/json',
};

export const register = async (user) => {
    const url = "/users/signup";
    console.log(user);
    return await axiosConfig.post(url, user, {
        headers
    });
}