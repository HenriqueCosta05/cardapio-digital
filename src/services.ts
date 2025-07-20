import axios from "axios"

export const get = (url: string) => {
    return axios.get(url)
}

export const post = (url: string, data: any) => {
    return axios.post(url, data)
}

export const put = (url: string, data: any) => {
    return axios.put(url, data)
}

export const del = (url: string) => {
    return axios.delete(url)
}