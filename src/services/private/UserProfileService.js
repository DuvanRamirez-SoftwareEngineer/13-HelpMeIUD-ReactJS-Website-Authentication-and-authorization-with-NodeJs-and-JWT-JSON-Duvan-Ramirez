import {
    axiosConfig
} from "../../config/axiosConfig";


export const getUserById = async () => {

    axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

    const url = "/users/profile";
    const resp = await axiosConfig.get(url);
    return resp.data;
}

export const edit = async (user) => {

    axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

    const url = "/users/profile";
    console.log(user);
    return await axiosConfig.put(url, user);
}

export const uploadImage = async (file) => {
    axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

    const url = "/users/upload";
    const formData = new FormData();
    formData.append("image", file);
    const resp = await axiosConfig.post(url, formData);
    return resp.data;
}