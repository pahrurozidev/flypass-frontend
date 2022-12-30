import axios from "axios"
import { RootPath } from "../config"

const token = localStorage.getItem("token");

const booking = (path, book) => {
    const promise = new Promise((resolve, reject) => {
        return axios.post(
            `${RootPath}/${path}`,
            book,
            { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                resolve(response)
            }, (error) => {
                reject(error);
            });
    })

    return promise;
}

const getBookByUserLog = (path) => {

    const promise = new Promise((resolve, reject) => {
        axios.get(
            `${RootPath}/${path}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            resolve(response.data.booking)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}


export { booking, getBookByUserLog };